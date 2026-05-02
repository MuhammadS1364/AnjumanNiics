import { useState } from "react";
import { useNavigate } from "react-router-dom"; // Import useNavigate
import { SupaBaseClient } from "../lib/SupaBase";
import FormLabel from "../Components/FormLabel";

export default function GetWay() {
  const [message, setMessage] = useState({ text: "", type: "" });
  const [actUser, setActUser] = useState(null)
  const [isSubmitting, setIsSubmitting] = useState(false);
  const navigate = useNavigate(); // Initialize navigate

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    setMessage({ text: "", type: "" });

    const formData = new FormData(e.currentTarget);
    const email = formData.get("UserEmail");
    const password = formData.get("UserPassword");

    // 1. Fetch user from Supabase
    const { data: user, error } = await SupaBaseClient
      .from("UsersTable")
      .select("*")
      .eq("UserEmail", email)
      .eq("UserPassword", password) // In production, use Supabase Auth instead
      .single();

    if (error || !user) {
      setMessage({ text: "Invalid Email or Password", type: "error" });
      setIsSubmitting(false);
    } else {
      setMessage({ text: "Login Successful!", type: "success" });
      
      // 2. Redirect based on Role
      setTimeout(() => {
        const role = user.UserRole; // e.g., 'Admin', 'Student', 'Teacher'
        // Send the user Data to the Bashboard
        if (role === "SuperAdmin") {
          navigate("/admin-dashboard", { state: { user } });
        } else if (role === "WingMember") {
          navigate("/wing-dashboard", { state: { user } });
        } else if (role === "ClassUser") {
          navigate("/class-dashboard", { state: { user } });
        } else if (role === "Teasurer") {
          navigate("/treasurer-dashboard", { state: { user } });
        } else if (role == 'Student'){
          navigate("/student-dashboard", { state: { user } });
        } else{
          navigate('/suspactor-dashboard',{ state: { user } } )
        }
      }, 100);
    }
  };

  return (
    <div className="min-h-screen bg-gray-100 flex flex-col items-center justify-center p-4">
      <form onSubmit={handleSubmit} className="w-full max-w-md bg-white p-8 rounded-xl shadow-md flex flex-col gap-4">
        <h1 className="text-3xl text-center font-bold text-blue-600 mb-2">NCMS Administration</h1>

        {message.text && (
          <div className={`p-3 rounded-lg text-sm font-medium text-center ${
            message.type === "success" ? "bg-green-100 text-green-700" : "bg-red-100 text-red-700"
          }`}>
            {message.text}
          </div>
        )}

        <FormLabel PlaceHolder="User Email" Name="UserEmail" Tpye="text" />
        <FormLabel PlaceHolder="User Password" Name="UserPassword" Tpye="password" />

        <button 
          type="submit" 
          disabled={isSubmitting}
          className={`mt-4 bg-blue-600 text-white py-2 rounded-lg hover:bg-blue-700 transition font-bold ${
            isSubmitting ? "opacity-50 cursor-not-allowed" : ""
          }`}
        >
          {isSubmitting ? "Verifying..." : "Login"}
        </button>
      </form>
    </div>
  );
}
