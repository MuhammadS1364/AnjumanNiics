import './FormLabel.css'
export default function FormInput(pros){
    return (
        <div className="form-row">
            <input type={pros.inputType} name={pros.inputName} id ={pros.inputName} placeholder={pros.placeholder || ''}/>
        </div>
    )
}
// placeholder is optional 

