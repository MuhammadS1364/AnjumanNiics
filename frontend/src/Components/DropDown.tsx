

export default function DropDown(Props) {
  return (
    <div className="flex flex-col gap-1 w-full">
      <label className="text-sm font-medium text-gray-700 ml-1">
        {Props.Lable}
      </label>
      <select 
        name={Props.Name}
        className="w-full p-2.5 bg-white border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 outline-none transition" 
        defaultValue="" // Set this to empty string to match the disabled option
      >
        <option value="" disabled> 
          Select {Props.Lable} 
        </option>
        {Props.OptionsList.map((item, index) => (
          <option key={index} value={item}>
            {item}
          </option>
        ))}
      </select>
    </div>
  );
}
