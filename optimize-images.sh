#!/bin/bash

################################################################################
# IMAGE RENAME + OPTIMIZATION SCRIPT FOR ANIMAL LIBERATION NOW! WEBSITE
################################################################################
#
# Combines filename standardization and web-optimization into a single script.
#
# PHASE 1 - RENAME: enforces naming conventions across public/ (removes
#   "Copy of " prefixes, spaces, mixed casing; applies category-specific
#   conventions; sequentially numbers event gallery images).
# PHASE 2 - OPTIMIZE: converts images to WebP (+ JPG fallback), resizes to
#   category-appropriate dimensions, and compresses (~96% size reduction).
#
# NAMING CONVENTIONS ENFORCED:
# ----------------------------
#
# 1. HEROES FOLDER (public/heroes/)
#    Convention: {page-name}-hero.webp
#    Examples: home-hero.webp, activism-hero.webp
#
# 2. EVENTS FOLDER (public/events/)
#    Convention: {YYYYMMDD}-{location}-{event-type}/
#                ├── thumb.webp (first image becomes thumbnail)
#                └── {event-slug}-{01-99}.webp
#    Examples: 20260705-chennai-pondy-bazaar/
#              ├── thumb.webp
#              ├── pondy-protest-01.webp
#              ├── pondy-protest-02.webp
#
# 3. TEAM FOLDER (public/team/)
#    Convention: {firstname}-{lastname}.webp
#    Examples: samaran-kumar.webp, mahesh-sharma.webp
#
# 4. MISC FOLDER (public/misc/)
#    Convention: {descriptive-kebab-case}.webp
#    Examples: ns3-background.webp, protest-banner.webp
#
# TRANSFORMATIONS APPLIED (rename phase):
# ----------------------------------------
# - Remove "Copy of " prefix
# - Convert spaces to hyphens
# - Convert to lowercase
# - Remove special characters (keep only alphanumeric, hyphens, dots)
# - Normalize multiple hyphens to single hyphen
# - Remove leading/trailing hyphens
#
# IDEAL IMAGE SIZES (optimize phase, WEB OPTIMIZED):
# ----------------------------------------------------
#
# 1. HERO/BANNER IMAGES (Homepage, Pages)
#    - Format: WebP (with JPG fallback)
#    - Dimensions: 1920x1080px (misc/) or 2560x1440px (heroes/)
#    - Quality: 82-85%
#    - Use Cases: Hero backgrounds, page headers
#
# 2. EVENT GALLERY IMAGES
#    - Format: WebP
#    - Dimensions: 1920x1280px max
#    - Quality: 80%
#    - Use Cases: Event detail page image galleries
#
# 3. TEAM MEMBER PHOTOS (Profile pictures)
#    - Format: WebP
#    - Dimensions: 800x800px
#    - Quality: 80%
#    - Use Cases: Team member cards
#
# 4. LOGOS/ICONS (Vector graphics)
#    - Format: SVG (already optimized) - kept as-is, no conversion needed
#
# WHY WebP FORMAT?
# ----------------
# - 25-35% smaller than JPG at same quality
# - Supports transparency (like PNG)
# - Supported by 95%+ of browsers
# - Better compression than PNG/JPG
# - Generates JPG fallback for old browsers
#
# USAGE:
# ------
#   ./optimize-images.sh            Dry run: preview renames only. Nothing is
#                                    touched and optimization does NOT run.
#   ./optimize-images.sh --apply    Renames files, then immediately optimizes
#                                    them (WebP + JPG fallback) in one pass.
#
# NOTES:
# - Original images backed up in originals/ (repo root, gitignored) before
#   optimization. Deliberately NOT under public/ - Vite copies public/ into
#   dist/, so backups there would be deployed.
# - Re-running is safe: event images already matching the naming convention are
#   left alone, and new ones are appended after the highest number in use.
# - Review optimized images before deleting backups.
# - Script handles JPG, JPEG, PNG, HEIC (uppercase and lowercase).
# - HEIC files are converted to JPG first, then optimized to WebP.
# - Skips WebP, SVG, and video files automatically.
# - Event folders get standardized to: YYYYMMDD-location-type/
# - Event images get sequential numbering: thumb.webp, event-01.webp, etc.
#
# REQUIREMENTS:
# -------------
# - ImageMagick installed (sudo apt install imagemagick) - only needed for --apply
# - pillow-heif for HEIC support (pip3 install --user pillow-heif)
#   NOTE: apt's libheif-examples (heif-convert) ships libheif 1.12, which fails on
#   many modern iPhone HEIC files ("Too many auxiliary image references", etc.).
#   pillow-heif bundles a newer libheif and handles them correctly.
# - Sufficient disk space for backup (~600MB)
#
################################################################################

