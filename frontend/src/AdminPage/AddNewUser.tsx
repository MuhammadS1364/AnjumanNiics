import { useState } from "react";
import { SupaBaseClient } from "../lib/SupaBase";
import FormLabel from "../Components/FormLabel";
import DropDown from "../Components/DropDown";

export default function NewUser() {
  const OptionList = ['SuperAdmin','WingMember' ,'Teacher','ClassUser', 'Student', 'Teasurer', 'Suspector'];
  
  // State for feedback messages
  const [message, setMessage] = useState({ text: "", type: "" });
  // const [selectedRole, setSelectedRole] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    setMessage({ text: "", type: "" });

    const formData = new FormData(e.currentTarget);
    const userData = {
      UserEmail: formData.get("UserEmail"),
      UserPassword: formData.get("UserPassword"),
      UserRole: formData.get("UserRole"),
      // Logic for the boolean flag
      // Suspactor: formData.get("UserRole") === "Suspector"
    };

    const { error } = await SupaBaseClient.from("UsersTable").insert([userData]);

    if (error) {
      setMessage({ text: "Error: " + error.message, type: "error" });
    } else {
      setMessage({ text: "User registered successfully!", type: "success" });
      e.target.reset(); 
    }
    setIsSubmitting(false);
  };

  return (
    <div className="min-h-screen bg-gray-100 flex flex-col items-center justify-center p-4">
      <form onSubmit={handleSubmit} className="w-full max-w-md bg-white p-8 rounded-xl shadow-md flex flex-col gap-4">
        <h1 className="text-3xl text-center font-bold text-blue-600 mb-2">User Registration</h1>

        {/* Dynamic Message Box */}
        {message.text && (
          <div className={`p-3 rounded-lg text-sm font-medium text-center ${
            message.type === "success" ? "bg-green-100 text-green-700" : "bg-red-100 text-red-700"
          }`}>
            {message.text}
          </div>
        )}

        <FormLabel PlaceHolder="User Email" Name="UserEmail" Tpye="text" />
        <FormLabel PlaceHolder="User Password" Name="UserPassword" Tpye="password" />
        <DropDown Lable="User Role" OptionsList={OptionList} Name = "UserRole" />

        <button 
          type="submit" 
          disabled={isSubmitting}
          className={`mt-4 bg-blue-600 text-white py-2 rounded-lg hover:bg-blue-700 transition font-bold ${
            isSubmitting ? "opacity-50 cursor-not-allowed" : ""
          }`}
        >
          {isSubmitting ? "Registering..." : "Submit"}
        </button>
      </form>
    </div>
  );
}
