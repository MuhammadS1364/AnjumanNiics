import { SupaBaseClient } from "../lib/SupaBase";
import { useState, useEffect } from "react";
import "./Students.css"; // See the CSS below

export default function AllStudentsList() {
  const [students, setStudents] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const getStudentsData = async () => {
      try {
        setLoading(true);
        const { data, error } = await SupaBaseClient.from("NCMS_STUDENTS").select("*");
        if (error) throw error;
        setStudents(data);
      } catch (err) {
        setError(err.message);
      } finally {
        setLoading(false);
      }
    };
    getStudentsData();
  }, []);

  if (loading) return (
    <div className="flex flex-col justify-center items-center h-64 text-white gap-4">
      <div className="animate-spin rounded-full h-10 w-10 border-t-2 border-b-2 border-green-400"></div>
      <p className="text-gray-400 animate-pulse">Syncing with database...</p>
    </div>
  )

  return (
    <div className="students-container">
      
      <div className="flex items-center gap-3">
          <h2 className="text-xl font-bold tracking-tight">Our Students List</h2>
          <span className="bg-blue-500/20 text-blue-300 text-[10px] px-2 py-0.5 rounded border border-blue-500/30 font-mono">
            entries
          </span>
        </div>
      <div className="student-grid">
        {students.map((stn) => (
          <div className="student-card" key={stn.StudentAddNo}>
            <div className="card-header">
              <img 
                src={stn.StudentImage || "https://placeholder.com"} 
                alt={stn.StudentName} 
                className="profile-img" 
              />
              <span className="status-badge">Active</span>
            </div>
            
            <div className="card-body">
              <h3 className="student-name">{stn.StudentName}</h3>
              <p className="student-class">Class: {stn.StudentClass}</p>
              
              <div className="info-section">
                <div className="info-row">
                  <span className="label">Father:</span>
                  <span className="value">{stn.StudentFather}</span>
                </div>
                <div className="info-row">
                  <span className="label">Job:</span>
                  <span className="value">{stn.FatherJob}</span>
                </div>
                <div className="info-row">
                  <span className="label">Location:</span>
                  <span className="value">{stn.villege}, {stn.District}</span>
                </div>
              </div>
            </div>

            <div className="card-footer">
              <button className="btn-contact">View Profile</button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
