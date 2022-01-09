import React, { useState } from 'react';
import '../App.css';

const CreateApi = ()=>{
    const inpArr = ["Number","ID","Date","Password","Email","Mongoose Schema ID","Bitcoin Address","Country","Currency","Gender"];
    const [nu ,  setNu] = useState(100);
    const [Valuetypes , setValuetypes] = useState(inpArr)
    const [formDataName , setFormDataName] = useState([])
    const [formDataValue , setFormDataValue] = useState([])
    const Submit = (e)=>{
        e.preventDefault();
        console.log(formDataName , formDataValue , nu);
    }
    const AddField = ()=>{
        setFormDataName([...formDataName , "name"])
        // setFormDataValue([...formDataValue , Valuetypes[x]])
    }
    const InputName = (e , index)=>{
        var d = formDataName;
        d[index] = e.target.value;
        setFormDataName(d);
        console.log(formDataName);
    }
    const ValueName = (e , index)=>{
        var d = formDataValue;
        d[index] = e.target.value;
        setFormDataValue(d);
        console.log(formDataValue)
    }
    const Delete = (index)=>{
        if(index === 0){
            setFormDataValue([]);
            setFormDataName([]);
        }
        else{
            var d = formDataName.splice(index,1);
            console.log(index);
            setFormDataName(d);
            var v = formDataValue.splice(index , 1);
            setFormDataValue(v);
        }
        
    }
    return (
        <div>
            <form onSubmit={Submit}>
                {formDataName.map((value, index)=>{
                    return(
                        <div key={index} className='border-2 border-cyan-900 px-12 py-12'>
                            <div className='inline-block'>
                                Name: 
                                <input name={formDataName[index]} placeholder='Enter Name ' onChange={(e)=> InputName(e , index)} required />
                            </div>
                            <div className='inline-block'>
                                Type :
                                <select onChange={(e)=>ValueName(e , index )} required>
                                    <option value=''>Select</option>
                                    {Valuetypes.map((val,index)=>{
                                        return(
                                            <option key={index} value={val}>{val}</option>
                                        );
                                    })}
                                </select>
                            </div>
                            <button type='button' onClick={()=>Delete(index)} className='mx-96 border-dashed border-4'>Delete</button>
                        </div>
                    );
                })}
                {formDataName.length ? 
                    <div>
                        Number of To be Produced:
                        <input name='nu' value={nu} type='number' onChange={e => setNu(parseInt(e.target.value))} />
                    </div>:<div></div>
                }
                {formDataName.length ? <button className='mx-96 text-xl text-black'>Submit</button> : <div></div>}
            </form>
            <div className='text-center'><button className='border-4 border-black text-xl bg-green-500' onClick={AddField}>Add Another Field</button></div>
        </div>
    );
}

export default CreateApi;