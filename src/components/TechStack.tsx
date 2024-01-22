import React, { useRef } from "react";
import { Tooltip as ReactTooltip } from "react-tooltip";
import { useSectionInView } from "../assets/lib/hooks";
import htmlicon from "../assets/icons/htmlicon.svg";
import cssicon from "../assets/icons/cssicon.svg";
import javascripticon from "../assets/icons/javascripticon.svg";
import typescripticon from "../assets/icons/typescripticon.svg";
import reacticon from "../assets/icons/reacticon.svg";
import mongodbicon from "../assets/icons/mongoicon.svg";
import djangoicon from "../assets/icons/djangoicon.svg";
import graphqlicon from "../assets/icons/graphqlicon.svg";
import nodejsicon from "../assets/icons/nodejsicon.svg";
import tailwindcssicon from "../assets/icons/tailwindicon.svg";
import figmaicon from "../assets/icons/figmaicon.svg";
import d3icon from "../assets/icons/d3icon.svg";
import postgreicon from "../assets/icons/postgreicon.svg";
import angularicon from "../assets/icons/angularicon.svg";
import sassscssicon from "../assets/icons/sassicon.svg";
import { useTheme } from "../context/theme-context";
import SkillSection from "./SkillSection";
import RadialGradient from "./RadialGradient";
import { motion, useScroll, useTransform } from "framer-motion";

const skillsDataFrontend = [
  {
    skillsTitle: "Frontend",
    skills: [
      {
        title: "HTML",
        hash: "#html",
        icon: htmlicon,
        color: "#F1662A",
      },
      {
        title: "CSS",
        hash: "#CSS",
        icon: cssicon,
        color: "#1572B6",
      },
      {
        title: "JavaScript",
        hash: "#JavaScript",
        icon: javascripticon,
        color: "#F7DF1E",
      },
      {
        title: "TypeScript",
        hash: "#TypeScript",
        icon: typescripticon,
        color: "#007ACC",
      },
      {
        title: "React",
        hash: "#React",
        icon: reacticon,
        color: "#61DAFB",
      },
      {
        title: "Angular",
        hash: "#Angular",
        icon: angularicon,
        color: "#EA3323",
      },
      {
        title: "D3",
        hash: "#D3",
        icon: d3icon,
        color: "#eca452",
      },
      {
        title: "Tailwind",
        hash: "#Tailwind",
        icon: tailwindcssicon,
        color: "#38B2AC",
      },
      {
        title: "SASS/SCSS",
        hash: "#SASS/SCSS",
        icon: sassscssicon,
        color: "#CC6699",
      },
      { title: "Figma", hash: "#Figma", icon: figmaicon, color: "#F24E1E" },
    ],
  },
];

const skillsDataBeckend = [
  {
    skillsTitle: "Backend",
    skills: [
      {
        title: "Node.js",
        hash: "#Node.js",
        icon: nodejsicon,
        color: "#339933",
      },
      {
        title: "Graphql",
        hash: "#Graphql",
        icon: graphqlicon,
        color: "#CC44A2",
      },
      {
        title: "Django",
        hash: "#Django",
        icon: djangoicon,
        color: "#214A35",
      },
    ],
  },
];

const skillsDataDB = [
  {
    skillsTitle: "Database",
    skills: [
      {
        title: "MongoDB",
        hash: "#MongoDB",
        icon: mongodbicon,
        color: "#449C45",
      },
      {
        title: "Postgresql",
        hash: "#Postgresql",
        icon: postgreicon,
        color: "#40658D",
      },
    ],
  },
];

const TechStack: React.FC = () => {
  const { ref } = useSectionInView("Skills");
  const { theme } = useTheme();
  const animationReference = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: animationReference,
    offset: ["0 1", "1.33 1"],
  });
  const scaleProgess = useTransform(scrollYProgress, [0, 1], [0.8, 1]);
  const opacityProgess = useTransform(scrollYProgress, [0, 1], [0.6, 1]);
  return (
    <React.Fragment>
      <section
        className="relative tech-stack max-lg:p-16 "
        id="skills"
        ref={ref}
      >
        <RadialGradient
          scale="scale-y-[3]"
          opacity={theme === "light" ? "opacity-30" : "opacity-30"}
          position="top-[55rem]"
        />
        <div className="title-container flex flex-col justify-center items-center p-32 w-1/2   gap-6 min-[1921px]:px-[55rem] max-lg:p-0  max-lg:w-full max-lg:items-start max-lg:py-16 ">
          <motion.div
            ref={animationReference}
            style={{
              scale: scaleProgess,
              opacity: opacityProgess,
            }}
          >
            <p className="font-black mb-6">
              <span className="text-[--blue]">&lt;</span>Skills
              <span className="text-[--blue]">/&gt;</span>
            </p>
            <h2>My TechStack and Skills</h2>
          </motion.div>
        </div>
        <div className="flex gap-40 justify-center max-lg:flex-col">
          <div className="w-1/3 max-lg:w-full">
            <SkillSection skillsData={skillsDataFrontend} theme={theme} />
          </div>
          <div className="flex flex-col h-[inherit]  justify-around max-lg:gap-40">
            <SkillSection skillsData={skillsDataBeckend} theme={theme} />
            <SkillSection skillsData={skillsDataDB} theme={theme} />
          </div>
        </div>
      </section>
      <ReactTooltip
        place="top"
        id="my-tooltip"
        style={{
          fontSize: "1.5rem",
          zIndex: 10,
          backgroundColor: "var(--blue)",
        }}
      />
    </React.Fragment>
  );
};

export default TechStack;
