import { useState } from "react"

const useInputState = (defaultvalue =null)=>{
    const [value , setvalue]=useState(defaultvalue);

    // const handlechange = e =>{
    //     setvalue(e.target.value);
    // }
    // return  [ value, handlechange]

    const onChange = e =>{
       setvalue(e.target.value);
    }
    return{
        value,
        onChange
    }

}

export default useInputState;