
import { Component } from "react";
import { Link } from "react-router-dom";
import "./index.css"
import LeftNav from "../Navbar";

class CollaborativeLearning extends Component{
        render(){
            return(
                <div className="main-container">
                    <LeftNav/>
                    <div className="cl-container">
                    <h1>Collaborative Learning</h1>
                    <div className="list-of-cards">
                    <Link to = "/notes-list" style={{textDecoration:"none",marginBottom:"20px"}}>
                    <div className="card" style={{width:"300px"}}>
                        <h1>Notes Sharing Portal</h1>
                        <p>Share your notes or aquire knowledge from shared notes</p>
                    </div>
                    </Link>
                    <Link to = "/notes-list" style={{textDecoration:"none", marginBottom:"20px"}}>
                    <div className="card" style={{width:"300px"}}>
                        <h1>Notes Sharing Portal</h1>
                        <p>Share your notes or aquire knowledge from shared notes</p>
                    </div>
                    </Link>
                    <Link to = "/notes-list" style={{textDecoration:"none",marginBottom:"20px"}}>
                    <div className="card" style={{width:"300px"}}>
                        <h1>Notes Sharing Portal</h1>
                        <p>Share your notes or aquire knowledge from shared notes</p>
                    </div>
                    </Link>
                    </div>
                    
                    </div>
                </div>
            )
        }
}

export default CollaborativeLearning