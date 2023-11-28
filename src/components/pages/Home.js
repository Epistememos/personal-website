import React from 'react'
import SideNav from '../SideNav';
import "./Home.css";
import Header from "../Header";
import Showcase from '../Showcase';


function Home() {
  return (
    
    <div className='home'>
      <SideNav name="Youdas Yessad"/>
      <div className="home_container">

        <div className="about_container">
        <h1 id="about">Youdas Yessad</h1>
          <div class="row">
            <div className="column">
              <img src='/assets/img-pilot2.jpg' alt='Headshot'/>
            </div>
            <div className="column">
              <img src='/assets/img-profile.jpg' alt='Headshot'/>
            </div>
            <div className="column">
              <img src='/assets/img-profile.jpg' alt='Headshot'/>
            </div>
          </div>
          
          <div className="about_text">
          <h3>I'm on a journey fueled by three passions</h3>
          <p><b>Learning:</b> I'm a seeker of wisdom and a lover of knowledge🧙. I've immersed myself in the worlds of science and philosophy. This quest has led me to dive deep into books, engage in thought-provoking discussions, and share profound insights with others.</p>
          <p><b>Building:</b> Whether it's founding clubs, laying the groundwork for leadership in cadet organizations, or rallying volunteers for a hospital, I find fufillment in bringing ideas to life. I'm excited to collaborate with passionate peers to breathe life into innovative projects. Building is my way of expressing who I am.</p>
          <p><b>Enjoying the Journey:</b> Through all my endeavors, one thing remains constant—I want to have fun along the way. The thrill of turning ideas into reality, overcoming challenges, and accomplishing the seemingly impossible is what keeps me going. My ultimate goal is to see my passion materialize. And it all begins and ends with a commitment to lifelong learning.</p>
          </div>
        </div>
        <div className="projects_container">
        <h1 id="projects">Projects</h1>
        <Showcase />
        </div>
        <div className="involvements_container">
        <h1 id="involvement">Involvements</h1>
        </div>
        <div className="blog_container">
        <h1 id="blog">Blog</h1>
        </div>
        <div className="footer" >
          <div className="contact_container" ></div>
          <h1 id="contact">Contact</h1>
          </div>
        </div>
    </div>
  )
}

export default Home;
