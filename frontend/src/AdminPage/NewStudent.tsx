import FormLabel from "../Components/FormLabel";
import DropDown from "../Components/DropDown";
import { useState } from "react";
import { SupaBaseClient } from "../lib/SupaBase";

export default function AddNewStudent() {
  const StateList = ['Bihar', 'Jharkhand', 'Assam', 'Tripura', 'Maharashtra', 'Andhra Pradesh', 'Karnataka', 'Kerala', 'Uttar Pradesh', 'Chhattisgarh'];
  const [message, setMessage] = useState({ text: "", type: "" });
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    setMessage({ text: "", type: "" });

    const formData = new FormData(e.currentTarget);
    const email = formData.get("StudentEmail");
    const admissionNo = formData.get("StudentAddNo");

    try {
      // 1. Check for Duplicate User
      const { data: existingUser } = await SupaBaseClient
        .from("UsersTable")
        .select("UserEmail")
        .eq("UserEmail", email)
        .single();

      if (existingUser) {
        throw new Error("Student with this email already exists.");
      }

      // 2. Create User Credentials
      const { error: userError } = await SupaBaseClient.from("UsersTable").insert([{
        UserEmail: email,
        UserPassword: admissionNo, // Consider hashing or a temporary password setup
        UserRole: "Student",
      }]);

      if (userError) throw userError;

      // 3. Create Student Profile
      const { error: stnError } = await SupaBaseClient.from("NCMS_STUDENTS").insert([{
        StudentEmail: email,
        StudentAddNo: admissionNo,
        StudentName: formData.get("StudentName"),
        StudentFather: formData.get("StudentFather"),
        FatherJob: formData.get("FatherJob"),
        StudentClass: formData.get("StudentClass"),
        StudentImage: formData.get("StudentImage"), // Note: This usually needs Supabase Storage upload first
        StudentState: formData.get("StudentState"),
        District: formData.get("District"),
        villege: formData.get("villege"),
        // StudentUser is frogenkey to userTable, email field
        // it means that firstly create user above and then assign it to the studentInfo table
        // How to crete both user and student at a time
        StudentUser : 
      }]);

      if (stnError) throw stnError;

      setMessage({ text: "Student registered successfully!", type: "success" });
      e.target.reset();
    } catch (err) {
      setMessage({ text: err.message, type: "error" });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="min-h-screen bg-gray-100 flex flex-col items-center justify-center p-4">
      <form onSubmit={handleSubmit} className="w-full max-w-md bg-white p-8 rounded-xl shadow-md flex flex-col gap-4">
        <h1 className="text-3xl text-center font-bold text-blue-600 mb-2">New Student</h1>
        
        {message.text && (
          <div className={`p-3 rounded-lg text-sm font-medium text-center ${
            message.type === "success" ? "bg-green-100 text-green-700" : "bg-red-100 text-red-700"
          }`}>
            {message.text}
          </div>
        )}

        <FormLabel PlaceHolder="Student Admission No" Name="StudentAddNo" Tpye="text" />
        <FormLabel PlaceHolder="Student Name" Name="StudentName" Tpye="text" />
        <FormLabel PlaceHolder="Student Email" Name="StudentEmail" Tpye="email" />
        <FormLabel PlaceHolder="Student Image URL" Name="StudentImage" Tpye="file" />
        <FormLabel PlaceHolder="Student Class" Name="StudentClass" Tpye="text" />
        <FormLabel PlaceHolder="Student Father" Name="StudentFather" Tpye="text" />
        <FormLabel PlaceHolder="Father Job" Name="FatherJob" Tpye="text" />
        <DropDown Lable="Student State" OptionsList={StateList} Name="StudentState" />
        <FormLabel PlaceHolder="District" Name="District" Tpye="text" />
        <FormLabel PlaceHolder="Village" Name="villege" Tpye="text" />

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
