import Navbar from "@/components/Navbar";
import CreditTracker from "@/components/CreditTracker";
import AddCourse from "@/components/AddCourse";


export default function MyCourses(){


return(

<>

<Navbar/>


<h1>
My Registered Courses
</h1>


<ul>

<li>
Advanced Front-End Development
</li>

<li>
Database Systems
</li>

</ul>


<CreditTracker/>


<AddCourse/>


</>

)

}