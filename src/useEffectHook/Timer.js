import { useState, useEffect } from "react";
import ReactDOM from "react-dom";

export default function Timer() {

const[data,setData]=useState(null)

 useEffect(()=>{
  
  fetch('https://api.github.com/users/bhagitha') //service call : :API Request/call
  .then(d=>d.json())
  .then(setData)

  
 },[])

if(data){
  return <div> {JSON.stringify(data.location)}</div>
}
return null;

}