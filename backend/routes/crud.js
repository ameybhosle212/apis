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
    formDataName.map((val,index)=>{
      formDataName[index] = val.toLowerCase();
      formDataValue[index] = formDataValue[index].toLowerCase();
    })
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
        // await client.connect();
        // await client.hSet(isTrue.id , title , JSON.stringify(newArray))
        user.titles.push(title);
        // var data = await client.hget(isTrue.id , title)
        // user.SizeOfData.push(JSON.parse(data).length)
        user.save();
        // await client.quit();
        return res.json({'formDtaaValue':newArray,'formDataName':formDataName,'data':newArray,'status':'ok'})
      }else{
        return res.json({'data':'error','status':'error','redirect':'logout'})
      }
    }else{
      return res.json({'data':'error','status':'error','redirect':'logout'})
    }
})

route.post("/dashboard",async(req,res)=>{
  const { token } = req.body;
  console.log(token);
  const isTrue = jwt.verify(token , process.env.secret);
    if(isTrue){
      const user = await User.findById(isTrue.id);
      if(user){
        var obj = {
          'title':user.titles,
          'name':user.uname,
          'size':user.SizeOfData,
          'crypt':user.encryptedID
        }
        console.log(obj);
        return res.json({'data':obj,'status':'ok'})
      }else{
        return res.json({'data':'Wrong Data','status':'error'})
      }
    }else{
      return res.json({'data':'invalid','status':'error'})
    }
})

route.post("/delete",async(req,res)=>{
  const { token , titleToBeDeleted } = req.body;
  console.log(titleToBeDeleted);
  const isTrue = jwt.verify(token , process.env.secret);
    if(isTrue){
      const user = await User.findById(isTrue.id);
        const dd = await User.updateOne({ id: isTrue.id }, {
          $pullAll: {
            titles: titleToBeDeleted,
          },
        });
        if(dd){
          console.log(user);
          return res.json({'data':'data','status':'ok'})
        }else{
          return res.json({'data':'Wrong Data','status':'error'})
        }
    }else{
      return res.json({'data':'invalid','status':'error'})
    }
})

module.exports = route;