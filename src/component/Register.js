import React, { useState } from "react";
import { Registered } from "../Helper";

const Register = ()=>{
    const [name , setName] = useState('')
    const [email , setEmail] = useState('')
    const [password , setPassword] = useState('')
    const Submit = async (e)=>{
        e.preventDefault();
        var data = await Registered(name , email ,password);
        console.log(data);
        if(data.redirect){
            window.alert(`${data.data}`)
            window.location = `/${data.redirect}`
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