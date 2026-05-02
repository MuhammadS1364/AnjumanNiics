
import React from 'react';

const students = [
  { id: 1, name: "John Doe", class: "10-A", wing: "North", status: "Active" },
  { id: 2, name: "Jane Smith", class: "12-B", wing: "South", status: "Inactive" },
];

export default function StudentManager() {
  return (
    <div className="bg-white rounded-2xl shadow-sm border border-slate-200 overflow-hidden">
      <div className="p-6 border-b border-slate-100 flex justify-between items-center">
        <h2 className="text-xl font-bold text-slate-800">Student Directory</h2>
        <button className="bg-blue-600 text-white px-4 py-2 rounded-lg text-sm hover:bg-blue-700 transition">
          + Add Student
        </button>
      </div>
      <table className="w-full text-left">
        <thead className="bg-slate-50 text-slate-500 text-xs uppercase font-bold">
          <tr>
            <th className="px-6 py-4">Name</th>
            <th className="px-6 py-4">Class</th>
            <th className="px-6 py-4">Wing</th>
            <th className="px-6 py-4">Status</th>
          </tr>
        </thead>
        <tbody className="divide-y divide-slate-100">
          {students.map((s) => (
            <tr key={s.id} className="hover:bg-slate-50 transition">
              <td className="px-6 py-4 font-medium">{s.name}</td>
              <td className="px-6 py-4 text-slate-600">{s.class}</td>
              <td className="px-6 py-4 text-slate-600">{s.wing}</td>
              <td className="px-6 py-4">
                <span className={`px-2 py-1 rounded-full text-xs font-bold ${
                  s.status === 'Active' ? 'bg-green-100 text-green-700' : 'bg-red-100 text-red-700'
                }`}>
                  {s.status}
                </span>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
