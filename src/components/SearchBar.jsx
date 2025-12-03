import { useState } from "react";

export default function SearchBar({ onSearch }) {
  const [q, setQ] = useState("");
  const [useGPS, setUseGPS] = useState(true);

  const submit = async (e) => {
    e.preventDefault();
    let coords = {};
    if (useGPS && "geolocation" in navigator) {
      const pos = await new Promise((res, rej) =>
        navigator.geolocation.getCurrentPosition(res, rej, { enableHighAccuracy: true })
      );
      coords = { lat: pos.coords.latitude, lng: pos.coords.longitude };
    }
    onSearch({ q, ...coords });
  };

  return (
    <form className="flex gap-2" onSubmit={submit}>
      <input className="border p-2 flex-1" placeholder="Search by name/salt/brand"
             value={q} onChange={e => setQ(e.target.value)} />
      <label className="flex items-center gap-1">
        <input type="checkbox" checked={useGPS} onChange={() => setUseGPS(!useGPS)} />
        Use GPS
      </label>
      <button className="bg-blue-600 text-white px-4 py-2 rounded">Search</button>
    </form>
  );
}
