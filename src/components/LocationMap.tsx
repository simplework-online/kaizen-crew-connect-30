
import React, { useEffect, useRef, useState } from 'react';
import { MapPin } from 'lucide-react';

interface LocationMapProps {
  locations: Array<{
    city: string;
    address: string;
    phone: string;
  }>;
}

const LocationMap = ({ locations }: LocationMapProps) => {
  const [mapboxToken, setMapboxToken] = useState('');
  const [showTokenInput, setShowTokenInput] = useState(true);
  const mapContainer = useRef<HTMLDivElement>(null);
  const map = useRef<any>(null);

  const initializeMap = async () => {
    if (!mapContainer.current || !mapboxToken) return;

    try {
      const mapboxgl = await import('mapbox-gl');
      await import('mapbox-gl/dist/mapbox-gl.css');

      mapboxgl.default.accessToken = mapboxToken;

      map.current = new mapboxgl.default.Map({
        container: mapContainer.current,
        style: 'mapbox://styles/mapbox/streets-v12',
        center: [9.7320, 52.3759], // Hannover coordinates
        zoom: 10,
      });

      // Add markers for all locations
      const hanoverMarker = new mapboxgl.default.Marker({ color: '#dc2626' })
        .setLngLat([9.7320, 52.3759])
        .setPopup(new mapboxgl.default.Popup().setHTML('<h3>Hannover</h3><p>Königstr. 48, 30175 Hannover</p>'))
        .addTo(map.current);

      const berlinMarker = new mapboxgl.default.Marker({ color: '#dc2626' })
        .setLngLat([13.3777, 52.5164])
        .setPopup(new mapboxgl.default.Popup().setHTML('<h3>Berlin</h3><p>Unter den Linden 77, 10117 Berlin</p>'))
        .addTo(map.current);

      const hamburgMarker = new mapboxgl.default.Marker({ color: '#dc2626' })
        .setLngLat([9.9937, 53.5511])
        .setPopup(new mapboxgl.default.Popup().setHTML('<h3>Hamburg</h3><p>Jungfernstieg 15, 20354 Hamburg</p>'))
        .addTo(map.current);

      const braunschweigMarker = new mapboxgl.default.Marker({ color: '#dc2626' })
        .setLngLat([10.5218, 52.2689])
        .setPopup(new mapboxgl.default.Popup().setHTML('<h3>Braunschweig</h3><p>Hohe Str. 95, 50667 Köln</p>'))
        .addTo(map.current);

      // Add the new location from Google Maps iframe (coordinates: 52.376, 9.749)
      const newLocationMarker = new mapboxgl.default.Marker({ color: '#16a34a' })
        .setLngLat([9.749, 52.376])
        .setPopup(new mapboxgl.default.Popup().setHTML('<h3>Neue Location</h3><p>Standort aus Google Maps</p>'))
        .addTo(map.current);

      // Add navigation controls
      map.current.addControl(new mapboxgl.default.NavigationControl(), 'top-right');

    } catch (error) {
      console.error('Error initializing map:', error);
    }
  };

  useEffect(() => {
    if (mapboxToken && showTokenInput === false) {
      initializeMap();
    }

    return () => {
      if (map.current) {
        map.current.remove();
      }
    };
  }, [mapboxToken, showTokenInput]);

  if (showTokenInput) {
    return (
      <div className="bg-gray-100 rounded-lg h-96 flex items-center justify-center p-8">
        <div className="text-center max-w-md">
          <MapPin className="w-16 h-16 text-gray-500 mx-auto mb-4" />
          <h3 className="text-lg font-semibold mb-4">Interaktive Karte mit KAIZEN Standorten</h3>
          <p className="text-gray-600 mb-4 text-sm">
            Um die Karte anzuzeigen, benötigen Sie einen Mapbox Public Token.
            Erstellen Sie einen kostenlosen Account auf mapbox.com.
          </p>
          <div className="space-y-3">
            <input
              type="text"
              placeholder="Mapbox Public Token eingeben..."
              value={mapboxToken}
              onChange={(e) => setMapboxToken(e.target.value)}
              className="w-full px-3 py-2 border border-gray-300 rounded-md text-sm"
            />
            <button
              onClick={() => setShowTokenInput(false)}
              disabled={!mapboxToken}
              className="w-full bg-red-600 text-white py-2 px-4 rounded-md hover:bg-red-700 disabled:opacity-50 disabled:cursor-not-allowed text-sm"
            >
              Karte laden
            </button>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="bg-gray-300 rounded-lg h-96 overflow-hidden">
      <div ref={mapContainer} className="w-full h-full" />
    </div>
  );
};

export default LocationMap;
