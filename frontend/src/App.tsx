


import GetWay from './Components/GetWay';
import { Routes, Route, Link } from 'react-router-dom';


import StudentDashBoard from './Student/StudentDashBoard';
import WingDashBoard from './WingPanel/WingDashBoard';
import ClassDashBoard from './ClassPanel/ClassDashBoard';
import AdminDashBoard from './AdminPage/AdminDashBoard';
import TreasurerDashBoard from './Treasurer/TreasurerDashBoard';
import SusPactorDashBoard from './Suspactor/SuspactorDashBoard';
export default function App(){
  return (
    <main className="p-4 md:p-8 overflow-y-auto">
      <Routes>
        <Route path="/" element={<GetWay />} />
        <Route path="/admin-dashboard/*" element={<AdminDashBoard />} />
        <Route path="/student-dashboard" element={<StudentDashBoard />} />
        <Route path="/student-dashboard" element={<StudentDashBoard />} />
        <Route path="/wing-dashboard" element={<WingDashBoard />} />
        <Route path="/class-dashboard" element={<ClassDashBoard />} />
        <Route path="/treasurer-dashboard" element={<TreasurerDashBoard />} />
        <Route path="/suspactor-dashboard" element={<SusPactorDashBoard />} />
        {/* Add Admin and Teacher routes here too */}
      </Routes>
    </main>
  )
}