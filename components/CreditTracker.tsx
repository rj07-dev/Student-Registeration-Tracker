import {useState} from "react";
export default function CreditTracker(){

const [credits,setCredits]=useState(0);

return(

<div style={{
background:"#f8fafc",
padding:"20px",
margin:"20px",
borderRadius:"10px"
}} >

<h2>
Total Credits: {credits}
</h2>

<button style={{
padding:"10px",
background:"#16a34a",
color:"white",
border:"none"
}}

onClick={()=>setCredits(credits+3)} >

Add Course Credit
</button>

{
credits >= 9 ?

<h3>
Full-Time Student
</h3>

:

<h3>
Part-Time Student
</h3>
}
</div>

)
}