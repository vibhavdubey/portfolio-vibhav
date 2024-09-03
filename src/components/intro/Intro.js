import React from "react";
import hireme from "../../assets/hireme.png";
import vibhavImg from "../../assets/vibhavImg.png";
import "./intro.css";

const Intro = () => {
  const openResume = () => {
    window.open(
      "https://drive.google.com/file/d/1WLu1fHKTpW7El5sKm6ls1MGa7KI6I5kS/view?usp=sharing",
      "_blank"
    );
  };
  return (
    <>
      <section id="intro">
        <div className="introContent">
          <span className="hello">Hello,</span>
          <span className="introText">
            I'm<span className="introName"> Vibhav</span>
            <br />
            Software Developer
          </span>
          <p className="introPara">
            I am a skilled web designer with some experience in creating <br />
            visually appealing and user friendly websites.
          </p>
          <div>
            <button className="btn" onClick={openResume}>
              <img src={hireme} alt="hireme" className="btnImg" />
              My Resume
            </button>
          </div>
        </div>
        <img src={vibhavImg} alt="vibhavImg" className="bg" />
      </section>
    </>
  );
};

export default Intro;
