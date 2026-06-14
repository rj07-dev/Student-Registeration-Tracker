import RegisterButton from "./RegisterButton";

interface CourseProps{

name:string;
code:string;
credits:number;
}

export default function CourseCard({
name,
code,
credits
}:CourseProps){


return(

<div style={{
background:"white",
padding:"20px",
margin:"20px",
borderRadius:"10px",
boxShadow:"0 2px 8px gray"
}} >

<h2>
{name}
</h2>

<p>
Code: {code}
</p>

<p>
Credits: {credits}
</p>

<RegisterButton/>

</div>

)

}