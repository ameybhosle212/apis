const route = require('express').Router()
const User = require('../model/User')
const jwt = require('jsonwebtoken')
require('dotenv').config()
const redis = require('redis');
const client = redis.createClient({port:6379});
client.on("connect",()=>{
    console.log("REDIS CONNECTED");
})
client.on("error", function (err) {
    console.log("Error " + err);
});

route.post('/create',async(req,res)=>{
    const {title , formDataName , formDataValue , nu , token } = req.body;
    const isTrue = jwt.verify(token , process.env.secret);
    if(isTrue){
      const user = await User.findById(isTrue.id);
      if(user){
        var dataToBeAdded = require('./MOCK_DATA.json');
        var newArray = [];
        for (let index = 0; index < nu; index++) {
          const element = dataToBeAdded[index];
          var obj = {};
          for (let j = 0; j < formDataName.length; j++) {
            var name = formDataName[j];
            obj[name] = element[formDataValue[j]]
          }
          newArray.push(obj);
        }
        await client.connect();
        await client.hSet(isTrue.id , title , JSON.stringify(newArray))
        return res.json({'data':newArray,'status':'ok'})
      }else{
        return res.json({'data':'error','status':'error','redirect':'logout'})
      }
    }else{
      return res.json({'data':'error','status':'error','redirect':'logout'})
    }
})

module.exports = route;