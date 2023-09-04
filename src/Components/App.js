import Home from "./Home"
import { Routes, Route, NavLink } from "react-router-dom";
import LogIn from "./Login";
import About from "./About";
import NavBar from "./NavBar";


const App = () => {
    return ( <div>
        <NavBar/>
        <Routes>
            <Route path="/" element={<Home/>}/>
            <Route path="/about" element={<About/>}/>
            <Route path="/login" element={<LogIn/>}/>    
        </Routes>

    </div> );
}
 
export default App;