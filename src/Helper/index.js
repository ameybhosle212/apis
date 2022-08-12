const axios = require('axios')

export const isLogin = ()=>{
    return localStorage.getItem('user') ? true:false ;
}

export const Logined = async(v1,v2)=>{
    const {data} = await axios.post("http://localhost:1001/login",{
        'uname':v1,
        'password':v2
    })
    if(data&& data.status === "ok"){
        console.log(data);
        return data;
    }else{
        return false;
    }
}

export const Registered = async(v1,v2,v3)=>{
    const {data} = await axios.post("http://localhost:1001/register",{
        'uname':v1,
        'email':v2,
        'password':v3
    })
    if(data&& data.status === "ok"){
        console.log(data);
        return data;
    }else{
        return false;
    }
}


export const getUserData = async(token)=>{
    var url = 'http://localhost:1001/crud/dashboard';
    var {data} = await axios.post(url,{'token':token})
    if(data){
        return data.data;
    }else{
        return false;
    }
}

export const createData = async(title , formDataName , formDataValue , nu , token)=>{
    var url = 'http://localhost:1001/crud/create';
    var {data} = await axios.post(url,{
        'title':title,
        'formDataName':formDataName,
        'formDataValue':formDataValue,
        'nu':nu,
        'token':token
    })
    if(data){
        return true;
    }else{
        return false;
    }
}

export const deleteData = async(token,titleToBeDeleted)=>{
    var url = 'http://localhost:1001/crud/dashboard';
    var {data} = await axios.post(url,{'token':token, 'index':titleToBeDeleted})
    if(data.data && data.status === 'ok'){
        return true;
    }else{
        return false;
    }
}