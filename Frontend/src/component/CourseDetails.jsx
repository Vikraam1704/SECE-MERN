import { useParams } from "react-router-dom"

const CourseDetails = () =>{

    const {id} = useParams();
    
    const CourseDetail = [
        {   CId : 1, 
            CourseName : "Java Script",
            description:"Programming Language"
        },
        {   CId : 2, 
            CourseName : "MERN",
            description:"Full Stack"
        },
        {   CId : 3, 
            CourseName : "Java",
            description:"Programming Language"
        },
    ]
    
    const course = CourseDetail.filter((course)=> Number(id) === course.CId)
    // console.log(course)
    return (
        <div>
           {course.map((c)=>(
                <>
                    <h1>Course Detail of {id}</h1>
                    <p>Course Name : {c.CourseName}</p>
                    <p>Description : {c.description}</p>
                </>
           ))}
        </div>
    )
}
export default CourseDetails