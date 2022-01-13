import React, { useEffect, useState } from 'react';
import '../App.css';
import { getUserData } from '../Helper';

const Dashboard = ()=>{
    const [user , setUser] = useState({});
    useEffect(()=>{
        async function getData(){
            var d = await getUserData();
            setUser(d);
        }
        getData();
    },[])
    const Delete = (index)=>{
        
    }
    return (
        <div>
            Dashboard
            <h1>{user.name}</h1>
            {user['size'].map((val , index)=>{
                return(
                    <div className='border-4 border-l-pink-800'>
                        <h4>{index+1}</h4>
                        <h3>Title is {user['title'][index]}</h3>
                        <h3>Data Size is {val[index]}</h3>
                        <button onClick={()=>Delete(index)}>Delete</button>
                    </div>
                );
            })}
        </div>
    );
}

export default Dashboard;