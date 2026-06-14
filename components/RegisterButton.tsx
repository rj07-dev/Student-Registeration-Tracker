import {useState} from "react";
export default function RegisterButton(){

const [registered,setRegistered]=useState(false);
return(
<div>

{registered ?
<p style={{
color:"green",
fontWeight:"bold"
}}>

Course Registered ✓
</p>
:

<button style={{
background:"#2563eb",
color:"white",
padding:"10px 20px",
border:"none",
borderRadius:"5px",
cursor:"pointer"
}}

onClick={()=>setRegistered(true)}
>

Register
</button>
}
</div>
)
}