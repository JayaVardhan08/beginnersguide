import "./index.css"
import { useNavigate } from "react-router-dom"

const Home = () =>{
    const navigate = useNavigate()
    const moveToLogin = () =>{
        navigate("/login")
    }
    const moveToSignup = () =>{
        navigate("/signup")
    }

return(
    <div className="home-container">
        <div className="header">
            <a href = "our-services">Services</a>
            <a href = "contact-us">Contact</a>
        </div>
        <div className="body">
            <h1 className="main-heading">COURSE MASTERY PRIMER</h1>
            <p>Beginner's guide to master a course</p>
        </div>
        <div className="buttons">
            <button onClick={moveToLogin}>SignIn</button>
            <button onClick={moveToSignup}>SignUp</button>
        </div>
    </div>
)
}
export default Home