set -e  # Exit on error
shopt -s lastpipe  # Let `find | while read` loops mutate variables in this shell,
                   # not a subshell - otherwise every counter below silently stays 0.

# Color codes for output
RED='\033[0;31m'
GREEN='\033[0;32m'
YELLOW='\033[1;33m'
BLUE='\033[0;34m'
CYAN='\033[0;36m'
NC='\033[0m' # No Color

# Base directory
PUBLIC_DIR="public"
# Backups live OUTSIDE public/ - anything under public/ is copied into dist/ by
# Vite and would be deployed to S3.
BACKUP_DIR="originals"
DRY_RUN=true

# Category folders handled by their own optimization pass below. The catch-all
# pass must skip these, or it re-processes their output at lower settings.
CATEGORY_DIRS=(heroes team misc events)

# Parse arguments
if [[ "$1" == "--apply" ]]; then
    DRY_RUN=false
fi

echo -e "${BLUE}╔════════════════════════════════════════════════════════════════╗${NC}"
echo -e "${BLUE}║      IMAGE RENAME + OPTIMIZATION SCRIPT - ALN Website          ║${NC}"
echo -e "${BLUE}╚════════════════════════════════════════════════════════════════╝${NC}"
echo ""

if [ "$DRY_RUN" = true ]; then
    echo -e "${YELLOW}🔍 DRY RUN MODE - Previewing renames only.${NC}"
    echo -e "${YELLOW}   No files will be touched and optimization will NOT run.${NC}"
    echo -e "${YELLOW}   Run with --apply to rename AND optimize.${NC}"
else
    echo -e "${RED}⚠️  APPLY MODE - Files will be renamed and optimized!${NC}"
    echo -e "${YELLOW}   Press Ctrl+C within 3 seconds to cancel...${NC}"
    sleep 3
fi
echo ""

# Statistics counters
dirs_renamed=0
files_renamed=0
total_original_size=0
total_optimized_size=0
files_processed=0

################################################################################
# FUNCTION: Sanitize filename
################################################################################
# Converts filename to kebab-case following our conventions
################################################################################
sanitize_filename() {
    local filename="$1"
    local extension="${filename##*.}"
    local basename="${filename%.*}"

    # Remove "Copy of " prefix (case-insensitive)
    basename=$(echo "$basename" | sed 's/^[Cc]opy [Oo]f //g')

    # Convert to lowercase
    basename=$(echo "$basename" | tr '[:upper:]' '[:lower:]')

    # Replace spaces and underscores with hyphens
    basename=$(echo "$basename" | tr ' _' '-')

    # Remove special characters (keep only alphanumeric, hyphens, dots)
    basename=$(echo "$basename" | sed 's/[^a-z0-9.-]/-/g')

    # Remove parentheses and their contents
    basename=$(echo "$basename" | sed 's/([^)]*)//g')

    # Normalize multiple hyphens to single hyphen
    basename=$(echo "$basename" | sed 's/-\+/-/g')

    # Remove leading/trailing hyphens
    basename=$(echo "$basename" | sed 's/^-\+//g' | sed 's/-\+$//g')

    # Convert extension to lowercase
    extension=$(echo "$extension" | tr '[:upper:]' '[:lower:]')

    echo "${basename}.${extension}"
}

