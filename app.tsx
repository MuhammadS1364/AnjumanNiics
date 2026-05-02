



// import { useState } from 'react';
// import { Routes, Route, Link } from 'react-router-dom';

// import StudentDashBoard from './Student/StudentDashBoard';
// import WingDashBoard from './WingPanel/WingDashBoard';
// import ClassDashBoard from './ClassPanel/ClassDashBoard';
// import AdminDashBoard from './AdminPage/AdminDashBoard';
// import GetWay from './Components/GetWay';

// export default function App() {
//   const [isMenuOpen, setIsMenuOpen] = useState(false);

//   return (
//     <div className="flex min-h-screen bg-slate-50">
//       {/* Sidebar - Desktop: Fixed, Mobile: Sliding */}
//       <aside className={`fixed inset-y-0 left-0 z-50 w-64 bg-slate-900 text-white transform transition-transform duration-300 ease-in-out lg:relative lg:translate-x-0 ${isMenuOpen ? 'translate-x-0' : '-translate-x-full'}`}>
//         <div className="p-6 text-2xl font-bold border-b border-slate-800">
//           Home<span className="text-blue-500">Land</span>
//         </div>
//         <nav className="p-4 space-y-2">
//           <Link to="/admin-dashboard/*" onClick={() => setIsMenuOpen(false)} className="block p-3 rounded-lg hover:bg-slate-800 transition">Admin DashBoard</Link>
//           <Link to="/student-dashboard" onClick={() => setIsMenuOpen(false)} className="block p-3 rounded-lg hover:bg-slate-800 transition">Student DashBoard</Link>
//           <Link to="/wing-dashboard" onClick={() => setIsMenuOpen(false)} className="block p-3 rounded-lg hover:bg-slate-800 transition">Wing DashBoard</Link>
//           <Link to="/class-dashboard" onClick={() => setIsMenuOpen(false)} className="block p-3 rounded-lg hover:bg-slate-800 transition">Class DashBoard</Link>
//         </nav>
//       </aside>

//       {/* Main Content Area */}
//       <div className="flex-1 flex flex-col min-w-0">
//         {/* Mobile Header */}
//         <header className="lg:hidden flex items-center justify-between p-4 bg-white shadow-sm">
//           <span className="font-bold">HomeLand</span>
//           <button onClick={() => setIsMenuOpen(!isMenuOpen)} className="p-2 bg-slate-100 rounded-md">
//             {isMenuOpen ? '✕' : '☰'}
//           </button>
//         </header>

//         {/* Dynamic Route Content */}
//         <main className="p-4 md:p-8 overflow-y-auto">
//           <div className="max-w-6xl mx-auto">
//             <Routes>
//               <Route path="/login" element={<GetWay />} />
//               <Route path="/admin-dashboard/*" element={<AdminDashBoard />} />
//               <Route path="/student-dashboard" element={<StudentDashBoard />} />
//               <Route path="/wing-dashboard" element={<WingDashBoard />} />
//               <Route path="/class-dashboard" element={<ClassDashBoard />} />
//             </Routes>
//           </div>
//         </main>
//       </div>

//       {/* Mobile Overlay */}
//       {isMenuOpen && <div onClick={() => setIsMenuOpen(false)} className="fixed inset-0 z-40 bg-black/50 lg:hidden" />}
//     </div>
//   );
// }
