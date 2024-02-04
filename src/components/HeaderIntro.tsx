import React from "react";
import Button from "./Button";
import RadialGradient from "./RadialGradient";
import profilePicture from "../assets/img/akash.png";
import { useSectionInView } from "../assets/lib/hooks";
import { useActiveSectionContext } from "../context/active-section-context";
import { BsMouse } from "react-icons/bs";
import { FiGithub, FiMail } from "react-icons/fi";

const HeaderIntro: React.FC = () => {
  const { ref } = useSectionInView("Home", 0.5);
  const { setActiveSection, setTimeOfLastClick } = useActiveSectionContext();

  return (
    <section
      className="hero flex flex-col justify-center gap-10 items-center h-full max-lg:h-full max-lg:gap-6"
      ref={ref}
      id="home"
    >
      <RadialGradient scale="scale-y-125" opacity="opacity-30" />

      <img
        src={profilePicture}
        alt="Profile Picture"
        className="w-1/6 drop-shadow-2xl rounded-full shadow-2xl max-lg:w-3/4"
      />
      <h1>
        Hi, I'm Akash
        <span className="wave text-7xl">&#128075;&#127997;</span>
      </h1>
      <h2>Frontend Developer</h2>
      <p className="w-1/3 text-center max-lg:hidden">
        I'm Akash, a passionate frontend developer with the goal of advancing my
        career and participating in inspiring projects. Here I present my work
        and my passion for web development.
      </p>

      <div className="button-container flex items-center justify-center mr-8 gap-10 mb-12 max-lg:flex-col max-lg:items-center">
        <Button
          label="Contact me"
          iconSVG={FiMail}
          link="#contact"
          buttoncolor="main-btn"
          onClick={() => {
            setActiveSection("Contact");
            setTimeOfLastClick(Date.now());
          }}
        />
        <Button
          label="My Projects"
          iconSVG={FiGithub}
          link="#projects"
          buttoncolor="secondary-btn"
          onClick={() => {
            setActiveSection("Projects");
            setTimeOfLastClick(Date.now());
          }}
        />
      </div>
      <div className="scroll-down-container animate-bounce flex gap-6">
        <BsMouse className="text-[2.6rem]" />
      </div>
    </section>
  );
};

export default HeaderIntro;