################################################################################
# FUNCTION: Rename file with logging
################################################################################
rename_file() {
    local old_path="$1"
    local new_path="$2"

    if [ "$old_path" = "$new_path" ]; then
        return
    fi

    echo -e "${CYAN}  Rename:${NC} $(basename "$old_path") ${YELLOW}→${NC} $(basename "$new_path")"

    if [ "$DRY_RUN" = false ]; then
        # Check if target already exists
        if [ -f "$new_path" ]; then
            echo -e "    ${RED}⚠️  Target exists, skipping${NC}"
            return
        fi
        mv "$old_path" "$new_path"
        files_renamed=$((files_renamed + 1))
    fi
}

################################################################################
# FUNCTION: Rename directory with logging
################################################################################
rename_directory() {
    local old_path="$1"
    local new_path="$2"

    if [ "$old_path" = "$new_path" ]; then
        return
    fi

    echo -e "${GREEN}  Rename Dir:${NC} $(basename "$old_path") ${YELLOW}→${NC} $(basename "$new_path")"

    if [ "$DRY_RUN" = false ]; then
        # Check if target already exists
        if [ -d "$new_path" ]; then
            echo -e "    ${RED}⚠️  Target directory exists, skipping${NC}"
            return
        fi
        mv "$old_path" "$new_path"
        dirs_renamed=$((dirs_renamed + 1))
    fi
}

################################################################################
# PHASE 1, STEP 1: RENAME EVENT DIRECTORIES
################################################################################
echo -e "${BLUE}📁 Renaming event directories...${NC}\n"

if [ -d "$PUBLIC_DIR/events" ]; then
    find "$PUBLIC_DIR/events" -mindepth 1 -maxdepth 1 -type d | while read -r dir; do
        dirname=$(basename "$dir")

        # Skip already processed directories
        if [[ "$dirname" == "temp-old" ]]; then
            echo -e "  ${BLUE}⏭️  Skipping${NC} $dirname (marked as old)"
            continue
        fi

        # Sanitize directory name
        new_dirname=$(sanitize_filename "$dirname")

        # If it's a dated event folder, ensure proper format: YYYYMMDD-location-type
        # Strips special characters too - a "+" or space left in a directory name
        # ends up in every image URL beneath it and has to be percent-encoded.
        if [[ "$dirname" =~ ^[0-9]{8} ]]; then
            new_dirname=$(echo "$dirname" \
                | tr '[:upper:]' '[:lower:]' \
                | tr ' _' '-' \
                | sed 's/[^a-z0-9-]/-/g; s/-\+/-/g; s/^-\+//; s/-\+$//')
        fi

        new_dir="$PUBLIC_DIR/events/$new_dirname"
        rename_directory "$dir" "$new_dir"
    done
fi

################################################################################
# PHASE 1, STEP 2: RENAME FILES IN ALL DIRECTORIES
################################################################################
echo -e "\n${BLUE}📄 Renaming image files...${NC}\n"

# Process each directory separately to maintain context
for category_dir in "$PUBLIC_DIR"/{heroes,team,misc,events}; do
    if [ ! -d "$category_dir" ]; then
        continue
    fi

    category=$(basename "$category_dir")
    echo -e "${YELLOW}Processing: $category/${NC}"

    # Find all image files recursively
    find "$category_dir" -type f \( \
        -iname "*.jpg" -o \
        -iname "*.jpeg" -o \
        -iname "*.png" -o \
        -iname "*.webp" -o \
        -iname "*.heic" -o \
        -iname "*.gif" -o \
        -iname "*.bmp" \
    \) | while read -r file; do
        filename=$(basename "$file")
        dirname=$(dirname "$file")

        # Sanitize the filename
        new_filename=$(sanitize_filename "$filename")

        # Apply category-specific naming conventions
        case "$category" in
            "heroes")
                # Only suffix raw incoming files. A .webp here is already
                # optimized output that page code is referencing by name -
                # renaming it would break those references on every re-run.
                if [[ "${new_filename##*.}" != "webp" ]] && [[ ! "$new_filename" =~ -hero\. ]]; then
                    extension="${new_filename##*.}"
                    basename="${new_filename%.*}"
                    new_filename="${basename}-hero.${extension}"
                fi
                ;;
        esac

        new_path="$dirname/$new_filename"
        rename_file "$file" "$new_path"
    done
