import React, { useEffect, useState } from 'react';
import '../App.css';

const Dashboard = ()=>{
    const [user , setUser] = useState();
    useEffect(()=>{
        async function getData(){
            
        }
        getData();
    },[])
    return (
        <div>
            Dashboard
        </div>
    );
}

export default Dashboard;