import Link from "next/link";

export default function Navbar(){

return(

<nav style={{
background:"#1e293b",
padding:"20px",
display:"flex",
gap:"20px"
}}
>

<Link style={{
color:"white",
textDecoration:"none"
}}
href="/">
Home
</Link>


<Link style={{
color:"white",
textDecoration:"none"
}}
href="/courses" >
Courses
</Link>


<Link style={{
color:"white",
textDecoration:"none"
}}
href="/my-courses" >
My Courses
</Link>

</nav>

)
}