import Hole from "../../ui/Hole";
import "./About.css";
import {skills } from "../../data";
import CardUi from "../../assets/CardUi";
const About = () => {
  return (
    <section id='about'>
      <div className="card section__wrapper">
               <Hole /> 
        <div className="column left-column">
        <h2 className="shine abc" >About Me</h2>
          <div className="skills__container">
            {skills.map((skills,index)=>(
              <div className="flex skill__group" key={index}>
                {skills.data.map((list,key)=>(
                  <div className="blur__overlay flex__center skill" key={key}>
                    <div className="skill__logo">
                      <img src={list.logo} alt="" />
                    </div>
                  </div>
                ))}
              </div>
            ))}
          </div>
          <CardUi className="card__ui-item" color={"var(--color-primary)"}/>
        </div>
        <div className="column right-column">
          
          <h1 className="title">
            I am <span className="color__primary"> BAKKIYALAKSHMI V,</span>
          </h1>
          <p className="text__muted description">
           A motivated Computer Science Engineer with a strong foundation in coding and object-oriented programming. I have hands-on experience with HTML, CSS, JavaScript, SQL, and Python. My problem-solving skills and adaptability allow me to thrive in dynamic environments, making me an asset in both individual and collaborative projects.
I have developed interactive projects, including Non-Repeating, Normalized Questionnaire Sets Generation using Randomization algorithm.Always eager to learn, I continuously explore new technologies to enhance my expertise in web and software development.
          </p>
        </div>
      </div>
    </section>
  );
};

export default About;