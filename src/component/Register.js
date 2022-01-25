import React, { useState } from "react";
import { Registered } from "../Helper";

const Register = ()=>{
    const [name , setName] = useState('')
    const [email , setEmail] = useState('')
    const [password , setPassword] = useState('')
    const Submit = (e)=>{
        e.preventDefault();
        var data = Registered(name , email ,password);
        if(data.error == "error"){
            window.alert(`${data.info}`)
        }else{
            window.alert("USER CREATED");
            window.location = "/login";
        }
    }
    return (
        <form onSubmit={Submit}>
            <input name="name" onChange={e => setName(e.target.value)}  required />
            <input name="userType" type={"email"} onChange={e => setEmail(e.target.value)}  required />
            <input name="password" onChange={e =>setPassword(e.target.value)} required />
            <button>Submit</button>
        </form>
    );
}

export default Register;