export default function MedicineCard({ med, availability }) {
  return (
    <div className="border rounded p-3">
      <div className="font-semibold">{med.name} ({med.brand})</div>
      <div className="text-sm text-gray-600">Salts: {med.saltComposition.join(", ")}</div>
      <div className="mt-2 space-y-2">
        {availability.length === 0 && <div className="text-red-600">No nearby stock</div>}
        {availability.map((a) => (
          <div key={a.pharmacyId} className="flex justify-between items-center">
            <div>
              <div className="font-medium">{a.pharmacyName}</div>
              <div className="text-xs text-gray-500">
                {a.distanceMeters ? `${Math.round(a.distanceMeters)} m away` : "Distance N/A"}
              </div>
            </div>
            <div className="text-sm">
              <span className={`px-2 py-1 rounded ${a.status === "Available" ? "bg-green-100" : a.status === "Low Stock" ? "bg-yellow-100" : "bg-red-100"}`}>
                {a.status} ({a.count})
              </span>
              <span className="ml-3">₹{a.price}</span>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
