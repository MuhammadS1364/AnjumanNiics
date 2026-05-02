

import { useState } from 'react';
import { Routes, Route, Link, useNavigate,useLocation } from 'react-router-dom';

// import NewUser from './AdminPage/AddNewUser';
// import TableInfo from './Components/TableInfo';

// import ClassList from './ClassPanel/ClassPanel';
// import WingGrid from './WingPanel/WingPanel';
// import StudentManager from './Student/StudentPanel';


export default function ClassDashBoard() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);


  const navigate = useNavigate();
  const handleLogout = () => {
    // 1. Clear the login data
    localStorage.removeItem("token"); // or whatever key you use

    // 2. Close the mobile menu
    setIsMenuOpen(false);

    // 3. Redirect to the main login page
    navigate("/");
  };

  return (
    <div className="flex min-h-screen bg-slate-50">
      {/* Sidebar - Desktop: Fixed, Mobile: Sliding */}
      <aside className={`fixed inset-y-0 left-0 z-50 w-64 bg-slate-900 text-white transform transition-transform duration-300 ease-in-out lg:relative lg:translate-x-0 ${isMenuOpen ? 'translate-x-0' : '-translate-x-full'}`}>
        <div className="p-6 text-2xl font-bold border-b border-slate-800">
          Class<span className="text-blue-500">DashBoard</span>
        </div>
        <nav className="p-4 space-y-2">
          {/* <Link to="/all-UserList" onClick={() => setIsMenuOpen(false)} className="block p-3 rounded-lg hover:bg-slate-800 transition">User List</Link>
          <Link to="/add-new-user" onClick={() => setIsMenuOpen(false)} className="block p-3 rounded-lg hover:bg-slate-800 transition">Add New User</Link>
          <Link to="/student" onClick={() => setIsMenuOpen(false)} className="block p-3 rounded-lg hover:bg-slate-800 transition">Student</Link>
          <Link to="/class-list" onClick={() => setIsMenuOpen(false)} className="block p-3 rounded-lg hover:bg-slate-800 transition">Class List</Link>
          <Link to="/wing-grid" onClick={() => setIsMenuOpen(false)} className="block p-3 rounded-lg hover:bg-slate-800 transition">Wing Grid</Link> */}
          <button
            onClick={handleLogout}
            className="w-full text-left block p-3 rounded-lg hover:bg-slate-800 transition text-red-400"
          >
            LogOUt
          </button>
        </nav>
      </aside>

      {/* Main Content Area */}
      <div className="flex-1 flex flex-col min-w-0">
        {/* Mobile Header */}
        <header className="lg:hidden flex items-center justify-between p-4 bg-white shadow-sm">
          <span className="font-bold">ClassDashBoard</span>
          <button onClick={() => setIsMenuOpen(!isMenuOpen)} className="p-2 bg-slate-100 rounded-md">
            {isMenuOpen ? '✕' : '☰'}
          </button>
        </header>

        {/* Dynamic Route Content */}
        <main className="p-4 md:p-8 overflow-y-auto">
          <div className="max-w-6xl mx-auto">
            {/* <Routes>
              <Route path="/add-new-user" element={<NewUser />} />
              <Route path="/all-UserList" element={<TableInfo />} />

              <Route path="/student" element={<StudentManager />} />
              <Route path="/class-list" element={<ClassList />} />
              <Route path="/wing-grid" element={<WingGrid />} />
            </Routes> */}
          </div>
        </main>
      </div>

      {/* Mobile Overlay */}
      {isMenuOpen && <div onClick={() => setIsMenuOpen(false)} className="fixed inset-0 z-40 bg-black/50 lg:hidden" />}
    </div>
  );
}
