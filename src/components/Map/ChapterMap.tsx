import { useEffect, useRef, useState } from 'react';

// Leaflet is pulled from a CDN at runtime rather than bundled, so only the
// surface this component actually touches is typed here.
interface LeafletMap {
  setView(center: [number, number], zoom: number): LeafletMap;
  remove(): void;
}

interface LeafletLayer {
  addTo(map: LeafletMap): LeafletLayer;
}

interface LeafletMarker {
  addTo(map: LeafletMap): LeafletMarker;
  on(event: string, handler: () => void): LeafletMarker;
}

interface Leaflet {
  map(element: HTMLElement): LeafletMap;
  tileLayer(urlTemplate: string, options: Record<string, unknown>): LeafletLayer;
  marker(latLng: [number, number], options?: Record<string, unknown>): LeafletMarker;
  Icon: {
    Default: {
      prototype: { _getIconUrl?: unknown };
      mergeOptions(options: Record<string, string>): void;
    };
  };
}

declare global {
  interface Window {
    L?: Leaflet;
  }
}

interface Chapter {
  name: string;
  lat: number;
  lng: number;
  /** Omit to render a non-clickable marker. */
  instagram?: string;
}

const chapters: Chapter[] = [
  { name: 'Bengaluru', lat: 12.9716, lng: 77.5946 },
  {
    name: 'Chennai',
    lat: 13.0827,
    lng: 80.2707,
    instagram: 'https://www.instagram.com/alnchennai/',
  },
  {
    name: 'Coimbatore',
    lat: 11.0168,
    lng: 76.9558,
    instagram: 'https://www.instagram.com/alncoimbatore/',
  },
  {
    name: 'Sri Lanka',
    lat: 7.731,
    lng: 81.6747,
    instagram: 'https://www.instagram.com/alnsrilanka/',
  },
  // { name: 'Vancouver', lat: 49.2827, lng: -123.1207 },
];

interface ChapterMapProps {
  className?: string;
}

const ChapterMap: React.FC<ChapterMapProps> = ({ className = '' }) => {
  const mapContainerRef = useRef<HTMLDivElement>(null);
  const mapInstanceRef = useRef<LeafletMap | null>(null);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    // Only run on client side
    if (typeof window === 'undefined' || !mapContainerRef.current) return;

    // Check if map is already initialized
    if (mapInstanceRef.current) return;

    // Load Leaflet CSS
    const link = document.createElement('link');
    link.rel = 'stylesheet';
    link.href = 'https://unpkg.com/leaflet@1.9.4/dist/leaflet.css';
    document.head.appendChild(link);

    // Wait for CSS to load before initializing map
    link.onload = () => {
      // Load Leaflet JS
      const script = document.createElement('script');
      script.src = 'https://unpkg.com/leaflet@1.9.4/dist/leaflet.js';

      script.onload = () => {
        setIsLoading(false);
        const L = window.L;

        if (!L || !mapContainerRef.current || mapInstanceRef.current) return;

        // Fix Leaflet's default icon path issue
        delete L.Icon.Default.prototype._getIconUrl;
        L.Icon.Default.mergeOptions({
          iconRetinaUrl: 'https://unpkg.com/leaflet@1.9.4/dist/images/marker-icon-2x.png',
          iconUrl: 'https://unpkg.com/leaflet@1.9.4/dist/images/marker-icon.png',
          shadowUrl: 'https://unpkg.com/leaflet@1.9.4/dist/images/marker-shadow.png',
        });

        // Initialize the map
        const map = L.map(mapContainerRef.current).setView([20, 0], 3);
        mapInstanceRef.current = map;

        // Load OpenStreetMap tiles
        L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
          maxZoom: 19,
          attribution: '© OpenStreetMap',
          referrerPolicy: 'strict-origin-when-cross-origin'
        }).addTo(map);
        // Add markers. Chapters with an Instagram handle open it in a new tab
        // on click; the rest are plain pins.
        chapters.forEach(({ name, lat, lng, instagram }) => {
          const marker = L.marker([lat, lng], {
            title: instagram ? `${name} — open on Instagram` : name,
            alt: name,
            keyboard: true,
          }).addTo(map);

          if (instagram) {
            marker.on('click', () => {
              window.open(instagram, '_blank', 'noopener,noreferrer');
            });
          }
        });

        // Detect user's location and pan map
        // fetch('https://ip-api.com/json/')
        //   .then(response => response.json())
        //   .then(data => {
        //     if (data.status === 'success') {
        //       map.setView([data.lat, data.lon], 4);
        //       console.log(`Detected Country: ${data.country}`);
        //     }
        //   })
        //   .catch(error => {
        //     console.error("Error fetching user location:", error);
        //   });
        // Detect user's location and pan map
        fetch('https://ipapi.co/json/')
          .then(response => response.json())
          .then(data => {
            // ipapi.co returns latitude and longitude as 'latitude' and 'longitude'
            if (data.latitude && data.longitude) {
              map.setView([data.latitude, data.longitude], 4);
              // console.log(`Detected Country: ${data.country_name}`);
            }
          })
          .catch(error => {
            console.error("Error fetching user location:", error);
          });
      };

      document.head.appendChild(script);
    };

    // Cleanup
    return () => {
      if (mapInstanceRef.current) {
        mapInstanceRef.current.remove();
        mapInstanceRef.current = null;
      }
    };
  }, []);

  return (
    <div className="relative w-full h-full">
      {isLoading && (
        <div className="absolute inset-0 flex items-center justify-center bg-primary/50 backdrop-blur-sm rounded-2xl z-10">
          <div className="text-text-main">Loading map...</div>
        </div>
      )}
      <div
        ref={mapContainerRef}
        className={className}
        style={{
          height: '500px',
          width: '100%',
          zIndex: 1
        }}
      />
    </div>
  );
};

export default ChapterMap;
