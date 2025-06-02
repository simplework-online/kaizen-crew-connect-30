
import React, { useEffect, useRef } from 'react';
import L from 'leaflet';
import 'leaflet/dist/leaflet.css';

interface LocationMapProps {
  locations: Array<{
    city: string;
    address: string;
    phone: string;
  }>;
}

const LocationMap = ({ locations }: LocationMapProps) => {
  const mapContainer = useRef<HTMLDivElement>(null);
  const map = useRef<L.Map | null>(null);

  useEffect(() => {
    if (!mapContainer.current) return;

    // Initialize the map
    map.current = L.map(mapContainer.current).setView([52.3759, 9.7320], 7);

    // Add OpenStreetMap tiles
    L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
      attribution: '© OpenStreetMap contributors'
    }).addTo(map.current);

    // Create custom red icon for KAIZEN locations
    const redIcon = L.divIcon({
      className: 'custom-marker-red',
      html: '<div style="background-color: #dc2626; width: 25px; height: 25px; border-radius: 50%; border: 2px solid white; box-shadow: 0 2px 4px rgba(0,0,0,0.3);"></div>',
      iconSize: [25, 25],
      iconAnchor: [12, 12]
    });

    // Create custom green icon for new location
    const greenIcon = L.divIcon({
      className: 'custom-marker-green',
      html: '<div style="background-color: #16a34a; width: 25px; height: 25px; border-radius: 50%; border: 2px solid white; box-shadow: 0 2px 4px rgba(0,0,0,0.3);"></div>',
      iconSize: [25, 25],
      iconAnchor: [12, 12]
    });

    // Add markers for all KAIZEN locations
    L.marker([52.3759, 9.7320], { icon: redIcon })
      .addTo(map.current)
      .bindPopup('<h3 style="margin: 0 0 8px 0; font-weight: bold;">Hannover</h3><p style="margin: 0;">Königstr. 48, 30175 Hannover</p>');

    L.marker([52.5164, 13.3777], { icon: redIcon })
      .addTo(map.current)
      .bindPopup('<h3 style="margin: 0 0 8px 0; font-weight: bold;">Berlin</h3><p style="margin: 0;">Unter den Linden 77, 10117 Berlin</p>');

    L.marker([53.5511, 9.9937], { icon: redIcon })
      .addTo(map.current)
      .bindPopup('<h3 style="margin: 0 0 8px 0; font-weight: bold;">Hamburg</h3><p style="margin: 0;">Jungfernstieg 15, 20354 Hamburg</p>');

    L.marker([52.2689, 10.5218], { icon: redIcon })
      .addTo(map.current)
      .bindPopup('<h3 style="margin: 0 0 8px 0; font-weight: bold;">Braunschweig</h3><p style="margin: 0;">Hohe Str. 95, 50667 Köln</p>');

    // Add the new location from Google Maps iframe (coordinates: 52.376, 9.749)
    L.marker([52.376, 9.749], { icon: greenIcon })
      .addTo(map.current)
      .bindPopup('<h3 style="margin: 0 0 8px 0; font-weight: bold;">Neue Location</h3><p style="margin: 0;">Standort aus Google Maps</p>');

    // Cleanup function
    return () => {
      if (map.current) {
        map.current.remove();
        map.current = null;
      }
    };
  }, []);

  return (
    <div className="bg-gray-300 rounded-lg h-96 overflow-hidden">
      <div ref={mapContainer} className="w-full h-full" />
    </div>
  );
};

export default LocationMap;
