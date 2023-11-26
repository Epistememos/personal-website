import React from 'react';
import "./Simplified.css";

function Simplified() {
  return (
    <div className="simplified_container">
      <a href="/">Return Home</a>
      <h1>Youdas Yessad</h1>
      <h3><a href="/media/Resume.pdf" target="_blank" rel="noopener noreferrer">Resume</a></h3>
      <div className="simplified_section">
        <h2>About</h2>
        <h3>I'm Youdas, and I'm on a journey fueled by three core passions: Learning, Building and Enjoying</h3>
        <p>
            Learning: I'm a seeker of wisdom and a lover of knowledge🧙. Over the past three years, 
            I've immersed myself in the worlds of science and philosophy. This quest has led me to dive deep into books, 
            engage in thought-provoking discussions, and share profound insights with fellow enthusiasts. 
        </p>
        <p>Building: I'm driven by a relentless desire to create. Whether it's founding clubs, laying the groundwork 
            for leadership in cadet organizations, or rallying volunteers for a hospital, I find fufillment in bringing 
            ideas to life. Now, in my first year of university, I'm excited to collaborate with passionate peers to breathe
            life into innovative and impactful projects. For me, building is my way of expressing who I am.
        </p> 
        <p>
            Enjoying the Journey: Through all my endeavors, one thing remains constant—I want to have fun along the way. 
            The thrill of turning ideas into reality, overcoming challenges, and accomplishing the seemingly impossible is 
            what keeps me going. My ultimate goal is to see my passion materialize in ways that positively impact people's 
            lives. And it all begins and ends with a commitment to lifelong learning.
        </p>
        <h2>Projects</h2>
        <a href="https://github.com/Epistememos/NeuralCar"><h3>Neural Car</h3></a>
        <a href='https://github.com/Epistememos/TaskMaster'><h3>TaskMaster</h3></a>
        <h2>Involvements</h2>
        <h3>Director of Outreach - McGill Product Management Association</h3>
        <h3>VP External - McGill Student Flying Club</h3>
        <h3>Junior Consultant - ConnectUs</h3>
        <h2>Blog</h2>
        <h3>Thoughts on Free Will</h3>

      </div>
      <div className="contact_section">
            <h2>Contact Information</h2>
            <h3><a href='youdas.yessad@gmail.com'>Email</a></h3>
            <h3><a href="https://www.linkedin.com/in/youdas-yessad/">LinkedIn</a></h3>
        </div>
    </div>

  )
}

export default Simplified
