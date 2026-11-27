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
const App = () => {
  // const message = "<script>alert('Hacked!!!')</script>"
  return (
    <> {/* Fragment Tag*/}
      <Navbar />
      {/* <Reducer /> */}
      {/* <Counter/>  */}
      {/* <br /> <br />
      <Login /> */}
      {/* {message} */}
      {/* <FetchApi/> */}
      {/* <Parent /> */}
      <Home name = "Vikraam"/>
      <Contact />
    </>
  )
}

export default App