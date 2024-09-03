import React from "react";
import JavaLogo from "../../assets/Java-Logo.png";
import JavaScriptLogo from "../../assets/JavaScript-Logo.png";
import ReactLogo from "../../assets/react-logo.png";
import WebDesign from "../../assets/website-design.png";
import "./skills.css";

const Skills = () => {
  const skillDatas = [
    {
      id: 1,
      skillLogo: WebDesign,
      skill: "Website Development",
      skillIntro: "Knowledge of web technologies -",
      skillTechnology: "HTML, CSS, JavaScript, Tailwind CSS Framework etc...",
    },
    {
      id: 2,
      skillLogo: JavaScriptLogo,
      skill: "JavaScript",
      skillIntro: "Knowledge of JavaScript -",
      skillTechnology: "Objects, Arrays, DOM, Events etc...",
    },
    {
      id: 3,
      skillLogo: ReactLogo,
      skill: "ReactJS",
      skillIntro: "Knowledge of ReactJs Library -",
      skillTechnology: "JSX, Components, State and Props, Events, Hooks etc...",
    },
    {
      id: 4,
      skillLogo: JavaLogo,
      skill: "Java",
      skillIntro: "Knowledge of Java SE and some concept of Java EE -",
      skillTechnology:
        "OOPs Concept, Exception Handling, Collections, Multithreading etc...",
    },
  ];
  return (
    <>
      <section id="skills">
        <span className="skillTitle">What I do</span>
        <span className="skillDesc">
          I am a skilled and passionate web designer with some experience in
          creating visually appealing and user-frendly websites. I have a good
          understanding of design and a keen eye for detail. I am proficient in
          HTML, CSS, JavaScript and ReactJS as well as knowledge in backend
          technology in JAVA.
        </span>
        <div className="skillBars">
          {skillDatas.map((skillData) => (
            <div className="skillBar" key={skillData.id}>
              <img
                src={skillData.skillLogo}
                alt={skillData.skill}
                className="skillBarImg"
              />
              <div className="skillBarText">
                <h2>{skillData.skill}</h2>
                <p>{skillData.skillIntro}</p>
                <p>{skillData.skillTechnology}</p>
              </div>
            </div>
          ))}
        </div>
      </section>
    </>
  );
};

export default Skills;
