import React from "react";
import "./experience.css";

const Experience = () => {
  const experienceDatas = [
    {
      id: 1,
      year: "April 2024 - Present",
      position: "Software Developer",
      company: "BlogHunch Software Pvt Ltd.",
      location: "Kolkata, India",
      description:
        "Developing and maintaining web applications using React.js, Next.js in frontend part and in backend using Adonis.js . Strong foundation in JavaScript, CSS, and HTML. Hands-on experience working on live projects, with a solid understanding of RESTful API integration on the frontend.",
    },
    {
      id: 2,
      year: "Jan 2023 - Aug 2023",
      position: "Software Development (Internship)",
      company: "Mobiloitte Technologies India Pvt. Ltd.",
      location: "Delhi, India",
      description:
        "Gained hands-on experience in Java technology, focusing on core Java and Object-Oriented Programming (OOP) principles.",
    },
  ];

  return (
    <>
      <section id="experience">
        <span className="experienceTitle">Experience</span>
        <span className="experienceDesc">My Professional Journey</span>
        <div className="experienceBars">
          {experienceDatas.map((experienceData) => (
            <div className="experienceBar" key={experienceData.id}>
              <div className="experienceBarText">
                <p>{experienceData.year}</p>
                <h2>{experienceData.position}</h2>
                <h3>
                  {experienceData.company} - {experienceData.location}
                </h3>
                <p>{experienceData.description}</p>
              </div>
            </div>
          ))}
        </div>
      </section>
    </>
  );
};

export default Experience;
