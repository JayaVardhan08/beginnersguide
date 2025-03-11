import React from 'react';
import { ImBooks } from "react-icons/im";
import { MdQuiz } from "react-icons/md";
import { CiLogout } from "react-icons/ci";
import { GiProgression } from "react-icons/gi";
import { FcCollaboration } from "react-icons/fc";
import './index.css';

const LeftNav = (props) => {

  return (
    <div className={`left-nav`}>
      <div className="options">
      <div className='option-container'>
        <ImBooks/>
        <a href="/courses" className='option'>Courses</a>
      </div>
      <div className='option-container'>
        <MdQuiz/>
        <a href="/quizzes" className='option'>Take Test</a>
      </div>
      <div className='option-container'>
        <GiProgression/>
        <a href="/progress" className='option'>Progress</a>
      </div>
      <div className='option-container'>
        <FcCollaboration/>
        <a href="/collaborative-learning" className='option'>Collaborative<br/>Learning</a>
      </div>
      <div className='option-container'>
        <CiLogout/>
        <a href="/" className='option'>Logout</a>
      </div>
      </div>
    </div>
  );
};

export default LeftNav;
