import { useEffect, useRef, useState } from 'react';

interface ChapterMapProps {
  className?: string;
}

const ChapterMap: React.FC<ChapterMapProps> = ({ className = '' }) => {
  const mapContainerRef = useRef<HTMLDivElement>(null);
  const mapInstanceRef = useRef<any>(null);
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
        // @ts-ignore - Leaflet is loaded dynamically
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
        // Define locations
        const locations = [
          { lat: 12.9716, lng: 77.5946 },
          { lat: 13.0827, lng: 80.2707 },
          { lat: 49.2827, lng: -123.1207 },
          { lat: 7.7310, lng: 81.6747 },
        ];

        // Add markers
        locations.forEach(place => {
          L.marker([place.lat, place.lng]).addTo(map);
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
