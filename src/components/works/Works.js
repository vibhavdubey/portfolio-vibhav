import React from "react";
import "./Works.css";
import Portfolio1 from "../../assets/works/portfolio-1.png";
import Portfolio2 from "../../assets/works/portfolio-2.png";
import Portfolio3 from "../../assets/works/portfolio-3.png";
import Portfolio4 from "../../assets/works/portfolio-4.png";
import Portfolio5 from "../../assets/works/portfolio-5.png";
import Portfolio6 from "../../assets/works/portfolio-6.png";
const Works = () => {
  const worksImgs = [
    {
      id: 1,
      worksImage: Portfolio1,
      worksImageText: "Portfolio1",
    },
    {
      id: 2,
      worksImage: Portfolio2,
      worksImageText: "Portfolio2",
    },
    {
      id: 3,
      worksImage: Portfolio3,
      worksImageText: "Portfolio3",
    },
    {
      id: 4,
      worksImage: Portfolio4,
      worksImageText: "Portfolio4",
    },
    {
      id: 5,
      worksImage: Portfolio5,
      worksImageText: "Portfolio5",
    },
    {
      id: 6,
      worksImage: Portfolio6,
      worksImageText: "Portfolio6",
    },
  ];
  return (
    <>
      <section id="works">
        <h2 className="worksTitle">My Portfolio</h2>
        <span className="worksDesc">
          I take pride in paying attention to the smallest details and making
          sure that my work is pixel perfect.I am excited to bring my skills and
          experience to help businesses achieve their goals and create a strong
          online presence."
        </span>
        <div className="worksImgs">
          {worksImgs.map((worksImg) => (
            <img
              src={worksImg.worksImage}
              alt={worksImg.worksImageText}
              className="worksImg"
              key={worksImg.id}
            />
          ))}
        </div>
        {/* <button className="workBtn">See More</button> */}
      </section>
    </>
  );
};

export default Works;
