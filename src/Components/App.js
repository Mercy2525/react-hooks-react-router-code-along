import Home from "./Home"
import { Routes, Route, NavLink } from "react-router-dom";
import LogIn from "./Login";
import About from "./About";


const App = () => {
    return ( <div>
        <Routes>
            <Route path="/" element={<Home/>}/>
            <Route path="/about" element={<About/>}/>
            <Route path="/login" element={<LogIn/>}/>    
        </Routes>

    </div> );
}
 
export default App;