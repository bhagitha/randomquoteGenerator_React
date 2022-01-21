import { useReducer } from "react";
import { useState } from "react/cjs/react.development"

 
 
 export default function Checkbox(){
     const[checked,setChecked]=useState();

     return (
         <>
         <input type="checkbox" value={checked} onChange={()=>{setChecked(checked=>!checked); }}/>
         {checked?"checked" :"not checked"}
         <input type="checkbox" value={checked} onChange={()=>{setChecked(checked=>!checked); }}/>
         {checked?"checked" :"not checked"}
         </>
     )
 }

//  function Checkbox(){
//     const[checked,setChecked]=useState();
//     function toggle(){
//     setChecked(checked=>!checked)
//     }
//     return (
//         <>
//         <input type="checkbox" value={checked} onChange={toggle}/>
//         {checked?"checked" :"not checked"}
//         </>
//     )
//  }

//  function Checkbox(){
//     const[checked,toggle]=useReducer(checked=>!checked)
//     return (
//         <>
//         <input type="checkbox" value={checked} onChange={toggle}/>
//         {checked?"checked" :"not checked"}
//         </>
//     )
//  }