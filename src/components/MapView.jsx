import { useEffect } from "react";
import L from "leaflet";

export default function MapView({ pharmacies = [] }) {
  useEffect(() => {
    const map = L.map("map").setView([10.7905, 78.7047], 12); // Tiruchirappalli default
    L.tileLayer("https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png", {
      attribution: "© OpenStreetMap"
    }).addTo(map);

    pharmacies.forEach(ph => {
      const [lng, lat] = ph.location.coordinates;
      L.marker([lat, lng]).addTo(map).bindPopup(`<b>${ph.name}</b><br>${ph.address || ""}`);
    });

    return () => map.remove();
  }, [pharmacies]);

  return <div id="map" className="w-full h-72 rounded border" />;
}
