import { useState, useEffect, useCallback } from "react";
import { SupaBaseClient } from "../lib/SupaBase";

export default function TableInfo() {
  const [data, setData] = useState<any[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  // Memoized fetch function so it can be reused for a "Refresh" button
  const fetchUsers = useCallback(async () => {
    try {
      setLoading(true);
      setError(null);

      // Change "UsersTable" to your actual table name if different
      const { data: users, error: supabaseError } = await SupaBaseClient
        .from("UsersTable")
        .select("*");

      if (supabaseError) throw supabaseError;
      setData(users || []);
    } catch (err: any) {
      console.error("Supabase Fetch Error:", err.message);
      setError(err.message);
    } finally {
      setLoading(false);
    }
  }, []);

  useEffect(() => {
    fetchUsers();
  }, [fetchUsers]);

  if (loading) return (
    <div className="flex flex-col justify-center items-center h-64 text-white gap-4">
      <div className="animate-spin rounded-full h-10 w-10 border-t-2 border-b-2 border-green-400"></div>
      <p className="text-gray-400 animate-pulse">Syncing with database...</p>
    </div>
  );

  return (
    <div className="w-full max-w-6xl mx-auto mt-10 overflow-hidden rounded-xl shadow-2xl bg-white border border-gray-200">
      {/* Table Header */}
      <div className="bg-slate-900 p-5 text-white flex justify-between items-center">
        <div className="flex items-center gap-3">
          <h2 className="text-xl font-bold tracking-tight">User Directory</h2>
          <span className="bg-blue-500/20 text-blue-300 text-[10px] px-2 py-0.5 rounded border border-blue-500/30 font-mono">
            {data.length} entries
          </span>
        </div>
        
        <div className="flex gap-2">
          <button 
            onClick={fetchUsers}
            className="text-xs bg-gray-700 hover:bg-gray-600 px-3 py-1.5 rounded-lg transition-all border border-gray-600"
          >
            ↻ Refresh
          </button>
          <span className="text-xs bg-green-500/20 text-green-400 px-2 py-1.5 rounded-lg border border-green-500/30 uppercase font-bold tracking-tighter">
            System Online
          </span>
        </div>
      </div>

      {/* Error State */}
      {error && (
        <div className="m-4 p-4 bg-red-50 border-l-4 border-red-500 text-red-700 text-sm">
          <p className="font-bold">Database Connection Issue:</p>
          <p>{error}</p>
          <p className="mt-2 text-xs italic">Tip: Check if RLS is enabled or if the table "UsersTable" exists.</p>
        </div>
      )}

      {/* Table Content */}
      <div className="overflow-x-auto">
        <table className="w-full text-left border-collapse">
          <thead className="bg-gray-50 text-gray-500 uppercase text-[11px] font-black tracking-widest border-b border-gray-200">
            <tr>
              <th className="px-6 py-4">Index</th>
              <th className="px-6 py-4">Account Email</th>
              <th className="px-6 py-4">Password</th>
              <th className="px-6 py-4">User Role</th>
              <th className="px-6 py-4">Account Status</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-gray-100">
            {data.length > 0 ? (
              data.map((item, index) => (
                <tr key={item.id || index} className="hover:bg-blue-50/50 transition-colors group">
                  <td className="px-6 py-4 text-gray-400 font-mono text-xs">{index + 1}</td>
                  <td className="px-6 py-4">
                    <span className="font-semibold text-slate-800 group-hover:text-blue-600 transition-colors">
                      {item.UserEmail || item.username || "Unknown User"}
                    </span>
                  </td>
                  
                  <td className="px-6 py-4">
                    <span className="font-semibold text-slate-800 group-hover:text-blue-600 transition-colors">
                      {item.UserPassword || item.username || "Unknown User"}
                    </span>
                  </td>

                  <td className="px-6 py-4">
                    <span className={`px-2.5 py-1 rounded text-[10px] font-bold uppercase ${
                      (item.UserRole || item.user_role) === 'Admin' 
                        ? 'bg-purple-100 text-purple-700 border border-purple-200' 
                        : 'bg-slate-100 text-slate-600 border border-slate-200'
                    }`}>
                      {item.UserRole || item.user_role || "User"}
                    </span>
                  </td>
                  <td className="px-6 py-4">
                    {item.Suspactor || item.is_flagged ? (
                      <span className="text-red-500 flex items-center gap-1.5 text-xs font-bold">
                        <span className="relative flex h-2 w-2">
                          <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-red-400 opacity-75"></span>
                          <span className="relative inline-flex rounded-full h-2 w-2 bg-red-500"></span>
                        </span>
                        Flagged
                      </span>
                    ) : (
                      <span className="text-emerald-500 flex items-center gap-1.5 text-xs font-bold">
                        <span className="h-2 w-2 bg-emerald-500 rounded-full"></span>
                        Verified
                      </span>
                    )}
                  </td>
                </tr>
              ))
            ) : (
              <tr>
                <td colSpan={4} className="text-center py-20">
                  <div className="flex flex-col items-center opacity-40">
                    <p className="text-lg font-medium text-slate-400 italic">No user data available</p>
                    <p className="text-xs">Tables are currently empty</p>
                  </div>
                </td>
              </tr>
            )}
          </tbody>
        </table>
      </div>
    </div>
  );
}
