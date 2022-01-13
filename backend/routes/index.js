const route = require('express').Router()
const User = require('../model/User')
const jwt = require('jsonwebtoken')
require('dotenv').config()
const redis = require('redis');
const client = redis.createClient({port:'6379',host:'localhost'});

client.on('connect', function() {
  console.log('Connected!');
});

route.get("/uname",async(req,res)=>{
    const data = await User.find();
    var d = [];
    data.map((val)=>{
        d.push(val.uname)
    })
    return res.json({'data':d})
})

route.post("/profile",async(req,res)=>{
    const id = req.body.id;
    var decoded = jwt.verify(id, process.env.secret);
    const data = await User.findById(decoded.id);
    if(data){
        const profileData=[] ;
        profileData.push({'email':data.email})
        profileData.push({'password':data.password})
        return res.json({'data':profileData,'error':null})
    }else{
        return res.json({'data':'error occured','status':'error','error':'error'})
    }
})

route.post("/register",async(req,res)=>{
    const {uname, email , password} = req.body;
    const data = await User.findOne({email:email})
    if(!data){
        const newUser = new User({
            uname:uname,
            email:email,
            password:password
        })
        newUser.save();
        return res.json({'data':newUser,'status':'ok','error':null})
    }else{
        return res,json({'data':'Email Id exists','status':'error','error':'error'})
    }
})

route.post("/login",async(req,res)=>{
    const {uname , password} = req.body;
    const data = await User.findOne({uname:uname});
    if(!data){
        return res.json({'data':'Redirect to register','status':'error'})
    }else{
        var ob = {
            'id':data._id,
            'uname':data.uname
        }
        var token = jwt.sign(ob,process.env.secret)
        return res.json({'data':token,'status':'ok','error':null})
    }
})

module.exports = route;