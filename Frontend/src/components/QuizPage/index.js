
import {Component} from "react"
import { Link } from "react-router-dom";
import { FaSearch } from "react-icons/fa";


import "./index.css"
import LeftNav from "../Navbar";

const listOfCourses = ["CPP Language","Java Script","React Js","Python","Machine Learning"]
class Quizzes extends Component{
   
    render(){
        return(
        <div className="main">
            <LeftNav/>
            <div className="courses-container">
                <h1 className="courses-heading">Select Your Courses For Test</h1>
                <div className="courses-search-container">
                    <input type = "text" className="search-element" placeholder="Search"/>
                    <FaSearch/>
                </div>
                <ul className="list-of-courses">
                    {
                        listOfCourses.map(course =>(
                            <Link to = {`/${course}/quiz`} style={{textDecoration:"none"}}>
                        <       li className="each-course">{course}</li>
                            </Link>
                        ))
                    }
                </ul>
            </div>
        </div>
        )
    }
}

export default Quizzes