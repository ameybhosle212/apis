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
            Uname:
            <input name="name" type={"text"} className="border-2 border-stone-900 mx-8 my-4" onChange={e => setName(e.target.value)}  required /><br />
            Email:
            <input name="userType" type={"email"} className="border-2 border-stone-900 mx-8 my-4" onChange={e => setEmail(e.target.value)}  required /><br />
            Password:
            <input name="password" type={"password"} className="border-2 border-stone-900 mx-8 my-4" onChange={e =>setPassword(e.target.value)} required /><br />
            <button className="bg-green-500 border-stone-900 border-2 mx-8">Submit</button>
        </form>
    );
}

export default Register;