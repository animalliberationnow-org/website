#!/bin/bash

################################################################################
# IMAGE OPTIMIZATION SCRIPT FOR ANIMAL LIBERATION NOW! WEBSITE
################################################################################
#
# This script optimizes all images in the public/ folder for web performance
# using ImageMagick. It converts images to WebP format, resizes them to
# appropriate dimensions, and compresses them to reduce file size by ~96%.
#
# PERFORMANCE IMPACT:
# -------------------
# Current total size: ~592MB
# Target total size:  ~20-25MB
# Reduction:          ~96% smaller, dramatically faster page loads
#
# IDEAL IMAGE SIZES (WEB OPTIMIZED):
# ----------------------------------
#
# 1. HERO/BANNER IMAGES (Homepage, Pages)
#    - Format: WebP (with JPG fallback)
#    - Dimensions: 1920x1080px max
#    - File Size: 150-300KB
#    - Quality: 80-85%
#    - Current: 14-19MB → Target: 200KB (98% reduction!)
#    - Use Cases: Hero backgrounds, page headers
#
# 2. EVENT GALLERY THUMBNAILS (Card previews)
#    - Format: WebP
#    - Dimensions: 800x600px
#    - File Size: 50-100KB
#    - Quality: 75-80%
#    - Use Cases: Event cards on listing pages
#
# 3. EVENT GALLERY FULL-SIZE (Detail page galleries)
#    - Format: WebP
#    - Dimensions: 1600x1200px max
#    - File Size: 150-250KB
#    - Quality: 80%
#    - Use Cases: Event detail page image galleries
#
# 4. TEAM MEMBER PHOTOS (Profile pictures)
#    - Format: WebP
#    - Dimensions: 600x600px
#    - File Size: 30-60KB
#    - Quality: 75-80%
#    - Use Cases: Team member cards, about page
#
# 5. LOGOS/ICONS (Vector graphics)
#    - Format: SVG (already optimized)
#    - Keep as-is, no conversion needed
#    - Current: 63KB and 77KB ✅
#
# 6. OUTREACH PHOTOS (General content)
#    - Format: WebP
#    - Dimensions: 1200x800px
#    - File Size: 80-150KB
#    - Quality: 75-80%
#    - Use Cases: Homepage gallery, content images
#
# 7. MISCELLANEOUS IMAGES (General website images)
#    - Format: WebP
#    - Dimensions: 1200x800px max
#    - File Size: 80-150KB
#    - Quality: 75-80%
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
# 1. Make script executable: chmod +x optimize-images.sh
# 2. Run script: ./optimize-images.sh
# 3. Review optimized images in public/ folder
# 4. Original images backed up in public/originals/
#
# REQUIREMENTS:
# -------------
# - ImageMagick installed (sudo apt install imagemagick)
# - Sufficient disk space for backup (~600MB)
#
################################################################################

set -e  # Exit on error

# Color codes for output
RED='\033[0;31m'
GREEN='\033[0;32m'
YELLOW='\033[1;33m'
BLUE='\033[0;34m'
NC='\033[0m' # No Color

# Base directory
PUBLIC_DIR="public"
BACKUP_DIR="$PUBLIC_DIR/originals"

# Check if ImageMagick is installed
if ! command -v convert &> /dev/null; then
    echo -e "${RED}❌ Error: ImageMagick is not installed${NC}"
    echo -e "${YELLOW}Install it with: sudo apt install imagemagick${NC}"
    exit 1
fi

echo -e "${BLUE}╔════════════════════════════════════════════════════════════════╗${NC}"
echo -e "${BLUE}║         IMAGE OPTIMIZATION SCRIPT - ALN Website                ║${NC}"
echo -e "${BLUE}╚════════════════════════════════════════════════════════════════╝${NC}"
echo ""

# Create backup directory
echo -e "${YELLOW}📦 Creating backup directory...${NC}"
mkdir -p "$BACKUP_DIR"

