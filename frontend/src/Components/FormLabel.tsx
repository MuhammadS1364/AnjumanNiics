export default function FormLabel(Props) {
  return (
    <div className="flex flex-col gap-1 w-full">
      <label className="text-sm font-medium text-gray-700 ml-1">
        {Props.Name}
      </label>
      <input 
        type={Props.Type}
        name={Props.Name}
        value={Props.Value}       // Added: Link to state
        onChange={Props.onChange} // Added: Function to update state
        className="w-full p-2.5 bg-white border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none transition shadow-sm"
        placeholder={Props.PlaceHolder}
        required={Props.Required} // Added: Useful for form validation
      />
    </div>
  );
}
