import { useEffect, useRef, useState } from 'react';

interface ChapterMapProps {
  className?: string;
}

const ChapterMap: React.FC<ChapterMapProps> = ({ className = '' }) => {
  const mapContainerRef = useRef<HTMLDivElement>(null);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    // Only run on client side
    if (typeof window === 'undefined' || !mapContainerRef.current) return;

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

        if (!L || !mapContainerRef.current) return;

        // Fix Leaflet's default icon path issue
        delete L.Icon.Default.prototype._getIconUrl;
        L.Icon.Default.mergeOptions({
          iconRetinaUrl: 'https://unpkg.com/leaflet@1.9.4/dist/images/marker-icon-2x.png',
          iconUrl: 'https://unpkg.com/leaflet@1.9.4/dist/images/marker-icon.png',
          shadowUrl: 'https://unpkg.com/leaflet@1.9.4/dist/images/marker-shadow.png',
        });

        // Initialize the map
        const map = L.map(mapContainerRef.current).setView([20, 0], 3);

        // Load OpenStreetMap tiles
        L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
          maxZoom: 19,
          attribution: '© OpenStreetMap',
          referrerPolicy: 'strict-origin-when-cross-origin'
        }).addTo(map);

        // Define locations
        const locations = [
          { lat: 12.9716, lng: 77.5946, url: '/chapters/bengaluru' },
          { lat: 13.0827, lng: 80.2707, url: '/chapters/chennai' },
        ];

        // Add markers with click events
        locations.forEach(place => {
          const marker = L.marker([place.lat, place.lng]).addTo(map);

          marker.on('click', function () {
            window.location.href = place.url;
          });
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
              console.log(`Detected Country: ${data.country_name}`);
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
      if (mapContainerRef.current) {
        mapContainerRef.current.innerHTML = '';
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
