

export default function WingGrid() {
  const wings = [
    { name: "Primary Wing", head: "Dr. Miller", count: 450, color: "bg-purple-500" },
    { name: "Secondary Wing", head: "Prof. Snape", count: 320, color: "bg-orange-500" },
  ];

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
      {wings.map((wing, i) => (
        <div key={i} className="p-6 bg-white rounded-2xl shadow-sm border border-slate-200 flex items-center gap-4">
          <div className={`w-12 h-12 rounded-xl ${wing.color} flex items-center justify-center text-white text-xl font-bold`}>
            {wing.name[0]}
          </div>
          <div>
            <h3 className="font-bold text-slate-800">{wing.name}</h3>
            <p className="text-sm text-slate-500 font-medium">Head: {wing.head}</p>
            <p className="text-xs text-blue-600 mt-1">{wing.count} Students</p>
          </div>
        </div>
      ))}
    </div>
  );
}
