// import './FormLabel.css'
// export default function FormInput(pros){
//     return (
//         <div className="form-row">
//             <input type={pros.inputType} name={pros.inputName} id ={pros.inputName} placeholder={pros.placeholder || ''}/>
//         </div>
//     )
// }
// // placeholder is optional 


import './FormLabel.css'; // Fix: CSS file name match kar (ya rename kar 'FormInput.css' agar zaroori)

interface FormInputProps {
  inputType: string; // e.g., 'text', 'email'
  inputName: string;
  placeholder?: string; // Optional, as you said
  onChange: (event: React.ChangeEvent<HTMLInputElement>) => void; // Handler for changes
  value: string; // For controlled input
  label?: string; // Optional label for UI/UX
}

export default function FormInput(props: FormInputProps) {
  return (
    <div className="form-row">
      {props.label && (
        <label htmlFor={props.inputName}>{props.label}</label> // Add label for better accessibility
      )}
      <input
        type={props.inputType}
        name={props.inputName}
        id={props.inputName} // Fix: no extra space
        placeholder={props.placeholder || ''} // Sahi hai yeh
        onChange={props.onChange} // Add for React handling
        value={props.value} // Add for controlled form
      />
    </div>
  );
}