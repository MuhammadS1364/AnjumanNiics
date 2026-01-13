


// import FormInput from "../Forms/FormLabel";
// import ButtonEle from "../Buttons/Button";


// Calling the DataBase
import { MySupaBase } from "../../SupaBase";

import { useState } from "react";
export default function LoginGetWay(){

    const [UserName, setUserName ] = useState('');
    const [UserEmail, setUserEmail ] = useState('');
    const [UserPass, setUserPass ] = useState('');
    const [UserRole, setUserRole ] = useState('');

    const [isSuccess, setSuccess] = useState('')
    const [Message, setMessage] = useState('')

    const SubmitHandler = async (event) =>{
        event.preventDefault();
        let inputsBox = [UserEmail, UserName,UserPass, UserRole]
        inputsBox.map((box)=>{
            console.log(box);
        })
        try{
            const {data , error} = await MySupaBase
            .from("MyUsers")
            .insert([
                {
                    userEmail: UserEmail,
                    userName : UserName,
                    userPassWord : UserPass,
                    userRole : UserRole
                }
            ]).select();

            if (error) setMessage(`Error: ${error.message}`)

            setUserEmail('')
            setUserName('')
            setUserRole('')
            setUserPass('')
            setMessage("User Info Added Successfully.")
        }catch(error){
            console.log(error)
        }finally{
            setSuccess(true)
        }
    }

  

    return(
        <div>
            {isSuccess ? (
            <p style={{color: 'green'}}>{Message}</p>
            ) : <p style={{color: 'red'}}>{Message}</p>}

            <form method="post" onSubmit={SubmitHandler}>
                <input type="email" name="userEmail" placeholder="userEmail ......." value={UserEmail} onChange={(event) =>setUserEmail(event.target.value)}/> <br />
                <input type="text" name="userName" placeholder="userName ......." value={UserName} onChange={(event) =>setUserName(event.target.value)}/> <br />
                <input type="password" name="userPass" placeholder="userPass ......." value={UserPass} onChange={(event) =>setUserPass(event.target.value)}/> <br />
                <input type="text" name="userRole" placeholder="userRole ......." value={UserRole} onChange={(event) =>setUserRole(event.target.value)}/> <br/>
                <button type="submit">Send Data</button>
            </form>
        </div>
    )
}