done

################################################################################
# PHASE 1, STEP 3: SEQUENTIAL NUMBERING FOR EVENT IMAGES
################################################################################
echo -e "\n${BLUE}🔢 Applying sequential numbering to event images...${NC}\n"

if [ -d "$PUBLIC_DIR/events" ]; then
    find "$PUBLIC_DIR/events" -mindepth 1 -maxdepth 1 -type d | while read -r event_dir; do
        event_name=$(basename "$event_dir")

        # Skip temp-old
        if [[ "$event_name" == "temp-old" ]]; then
            continue
        fi

        echo -e "${YELLOW}Event: $event_name${NC}"

        # Event slug: strip the YYYYMMDD- prefix, then apply the same character
        # rules as filenames. Without this, a folder like
        # "20260719-Coimbatore-Inaugration + Workshop" yields filenames with
        # spaces and a "+" in them, which then need URL-encoding to load.
        event_slug=$(echo "$event_name" \
            | sed 's/^[0-9]\{8\}-\?//' \
            | tr '[:upper:]' '[:lower:]' \
            | tr ' _' '-' \
            | sed 's/[^a-z0-9-]/-/g; s/-\+/-/g; s/^-\+//; s/-\+$//')

        # Files already matching the convention are left untouched, and new
        # files are appended after the highest number in use. Renumbering from
        # scratch on every run would silently break any eventsData.ts path
        # pointing at an existing gallery image.
        # Any prefix counts, not just the current slug, so a folder rename
        # continues the existing sequence instead of restarting at 01 and
        # leaving two numbering schemes side by side.
        highest=0
        for existing in "$event_dir"/*-[0-9][0-9].*; do
            [ -e "$existing" ] || continue
            n=$(basename "$existing" | sed 's/^.*-\([0-9]\{2\}\)\.[^.]*$/\1/')
            [[ "$n" =~ ^[0-9]{2}$ ]] || continue
            n=$((10#$n))
            [ "$n" -gt "$highest" ] && highest=$n
        done

        has_thumb=false
        for existing in "$event_dir"/thumb.*; do
            [ -e "$existing" ] && has_thumb=true && break
        done

        find "$event_dir" -maxdepth 1 -type f \( -iname "*.jpg" -o -iname "*.jpeg" -o -iname "*.png" -o -iname "*.webp" \) | sort | while read -r file; do
            filename=$(basename "$file")
            extension="${filename##*.}"

            # Already conforms - skip, so the run stays idempotent. The prefix is
            # deliberately not required to match the current slug: renaming a
            # folder must not renumber files that eventsData.ts already points at.
            if [[ "$filename" == thumb.* ]] || [[ "$filename" =~ ^.+-[0-9]{2}\.[^.]+$ ]]; then
                continue
            fi

            if [ "$has_thumb" = false ]; then
                new_filename="thumb.${extension}"
                has_thumb=true
            else
                highest=$((highest + 1))
                new_filename="${event_slug}-$(printf "%02d" "$highest").${extension}"
            fi

            rename_file "$file" "$event_dir/$new_filename"
        done
    done
fi

################################################################################
# RENAME PHASE STATISTICS
################################################################################
echo -e "\n${BLUE}╔════════════════════════════════════════════════════════════════╗${NC}"
echo -e "${BLUE}║                    RENAMING COMPLETE                           ║${NC}"
echo -e "${BLUE}╚════════════════════════════════════════════════════════════════╝${NC}"
echo ""
echo -e "${GREEN}✅ Directories renamed:${NC} $dirs_renamed"
echo -e "${GREEN}✅ Files renamed:${NC} $files_renamed"
echo ""

if [ "$DRY_RUN" = true ]; then
    echo -e "${YELLOW}📋 This was a DRY RUN - no changes were made, and optimization was skipped.${NC}"
    echo -e "${YELLOW}   Run with --apply to rename files AND optimize them.${NC}"
    echo ""
    exit 0
fi

################################################################################
# PHASE 2: OPTIMIZE IMAGES
################################################################################

# Check if ImageMagick is installed
if ! command -v convert &> /dev/null; then
    echo -e "${RED}❌ Error: ImageMagick is not installed${NC}"
    echo -e "${YELLOW}Install it with: sudo apt install imagemagick${NC}"
    exit 1
fi

# Check if pillow-heif is installed (for HEIC support).
# NOTE: system heif-convert (libheif1 from apt, usually 1.12.x) fails to decode many
# modern iPhone HEIC files ("Too many auxiliary image references", "Metadata not
# correctly assigned to image") because it can't handle embedded auxiliary images
# (e.g. Portrait mode depth maps). pillow-heif bundles a much newer libheif that
# handles these correctly.
HEIF_AVAILABLE=false
if command -v python3 &> /dev/null && python3 -c "import pillow_heif" &> /dev/null; then
    HEIF_AVAILABLE=true
    echo -e "${GREEN}✓ HEIC support enabled (pillow-heif found)${NC}"
else
    echo -e "${YELLOW}⚠️  Warning: pillow-heif not found. HEIC files will be skipped.${NC}"
    echo -e "${YELLOW}   Install with: pip3 install --user pillow-heif${NC}"
fi

echo -e "\n${BLUE}╔════════════════════════════════════════════════════════════════╗${NC}"
echo -e "${BLUE}║              STARTING IMAGE OPTIMIZATION                       ║${NC}"
echo -e "${BLUE}╚════════════════════════════════════════════════════════════════╝${NC}"
echo ""

# Create backup directory
echo -e "${YELLOW}📦 Creating backup directory...${NC}"
mkdir -p "$BACKUP_DIR"

################################################################################
# FUNCTION: Optimize Image
################################################################################
# Parameters:
#   $1 - Input file path
#   $2 - Max width
#   $3 - Max height
#   $4 - Quality (1-100)
#   $5 - Category name (for logging)
################################################################################
optimize_image() {
    local input="$1"
    local max_width="$2"
    local max_height="$3"
    local quality="$4"
    local category="$5"

    # Get file extension and convert to lowercase for comparison
    local ext="${input##*.}"
    local ext_lower=$(echo "$ext" | tr '[:upper:]' '[:lower:]')
    local filename=$(basename "$input")
    local dirname=$(dirname "$input")

    # Skip if already WebP or SVG
    if [[ "$ext_lower" == "webp" ]] || [[ "$ext_lower" == "svg" ]]; then
        echo -e "  ${BLUE}⏭️  Skipping${NC} $filename (already optimized format)"
        return
    fi

    # Skip video files
    if [[ "$ext_lower" == "mov" ]] || [[ "$ext_lower" == "mp4" ]] || [[ "$ext_lower" == "avi" ]]; then
        echo -e "  ${BLUE}⏭️  Skipping${NC} $filename (video file)"
        return
    fi

    # Handle HEIC files - convert to JPG first if pillow-heif is available
    if [[ "$ext_lower" == "heic" ]]; then
        if [ "$HEIF_AVAILABLE" = false ]; then
            echo -e "  ${YELLOW}⚠️  Skipping${NC} $filename (HEIC format - pillow-heif not installed)"
            return
        fi

        # Convert HEIC to JPG first
        local temp_jpg="${input%.*}.jpg"
        echo -e "  ${BLUE}🔄 Converting${NC} $filename (HEIC → JPG)"

        python3 -c "
import sys
from pillow_heif import open_heif
from PIL import ImageOps

heif_file = open_heif(sys.argv[1], convert_hdr_to_8bit=True)
img = ImageOps.exif_transpose(heif_file[0].to_pillow())
img.convert('RGB').save(sys.argv[2], 'JPEG', quality=95)
" "$input" "$temp_jpg" 2>/dev/null || {
            echo -e "  ${RED}❌ Failed${NC} to convert HEIC to JPG"
            return
        }

        # Update input to point to the converted JPG
        input="$temp_jpg"
        filename=$(basename "$input")
    fi

    # Backup original
    local backup_path="$BACKUP_DIR/${input#$PUBLIC_DIR/}"
    mkdir -p "$(dirname "$backup_path")"

    if [ ! -f "$backup_path" ]; then
        cp "$input" "$backup_path"
    fi

    # Get original size
    local original_size=$(stat -f%z "$input" 2>/dev/null || stat -c%s "$input" 2>/dev/null)
    total_original_size=$((total_original_size + original_size))

    # Output paths
    local output_webp="${input%.*}.webp"
    local output_jpg="${input%.*}.jpg"

    # Convert to WebP
    convert "$input" \
        -resize "${max_width}x${max_height}>" \
        -strip \
        -quality "$quality" \
        "$output_webp" 2>/dev/null || {
            echo -e "  ${RED}❌ Failed${NC} to convert $filename"
            return
        }

    # Also create JPG fallback for older browsers
    convert "$input" \
        -resize "${max_width}x${max_height}>" \
        -strip \
        -quality "$quality" \
        "$output_jpg" 2>/dev/null || {
            echo -e "  ${RED}❌ Failed${NC} to create JPG fallback for $filename"
        }

    # Remove original if different from output
    if [[ "$input" != "$output_webp" ]] && [[ "$input" != "$output_jpg" ]]; then
        rm "$input"
    fi

    # Get optimized size
    local optimized_size=$(stat -f%z "$output_webp" 2>/dev/null || stat -c%s "$output_webp" 2>/dev/null)
    total_optimized_size=$((total_optimized_size + optimized_size))

    # Calculate reduction
    local reduction=$((100 - (optimized_size * 100 / original_size)))

    # Format sizes for display
    local orig_display=$(numfmt --to=iec-i --suffix=B $original_size 2>/dev/null || echo "${original_size}B")
    local opt_display=$(numfmt --to=iec-i --suffix=B $optimized_size 2>/dev/null || echo "${optimized_size}B")

    echo -e "  ${GREEN}✓${NC} ${category}: $filename"
    echo -e "    ${orig_display} → ${opt_display} (${reduction}% reduction)"

    files_processed=$((files_processed + 1))
}

################################################################################
# OPTIMIZE HERO/BANNER IMAGES (misc/ folder)
################################################################################
echo -e "\n${BLUE}🖼️  Optimizing Hero/Banner Images...${NC}"
echo -e "${YELLOW}Target: 1920x1080px, Quality: 82%, Format: WebP${NC}\n"

find "$PUBLIC_DIR/misc" -type f \( -iname "*.jpg" -o -iname "*.jpeg" -o -iname "*.png" -o -iname "*.heic" \) 2>/dev/null | while read -r file; do
    optimize_image "$file" 1920 1080 82 "Hero"
done

################################################################################
# OPTIMIZE EVENT GALLERY IMAGES
################################################################################
echo -e "\n${BLUE}📸 Optimizing Event Gallery Images...${NC}"
echo -e "${YELLOW}Target: 1920x1280px, Quality: 80%, Format: WebP${NC}\n"

find "$PUBLIC_DIR/events" -type f \( -iname "*.jpg" -o -iname "*.jpeg" -o -iname "*.png" -o -iname "*.heic" \) 2>/dev/null | while read -r file; do
    optimize_image "$file" 1920 1280 80 "Event"
done

################################################################################
# OPTIMIZE TEAM MEMBER PHOTOS
################################################################################
echo -e "\n${BLUE}👥 Optimizing Team Member Photos...${NC}"
echo -e "${YELLOW}Target: 800x800px, Quality: 80%, Format: WebP${NC}\n"

find "$PUBLIC_DIR/team" -type f \( -iname "*.jpg" -o -iname "*.jpeg" -o -iname "*.png" -o -iname "*.heic" \) 2>/dev/null | while read -r file; do
    optimize_image "$file" 800 800 80 "Team"
done

################################################################################
# OPTIMIZE HERO IMAGES (if any in heroes/ folder)
################################################################################
if [ -d "$PUBLIC_DIR/heroes" ]; then
    echo -e "\n${BLUE}🎭 Optimizing Hero Images...${NC}"
    echo -e "${YELLOW}Target: 2560x1440px, Quality: 85%, Format: WebP${NC}\n"

    find "$PUBLIC_DIR/heroes" -type f \( -iname "*.jpg" -o -iname "*.jpeg" -o -iname "*.png" -o -iname "*.heic" \) 2>/dev/null | while read -r file; do
        optimize_image "$file" 2560 1440 85 "Hero"
    done
fi

################################################################################
# CATCH-ALL: OPTIMIZE ANY REMAINING IMAGES IN OTHER FOLDERS
################################################################################
echo -e "\n${BLUE}📁 Scanning for remaining unoptimized images...${NC}"
echo -e "${YELLOW}Target: 1200x800px, Quality: 78%, Format: WebP (default settings)${NC}\n"

# Catches new folders that aren't one of the explicit categories above. The
# category folders are pruned: they have already been optimized at their own
# dimensions, and re-running them here would overwrite that output with smaller,
# lower-quality 1200x800 versions (a 2560x1440 hero would be downgraded).
prune_args=()
for category in "${CATEGORY_DIRS[@]}"; do
    prune_args+=(-path "$PUBLIC_DIR/$category" -prune -o)
done

find "$PUBLIC_DIR" "${prune_args[@]}" \
    -type f \( -iname "*.jpg" -o -iname "*.jpeg" -o -iname "*.png" -o -iname "*.heic" \) \
    -print 2>/dev/null | while read -r file; do
    optimize_image "$file" 1200 800 78 "Other"
done

################################################################################
# DISPLAY STATISTICS
################################################################################
echo -e "\n${BLUE}╔════════════════════════════════════════════════════════════════╗${NC}"
echo -e "${BLUE}║                    OPTIMIZATION COMPLETE                       ║${NC}"
echo -e "${BLUE}╚════════════════════════════════════════════════════════════════╝${NC}"
echo ""

# Format total sizes
orig_total=$(numfmt --to=iec-i --suffix=B $total_original_size 2>/dev/null || echo "${total_original_size}B")
opt_total=$(numfmt --to=iec-i --suffix=B $total_optimized_size 2>/dev/null || echo "${total_optimized_size}B")

if [ $total_original_size -gt 0 ]; then
    total_reduction=$((100 - (total_optimized_size * 100 / total_original_size)))
    saved_bytes=$((total_original_size - total_optimized_size))
    saved_display=$(numfmt --to=iec-i --suffix=B $saved_bytes 2>/dev/null || echo "${saved_bytes}B")

    echo -e "${GREEN}✅ Files Processed:${NC} $files_processed"
    echo -e "${GREEN}📊 Original Size:${NC}   $orig_total"
    echo -e "${GREEN}📊 Optimized Size:${NC}  $opt_total"
    echo -e "${GREEN}💾 Space Saved:${NC}     $saved_display (${total_reduction}% reduction)"
    echo -e "${GREEN}📁 Backups Stored:${NC}  $BACKUP_DIR"
else
    echo -e "${YELLOW}No images found to optimize${NC}"
fi

echo ""
echo -e "${BLUE}════════════════════════════════════════════════════════════════${NC}"
echo -e "${GREEN}Next Steps:${NC}"
echo -e "1. Review optimized images in public/ folder"
echo -e "2. Run: ${YELLOW}npm run dev${NC} to test the website"
echo -e "3. Update image references to use .webp extension"
echo -e "4. Original images backed up in: ${YELLOW}$BACKUP_DIR${NC}"
echo -e "5. If satisfied, you can delete the backup folder to save space"
echo -e "${BLUE}════════════════════════════════════════════════════════════════${NC}"
echo ""