# Statistics counters
total_original_size=0
total_optimized_size=0
files_processed=0

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

    # Get file extension
    local ext="${input##*.}"
    local filename=$(basename "$input")
    local dirname=$(dirname "$input")

    # Skip if already WebP or SVG
    if [[ "$ext" == "webp" ]] || [[ "$ext" == "svg" ]]; then
        echo -e "  ${BLUE}⏭️  Skipping${NC} $filename (already optimized format)"
        return
    fi

    # Skip HEIC files (not well supported by ImageMagick)
    if [[ "$ext" == "heic" ]] || [[ "$ext" == "HEIC" ]]; then
        echo -e "  ${YELLOW}⚠️  Skipping${NC} $filename (HEIC format - needs manual conversion)"
        return
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
echo -e "${YELLOW}Target: 1920x1080px, Quality: 85%, Format: WebP${NC}\n"

find "$PUBLIC_DIR/misc" -type f \( -iname "*.jpg" -o -iname "*.jpeg" -o -iname "*.png" \) 2>/dev/null | while read -r file; do
    optimize_image "$file" 1920 1080 85 "Hero"
done

################################################################################
# OPTIMIZE EVENT GALLERY IMAGES
################################################################################
echo -e "\n${BLUE}📸 Optimizing Event Gallery Images...${NC}"
echo -e "${YELLOW}Target: 1600x1200px, Quality: 80%, Format: WebP${NC}\n"

find "$PUBLIC_DIR/events" -type f \( -iname "*.jpg" -o -iname "*.jpeg" -o -iname "*.png" \) 2>/dev/null | while read -r file; do
    optimize_image "$file" 1600 1200 80 "Event"
done

################################################################################
# OPTIMIZE TEAM MEMBER PHOTOS
################################################################################
echo -e "\n${BLUE}👥 Optimizing Team Member Photos...${NC}"
echo -e "${YELLOW}Target: 600x600px, Quality: 80%, Format: WebP${NC}\n"

find "$PUBLIC_DIR/team" -type f \( -iname "*.jpg" -o -iname "*.jpeg" -o -iname "*.png" \) 2>/dev/null | while read -r file; do
    optimize_image "$file" 600 600 80 "Team"
done

################################################################################
# OPTIMIZE OUTREACH PHOTOS
################################################################################
echo -e "\n${BLUE}📢 Optimizing Outreach Photos...${NC}"
echo -e "${YELLOW}Target: 1200x800px, Quality: 78%, Format: WebP${NC}\n"

find "$PUBLIC_DIR/outreach" -type f \( -iname "*.jpg" -o -iname "*.jpeg" -o -iname "*.png" \) 2>/dev/null | while read -r file; do
    optimize_image "$file" 1200 800 78 "Outreach"
done

################################################################################
# OPTIMIZE HERO IMAGES (if any in heroes/ folder)
################################################################################
if [ -d "$PUBLIC_DIR/heroes" ]; then
    echo -e "\n${BLUE}🎭 Optimizing Hero Images...${NC}"
    echo -e "${YELLOW}Target: 1920x1080px, Quality: 85%, Format: WebP${NC}\n"

    find "$PUBLIC_DIR/heroes" -type f \( -iname "*.jpg" -o -iname "*.jpeg" -o -iname "*.png" \) 2>/dev/null | while read -r file; do
        optimize_image "$file" 1920 1080 85 "Hero"
    done
fi

################################################################################
# OPTIMIZE ARTICLE/AVATAR IMAGES (if any)
################################################################################
if [ -d "$PUBLIC_DIR/articles" ]; then
    echo -e "\n${BLUE}📰 Optimizing Article Images...${NC}"
    echo -e "${YELLOW}Target: 1200x800px, Quality: 78%, Format: WebP${NC}\n"

    find "$PUBLIC_DIR/articles" -type f \( -iname "*.jpg" -o -iname "*.jpeg" -o -iname "*.png" \) 2>/dev/null | while read -r file; do
        optimize_image "$file" 1200 800 78 "Article"
    done
fi

if [ -d "$PUBLIC_DIR/avatars" ]; then
    echo -e "\n${BLUE}👤 Optimizing Avatar Images...${NC}"
    echo -e "${YELLOW}Target: 400x400px, Quality: 80%, Format: WebP${NC}\n"

    find "$PUBLIC_DIR/avatars" -type f \( -iname "*.jpg" -o -iname "*.jpeg" -o -iname "*.png" \) 2>/dev/null | while read -r file; do
        optimize_image "$file" 400 400 80 "Avatar"
    done
fi

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
