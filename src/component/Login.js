import React, { useState } from "react";
import { Logined } from "../Helper";

const Login = ()=>{
    const [name , setName] = useState('')
    const [password , setPassword] = useState('')
    const Submit = async(e)=>{
        e.preventDefault();
        // console.log(name + '  ' + password);
        var data = await Logined(name , password);
        if(data.error == "error"){
            if(data.redirect){
                window.alert("Redirecting to Register as User Not Created")
                window.location = data.redirect;
            }
            window.alert("SOMETHING WENT WRONG RELOAD THE SCREEN")
        }else{
            window.alert("Success");
            localStorage.setItem('user',data.token);
            window.location = '/dashboard';
        }
    }
    return (
        <form onSubmit={Submit}>
            Uname:
            <input name="name" type={"text"} onChange={e => setName(e.target.value)}  /><br />
            Password:
            <input name="password" type={"password"} onChange={e =>setPassword(e.target.value)} />
            <button>Submit</button>
        </form>
    );
}

export default Login;
