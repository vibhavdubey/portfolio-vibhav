import React from "react";
import "./education.css";

const Education = () => {
  const educationDatas = [
    {
      id: 1,
      year: "2019-2023 (B.Tech)",
      institute: "Dronacharya Group of Institutions",
      location: "Greater Noida, Uttar Pradesh",
      score: "(Computer Science Engineering) Score-72%",
    },
    {
      id: 2,
      year: "2017-2018 (XII)",
      institute: "Kendriya Vidyalaya KNN",
      location: "Ghaziabad, Uttar Pradesh",
      score: "Score-69%",
    },
    {
      id: 3,
      year: "2015-2016 (X)",
      institute: "Kendriya Vidyalaya KNN",
      location: "Ghaziabad, Uttar Pradesh",
      score: "Score-84%",
    },
  ];
  return (
    <>
      <section id="education">
        <span className="educationTitle">Education</span>
        <span className="educationDesc">My Education Background</span>
        <div className="educationBars">
          {educationDatas.map((educationData) => (
            <div className="educationBar" key={educationData.id}>
              <div className="educationBarText">
                <p>{educationData.year}</p>
                <h2>{educationData.institute}</h2>
                <h3>{educationData.location}</h3>
                <p>{educationData.score}</p>
              </div>
            </div>
          ))}
        </div>
      </section>
    </>
  );
};

export default Education;
