import { useState } from "react";
import http from "../api/http";
import SearchBar from "../components/SearchBar";
import MedicineCard from "../components/MedicineCard";
import MapView from "../components/MapView";

export default function Home() {
  const [results, setResults] = useState([]);
  const [nearby, setNearby] = useState([]);

  const onSearch = async ({ q, lat, lng }) => {
    const res = await http.get("/medicines/search", { params: { q, lat, lng, radius: 7000 } });
    setResults(res.data);
    if (lat && lng) {
      const ph = await http.get("/pharmacies/nearby", { params: { lat, lng } });
      setNearby(ph.data);
    }
  };

  return (
    <div className="space-y-4">
      <SearchBar onSearch={onSearch} />
      <MapView pharmacies={nearby} />
      <div className="grid gap-3">
        {results.map((r) => (
          <MedicineCard key={r.medicine._id} med={r.medicine} availability={r.availability} />
        ))}
      </div>
    </div>
  );
}
