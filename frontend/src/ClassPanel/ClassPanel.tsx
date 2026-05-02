

export default function ClassList() {
  const classes = ["Class 10-A", "Class 10-B", "Class 11-A", "Class 12-C"];

  return (
    <div className="bg-white p-6 rounded-2xl shadow-sm border border-slate-200">
      <h2 className="text-lg font-bold mb-4 text-slate-800 tracking-tight">Active Classes</h2>
      <div className="space-y-3">
        {classes.map((cls, i) => (
          <div key={i} className="flex items-center justify-between p-3 rounded-xl border border-slate-100 hover:border-blue-200 group transition">
            <span className="font-medium text-slate-700">{cls}</span>
            <div className="flex gap-2 opacity-0 group-hover:opacity-100 transition">
              <button className="text-xs font-bold text-blue-600 hover:underline">Edit</button>
              <button className="text-xs font-bold text-red-500 hover:underline">Delete</button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
