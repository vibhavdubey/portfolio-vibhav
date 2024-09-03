import emailjs from "@emailjs/browser";
import React, { useRef } from "react";
import GithubIcon from "../../assets/socialLink/github-logo.png";
import InstagramIcon from "../../assets/socialLink/instagram-logo.png";
import LinkedinIcon from "../../assets/socialLink/linkedin-logo.png";
import YoutubeIcon from "../../assets/socialLink/youtube-logo.png";
import "./contact.css";
const Contact = () => {
  const links = [
    {
      id: 1,
      icon: LinkedinIcon,
      iconText: "LinkedinIcon",
      openLink: function () {
        window.open(
          "https://www.linkedin.com/in/vibhav-kumar-dubey/",
          "_blank"
        );
      },
    },
    {
      id: 2,
      icon: InstagramIcon,
      iconText: "InstagramIcon",
      openLink: function () {
        window.open(
          "https://www.instagram.com/vibhavdubey.19?igsh=MjU0NDNjdDQ0NzE=",
          "_blank"
        );
      },
    },
    {
      id: 3,
      icon: GithubIcon,
      iconText: "GithubIcon",
      openLink: function () {
        window.open("https://github.com/vibhavdubey", "_blank");
      },
    },
    {
      id: 4,
      icon: YoutubeIcon,
      iconText: "YoutubeIcon",
      openLink: function () {
        window.open("https://www.youtube.com/@vibhavdubey", "_blank");
      },
    },
  ];
  const form = useRef();
  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm("service_861yp32", "template_o1gpnwd", form.current, {
        publicKey: "qUSCUXaBpNkE3QKjA",
      })
      .then(
        (result) => {
          console.log(result.text);
          e.target.reset();
          alert("Email Sent !");
        },
        (error) => {
          console.log("Error:", error);
          alert("Failed to send email. Please try again later.");
        }
      );
  };
  return (
    <>
      <section id="contactPage">
        <div id="contact">
          <h1 className="contactPageTitle">Contact Me</h1>
          <span className="contactDesc">
            Please fill out the form below to discuss any work oppertunities.
          </span>
          <div className="contactForm">
            <form className="contactForm" ref={form} onSubmit={sendEmail}>
              <input
                type="text"
                className="name"
                placeholder="Your Name"
                name="from_name"
                required
              />
              <input
                type="email"
                className="email"
                placeholder="Your Email"
                name="from_email"
                required
              />
              <textarea
                className="msg"
                name="message"
                rows="5"
                placeholder="Your Message"
                required
              ></textarea>
              <button type="submit" value="Send" className="submitBtn">
                Submit
              </button>
            </form>
            <div className="links">
              {links.map((link) => (
                <img
                  src={link.icon}
                  alt={link.iconText}
                  className="link"
                  key={link.id}
                  onClick={link.openLink}
                />
              ))}
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Contact;
