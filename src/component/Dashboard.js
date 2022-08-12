import React, { useEffect, useState } from 'react';
import '../App.css';
import { getUserData , deleteData } from '../Helper';

const Dashboard = ()=>{
    const [name , setName] = useState('');
    const [title, setTitle] = useState([])
    const [crypt , setCrypt] = useState('');
    const [size, setSize] = useState([])
    useEffect(()=>{
        async function getData(){
            var d = await getUserData(localStorage.getItem('user'));
            console.log(d);
            setName(d["name"]);
            setSize(d["size"])
            setTitle(d["title"])
            setCrypt(d["crypt"])
        }
        getData();  
    },[])
    const Delete = async(index)=>{
        console.log(index);
        await deleteData(localStorage.getItem('user'),index)
        var d = size;
        d.splice(index,1);
        setSize(d);
        var dd = title
        dd.splice(index,1);
        setTitle(dd)
    }
    return (
        <div>
            <h1 className='text-center'>Dashboard</h1>
            <h1 className='text-center'>Name is :{name}</h1>
            <h1 className='text-center'>YOURS APIS CREATED WILL SHOW HERE</h1>
            {title.map((val , index)=>{
                return(
                    <div key={index} className='border-4 border-l-pink-800'>
                        <a href={`http://localhost:1001/${crypt}/view/${title[index]}`}>Goto Link</a>
                        <h4>{index+1}</h4>
                        <h3>Title is {title[index]}</h3>
                        <h3>Data Size is {size[index]}</h3>
                        <button onClick={()=>Delete(index)}>Delete</button>
                    </div>
                );
            })}
        </div>
    );
}

export default Dashboard;