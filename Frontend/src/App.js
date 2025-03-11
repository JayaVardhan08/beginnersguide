import {Component} from "react"
import { BrowserRouter,Route,Routes } from "react-router-dom";
//import ResetPassword from "./components/ResetPassword"
import Courses from "./components/courses"
import Services from "./components/ourServices"
import ContactUs from "./components/ContactUs"

//import PasswordGeneration from "./components/PasswordGeneration"
import Login from "./components/Login"
import Signup from "./components/Signup"
import Home from "./components/Home"
import PythonCourses from "./components/PythonCourses";
import Quizzes from "./components/QuizPage";
import PythonQuizApp from "./components/PythonQuiz";
import PythonExamDashboard from "./components/PythonProgress";
//import QuizReview from "./components/PythonQuizReview";
import ReactQuizApp from "./components/ReactQuiz";
import ReactExamDashboard from "./components/ReactProgress";
import Progress from "./components/ProgressPage";
import ReactContent from "./components/ReactContent";
import NoteForm from "./components/NotesForm";
import NotesList from "./components/NotesList";
import NoteDetails from "./components/NotesDetails";
import CollaborativeLearning from "./components/CollaborativeLearning";


class App extends Component{
  render(){
    return(
      <BrowserRouter>
      <Routes>
        <Route path = "/" element = {<Home/>}/>
        <Route path = "/signup" element = {<Signup/>}/>
        <Route path = "/login" element = {<Login/>}/>
        <Route path = "/contact-us" element = {<ContactUs/>}/>
        <Route path = "our-services" element = {<Services/>}/>
        <Route path = "courses" element = {<Courses/>}/>
        <Route path = "quizzes" element = {<Quizzes/>}/>
        <Route path = "progress" element={<Progress/>}/>
        <Route path = "/python/content" element = {<PythonCourses/>}/>
        <Route path = "/python/quiz" element = {<PythonQuizApp/>}/>
        <Route path = "/python/progress" element = {<PythonExamDashboard/>}/>
        <Route path = "/React Js/content" element = {<ReactContent/>}/>
        <Route path = "/React Js/quiz" element = {<ReactQuizApp/>}/>
        <Route path = "/React Js/progress" element = {<ReactExamDashboard/>}/>
        <Route path = "/add-notes" element = {<NoteForm/>}/>
        <Route path = "/notes-list" element = {<NotesList/>}/>
        <Route path = "/notes/:id" element = {<NoteDetails/>}/>
        <Route path = "/collaborative-learning" element = {<CollaborativeLearning/>}/>
      </Routes>
      </BrowserRouter>
    )
  }
}

export default App