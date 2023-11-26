import React from 'react';
import "./Simplified.css";

function Simplified() {
  return (
    <div className="simplified_container">
      <a href="/">Return Home</a>
      <h1>Youdas Yessad</h1>
      <h3><a href="/assets/Resume.pdf" target="_blank" rel="noopener noreferrer">Resume</a></h3>
      <div className="simplified_section">
        <h2>About</h2>
        <h3>I'm Youdas, and I'm on a journey fueled by three core passions:</h3>
        <p>
          <b>Learning:</b> I'm a seeker of wisdom and a lover of knowledge🧙. I've immersed myself in the worlds of science and philosophy. This quest has led me to dive deep into books, engage in thought-provoking discussions, and share profound insights with others.
        </p>
        <p>
          <b>Building:</b> Whether it's founding clubs, laying the groundwork for leadership in cadet organizations, or rallying volunteers for a hospital, I find fufillment in bringing ideas to life. I'm excited to collaborate with passionate peers to breathe life into innovative and impactful projects. For me, building is my way of expressing who I am.
        </p> 
        <p>
          <b>Enjoying the Journey:</b> Through all my endeavors, one thing remains constant—I want to have fun along the way. The thrill of turning ideas into reality, overcoming challenges, and accomplishing the seemingly impossible is what keeps me going. My ultimate goal is to see my passion materialize. And it all begins and ends with a commitment to lifelong learning.
        </p>
        <h2>Projects</h2>
        <a href="https://github.com/Epistememos/NeuralCar"><h3>Neural Car</h3></a>
        <a href='https://github.com/Epistememos/TaskMaster'><h3>TaskMaster</h3></a>
        <p>Implementing a Notion add-on to organize tasks efficiently through a minimalist to-do-list.</p>
        <p>Designing a webpage according to students’ feedback to improve user experience and efficiency.</p>
        <h2>Involvements</h2>
        <h3>Director of Outreach - McGill Product Management Association</h3>
        <p>Fueling the Association with expertise by reaching out to product managers in Montreal.</p>
        <p>Securing sponsors for ProductLab, a case/hackathon competition centered around product management.</p>
        <h3>VP External - McGill Student Flying Club</h3>
        <p>Organizing a skydving event and looking to offer industry tours to aviation enthusiasts (Contact me below)</p>
        <h3>Junior Consultant - ConnectUs</h3>
        <p>Coming Soon </p>
        <h2>Blog</h2>
        <h3>Thoughts on Free Will (Coming Soon)</h3>

      </div>
      <div className="contact_section">
            <h2>Contact Information</h2>
            <h3><a href='mailto: youdas.yessad@gmail.com'>Email</a></h3>
            <h3><a href="https://www.linkedin.com/in/youdas-yessad/">LinkedIn</a></h3>
        </div>
    </div>

  )
}

export default Simplified
