import {Outlet, useNavigate} from 'react-router-dom'
import { Button } from '@/components/ui/button';
const Course = () =>{
    const navigate = useNavigate();
    const CourseList = [
        {CId : 1, CourseName : "Java Script"},
        {CId : 2, CourseName : "MERN"},
        {CId : 3, CourseName : "Java"},
    ]
    const handleClick = (id) =>{
        navigate(`course/${id}`);
    }
    return (
        <div>
            {CourseList.map((course)=>(
                <Button variant='link'
                key={course.CId}
                onClick={()=>handleClick(course.CId)}
                >{course.CourseName}</Button>
            ))}

            <Outlet/>
        </div>
    )
}
export default Course