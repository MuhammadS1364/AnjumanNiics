

import FormLabel from "../Components/FormLabel";
import DropDown from "../Components/DropDown";
import { useState } from "react";
import { SupaBaseClient } from "../lib/SupaBase";

export default function AddNewTeacher() {
  const StateList = ['Bihar', 'Jharkhand', 'Assam', 'Tripura', 'Maharashtra', 'Andhra Pradesh', 'Karnataka', 'Kerala', 'Uttar Pradesh', 'Chhattisgarh'];
  const [message, setMessage] = useState({ text: "", type: "" });
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    setMessage({ text: "", type: "" });

    const formData = new FormData(e.currentTarget);
    const email = formData.get("TeacherEmail");
    const teacherId = formData.get("TeacherId");

    try {
      // 1. Check for Duplicate User
      const { data: existingUser } = await SupaBaseClient
        .from("UsersTable")
        .select("UserEmail")
        .eq("UserEmail", email)
        .single();

      if (existingUser) {
        throw new Error("Teacher with this email already exists.");
      }

      // 2. Create User Credentials
      const { data: newTeacher, error: userError } = await SupaBaseClient
        .from("UsersTable")
        .insert([{
          UserEmail: email,
          UserPassword: teacherId,
          UserRole: "Teacher"
        }])
        .select() // This allows you to get the data back
        .single();

      if (userError) throw userError;

      // 3. Create Student Profile
      const { error: stnError } = await SupaBaseClient.from("NCMS_STUDENTS").insert([{
        TeacherEmail: email,
        TeacherId: teacherId,
        TeacherName: formData.get("TeacherName"),
        TeacherPhone: formData.get("TeacherPhone"),
        TeacherImage: formData.get("TeacherImage"), // Note: This usually needs Supabase Storage upload first
        TeacherState: formData.get("TeacherState"),
        District: formData.get("District"),
        villege: formData.get("villege"),
        TeacherUser: newTeacher.UserEmail,
        IsClassTeacher : formData.get("villege") || false
      }]);

      if (stnError) throw stnError;

      setMessage({ text: "Teacher registered successfully!", type: "success" });
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
        <h1 className="text-3xl text-center font-bold text-blue-600 mb-2">New Teacher</h1>

        {message.text && (
          <div className={`p-3 rounded-lg text-sm font-medium text-center ${message.type === "success" ? "bg-green-100 text-green-700" : "bg-red-100 text-red-700"
            }`}>
            {message.text}
          </div>
        )}

        <FormLabel PlaceHolder="Teacher Id" Name="TeacherId" Tpye="text" />
        <FormLabel PlaceHolder="Teacher Name" Name="TeacherName" Tpye="text" />
        <FormLabel PlaceHolder="Teacher Email" Name="TeacherEmail" Tpye="email" />
        <FormLabel PlaceHolder="Teacher Phone" Name="TeacherPhone" Tpye="text" />
        <FormLabel PlaceHolder="Teacher Image URL" Name="TeacherImage" Tpye="file" />
        <DropDown Lable="Teacher State" OptionsList={StateList} Name="TeacherState" />
        <FormLabel PlaceHolder="District" Name="District" Tpye="text" />
        <FormLabel PlaceHolder="Village" Name="villege" Tpye="text" />

        <button
          type="submit"
          disabled={isSubmitting}
          className={`mt-4 bg-blue-600 text-white py-2 rounded-lg hover:bg-blue-700 transition font-bold ${isSubmitting ? "opacity-50 cursor-not-allowed" : ""
            }`}
        >
          {isSubmitting ? "Registering..." : "Submit"}
        </button>
      </form>
    </div>
  );
}
