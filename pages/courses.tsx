import Navbar from "@/components/Navbar";
import CourseCard from "@/components/CourseCard";


export default function Courses(){


return(

<>

<Navbar/>


<h1>
Available Courses
</h1>


<CourseCard

name="Advanced Front-End Development"

code="COMP1234"

credits={3}

/>


<CourseCard

name="Database Systems"

code="COMP2345"

credits={4}

/>


<CourseCard

name="Java Programming"

code="COMP3456"

credits={3}

/>


</>

)

}