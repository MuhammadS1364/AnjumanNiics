
import FormInput from "../Forms/FormLabel";
import ButtonEle from "../Buttons/Button";

export default function LoginGetWay(){
    return(
        <div className="container">
            <FormInput inputType = 'text' inputName = 'username' placeholder ='User Name...'/>
            <FormInput inputType = 'password' inputName = 'password' placeholder ='Password ...'/>
            <ButtonEle BtnText="submit" BtnStyle= 'bg-blue-300' />
        </div>
    )
}