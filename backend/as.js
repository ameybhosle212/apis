// var CryptoJS = require("crypto-js");
// const SECRET = 'I am batman'

// function enc(plainText){
//     var b64 = CryptoJS.AES.encrypt(plainText, SECRET).toString();
//     var e64 = CryptoJS.enc.Base64.parse(b64);
//     var eHex = e64.toString(CryptoJS.enc.Hex);
//     return eHex;
// }

// function dec(cipherText){
//    var reb64 = CryptoJS.enc.Hex.parse(cipherText);
//    var bytes = reb64.toString(CryptoJS.enc.Base64);
//    var decrypt = CryptoJS.AES.decrypt(bytes, SECRET);
//    var plain = decrypt.toString(CryptoJS.enc.Utf8);
//    return plain;
// }

// console.log(dec("53616c7465645f5f265cbfa1c8be1a6310c38548511c546925d3f26abd922092"));



// var data="Example1";//Message to Encrypt
// var iv  = CryptoJS.enc.Base64.parse("");//giving empty initialization vector
// var key=CryptoJS.SHA256("secret");//hashing the key using SHA256
// var encryptedString=encryptData(data,iv,key);
// console.log(encryptedString);//genrated encryption String:  swBX2r1Av2tKpdN7CYisMg==

// function encryptData(data,iv,key){
// 	 	     if(typeof data=="string"){
//             data=data.slice();
//           encryptedString = CryptoJS.AES.encrypt(data, key, {
// 	          iv: iv,
// 	          mode: CryptoJS.mode.CBC,
// 	          padding: CryptoJS.pad.Pkcs7
// 	    });
//           }
// 	       else{
//          encryptedString = CryptoJS.AES.encrypt(JSON.stringify(data), key, {
// 	          iv: iv,
// 	          mode: CryptoJS.mode.CBC,
// 	          padding: CryptoJS.pad.Pkcs7
// 	    });  
//          }
// 	    return encryptedString.toString();
// }
// console.log('Encrypted data is '+ encryptedString);


// var decrypteddata=decryptData(encryptedString,iv,key);
// console.log('Decrypted Data is '+ decrypteddata);//genrated decryption string:  Example1

// function decryptData(encrypted,iv,key){
//     var decrypted = CryptoJS.AES.decrypt(encrypted, key, {
//         	  iv: iv,
//             mode: CryptoJS.mode.CBC,
//             padding: CryptoJS.pad.Pkcs7
//         });
//     return decrypted.toString(CryptoJS.enc.Utf8)
// }

const CryptoJS = require("crypto-js");

const encrypt = (text) => {
  return CryptoJS.enc.Base64.stringify(CryptoJS.enc.Utf8.parse(text));
};
console.log("Encrypted text " + encrypt("61f037fe498f8eb4174c6ac3") );
const decrypt = (data) => {
  return CryptoJS.enc.Base64.parse(data).toString(CryptoJS.enc.Utf8);
};
console.log("DECRYPT TEXT IS " + decrypt(encrypt("61f037fe498f8eb4174c6ac3")));