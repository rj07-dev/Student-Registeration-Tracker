import {useState} from "react";
export default function AddCourse(){


const [course,setCourse]=useState("");
const [message,setMessage]=useState("");

function submitCourse(e:React.FormEvent){

e.preventDefault();

setMessage(
"Course Added: "+course
);
}

return(
<div style={{
padding:"20px",
background:"#fff",
borderRadius:"10px"
}} >

<h2>
Add Course
</h2>

<form onSubmit={submitCourse}>

<input style={{
padding:"10px",
marginRight:"10px"
}}

value={course}

onChange={(e)=>setCourse(e.target.value)}

placeholder="Course name" />

<button style={{
padding:"10px",
background:"#9333ea",
color:"white",
border:"none"
}} type="submit" >
Add
</button>

</form>

{ message &&

<p>
{message}
</p>
}

</div>

)
}