import Navbar from "./component/Navbar"
import Parent from "./component/Parent"
import Counter from "./component/Counter"
import About from "./pages/About"
import Contact from "./pages/Contact"
import Home from "./pages/Home"
import Service from "./pages/Service"
import Login from "./Auth/Login"
import Effect from "./Hooks/Effect"
import FetchApi from "./Hooks/FetchApi"
import Reducer from "./Hooks/Reducer"
import {Routes, Route} from "react-router-dom"
import Dashboard from "./component/Dashboard"
import Course from "./component/Course"
import CourseDetails from "./component/CourseDetails"
const App = () => {
  // const message = "<script>alert('Hacked!!!')</script>"
  return (
    <> 
      <Routes>
        <Route path='/dashboard' element={<Dashboard/>}>
          <Route path="home" element={<Home name="viky"/>}/>
          <Route path='about' element={<About name="viky"/>} />
          <Route path='contact' element={<Contact/>} />
          <Route path="service" element={<Service/>}></Route>
          <Route path='state' element={<Counter/>} />
          <Route path='effect' element={<Effect/>} />
          <Route path='userdata' element={<FetchApi/>} />
          <Route path='props' element={<Parent/>} />
          <Route path='reducer' element={<Reducer/>} />
          <Route path='course' element={<Course/>} >
            <Route path='course/:id' element={<CourseDetails/>} />
          </Route>
        </Route>
        <Route path='/' element={<Login/>} />
      </Routes>
    </>
  )
}

export default App