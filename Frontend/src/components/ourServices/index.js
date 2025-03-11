import { Component } from "react";
import { FaPlay } from "react-icons/fa";
import { IoBarChart } from "react-icons/io5";
import { FaLightbulb } from "react-icons/fa6";

import "./index.css"

class Services extends Component{
    render(){
        return(
            <div className="services-page">
                <h1 className="services-heading">Our Services</h1>
                <p className="services-para">We make Your journey more personalized and interactive by providing the below features in more effective and improvised way.Master your course journey by using the best of these features.</p>
                <div className="card-container">
                    <div className="card">
                        <FaPlay className="play-icon"/>
                        <p className="card-heading">COLLABORATIVE LEARNING</p>
                        <p>Seamless collaboration with Real-time communication,shared projects for enhanced learning.</p>
                    </div>
                    <div className="card">
                        <IoBarChart className="play-icon"/>
                        <p className="card-heading">PROGRESS EVALUATION</p>
                        <p>Develop a comprehensive analytics dashboard offering detailed insights into user progress,strength,and areas for improvement</p>
                    </div>
                    <div className="card">
                        <FaLightbulb className="play-icon"/>
                        <p className="card-heading">CAREER HORIZON HUB</p>
                        <p>course related articles to make you updated,job oppurtunities available related to the course are provided to ake it helpful</p>
                    </div>
               </div>
            </div>
        )
    }
}

export default Services