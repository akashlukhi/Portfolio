import bannerBg from "../assets/img/bannerbg.webp";
import React, { useRef } from "react";
import Button from "./Button";
import LiveTicker from "./ParallaxText";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, EffectCards, Pagination } from "swiper/modules";
import { Tooltip as ReactTooltip } from "react-tooltip";
import { useSectionInView } from "../assets/lib/hooks";
import { motion, useScroll, useTransform } from "framer-motion";
import htmlicon from "../assets/icons/htmlicon.svg";
import cssicon from "../assets/icons/cssicon.svg";
import javascripticon from "../assets/icons/javascripticon.svg";
import pythonicon from "../assets/icons/pythonicon.svg";
import nodejsicon from "../assets/icons/nodejsicon.svg";
import mongodbicon from "../assets/icons/mongoicon.svg";
import sqlalchemyicon from "../assets/icons/sqlalchemyicon.svg";
import druid from "../assets/img/druid.png";
import busbooking from "../assets/img/bus.png";
import apiicon from "../assets/icons/apiicon.svg";
import djangoicon from "../assets/icons/djangoicon.svg";
import flaskicon from "../assets/icons/flaskicon.svg";
import angularicon from "../assets/icons/angularicon.svg";
import eWallet from "../assets/img/ewallet.png";
import expressiconwhite from "../assets/icons/expressiconwhite.svg";
import { FiGithub } from "react-icons/fi";

import "react-toastify/dist/ReactToastify.css";
import "swiper/css";
import "swiper/css/effect-cards";
import "swiper/css/pagination";

const projectsData = [
  {
    title: "E-Wallet Web Application",
    description:
      "Web application enabling user registration and login. Users can sign up with a bank account in our database, transfer money using account numbers and phone numbers, request funds, transfer from bank to wallet, pay bills, make reservations, contact support, and access various services.",
    technologies: [
      { name: "Angular", icon: angularicon },
      { name: "Html", icon: htmlicon },
      { name: "CSS", icon: cssicon },
      { name: "JavaScript", icon: javascripticon },
      { name: "REST Api", icon: apiicon },
      { name: "Node.js", icon: nodejsicon },
      { name: "express", icon: expressiconwhite },
      { name: "MongoDB", icon: mongodbicon },
    ],
    image: eWallet,
    githuburl: "https://github.com/akashlukhi/E-Wallet",
  },
  {
    title: "Speech Processing and Voice Recognition",
    description:
      "Like Google Assistant or Alexa, an online application that may be used as a voice assistant. The user can provide input in the form of a voice command, which the system will process and respond to. Set or remove reminders, play YouTube music, start or close programmes, and so on are some of the capabilities given by this system.",
    technologies: [
      { name: "Flask", icon: flaskicon },
      { name: "Html", icon: htmlicon },
      { name: "CSS", icon: cssicon },
      { name: "JavaScript", icon: javascripticon },
      { name: "Python", icon: pythonicon },
      { name: "SQLAlchemy", icon: sqlalchemyicon },
    ],
    image: busbooking,
    githuburl:
      "https://github.com/akashlukhi/Speech-Recognition-and-Voice-Assistant",
  },
  {
    title: "Bus Ticket Booking",
    description:
      "A web-based programme, the Online Bus Ticket Reservation System. where the administrator may add or edit bus information, and users can login or register to verify bus availability on their routes and dates. user can make a reservation or cancel it within 24 hours of departure. User can also obtain an e-ticket from our website.",
    technologies: [
      { name: "Django", icon: djangoicon },
      { name: "Html", icon: htmlicon },
      { name: "CSS", icon: cssicon },
      { name: "JavaScript", icon: javascripticon },
      { name: "Python", icon: pythonicon },
    ],
    image: druid,
    githuburl: "https://github.com/akashlukhi/Bus-Booking-System",
  },
];

const ProjectSlider: React.FC = () => {
  const { ref } = useSectionInView("Projects");
  const animationReference = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: animationReference,
    offset: ["1 1", "1.3 1"],
  });
  const scaleProgess = useTransform(scrollYProgress, [0, 1], [0.8, 1]);
  const opacityProgess = useTransform(scrollYProgress, [0, 1], [0.6, 1]);
  // const notifyServerRequest = () => {
  //   toast.info(toastMessages.loadingProject.en);
  // };

  return (
    <React.Fragment>
      <section
        className=" skill-banner relative overflow-x-clip h-100% w-full flex flex-col gap-2 "
        id="projects"
        ref={ref}
      >
        {/* <ToastContainer
          className="w-max text-3xl block p-3 "
          position="bottom-center"
          autoClose={5000}
          hideProgressBar={false}
          newestOnTop={false}
          closeOnClick
          rtl={false}
          pauseOnFocusLoss
          draggable
          pauseOnHover
          theme="light"
        /> */}
        <div
          className="quote-outer-container bg-[--darkblue] -rotate-3 flex justify-center items-center scale-110 pt-32 pb-32 max-lg:pt-16 max-lg:pb-16 max-lg:-ml-44 max-lg:-mr-44 max-lg:scale-100 "
          style={{
            backgroundImage: `url(${bannerBg})`,
            backgroundPosition: "center",
            backgroundSize: "cover",
            backgroundRepeat: "no-repeat",
          }}
        >
          <div className="title-container flex flex-col gap-6 mb-24 rotate-3 justify-between items-center max-lg:w-[100vw]">
            <motion.div
              ref={animationReference}
              style={{
                scale: scaleProgess,
                opacity: opacityProgess,
                textAlign: "center",
              }}
            >
              <p className="text-[--white] mt-16 mb-6">
                <span className="text-[--blue]">&lt;</span>
                Projects
                <span className="text-[--blue]">/&gt;</span>
              </p>
              <h2 className="text-[--white] mb-16">My Projects</h2>
            </motion.div>
            <Swiper
              effect={"cards"}
              grabCursor={true}
              modules={[EffectCards, Autoplay, Pagination]}
              className=" w-[60vw] max-lg:hidden min-[1921px]:px-96"
              loop={true}
              autoplay={{
                delay: 4000,
                disableOnInteraction: true,
                pauseOnMouseEnter: true,
              }}
              pagination={{
                clickable: true,
              }}
            >
              {projectsData.map((project, index: number) => (
                <SwiperSlide
                  key={index}
                  className="quote-outer-container bg-[--darkblue] text-[--white] flex flex-row justify-between  rounded-2xl p-20 text-left max-lg:hidden "
                >
                  <div className=" w-[55%] flex flex-col gap-12 justify-between ">
                    <h2>{project.title}</h2>

                    <p className="text-white">{project.description}</p>
                    <div className="technologies">
                      <h3>Technologies</h3>
                      <div className="grid grid-cols-8 gap-8 p-4">
                        {project.technologies.map(
                          (technology, innerIndex: number) => (
                            <img
                              key={innerIndex}
                              src={technology.icon}
                              alt={`${project.title}-icon`}
                              className="h-[5rem] w-[60%] "
                              data-tooltip-id="my-tooltip"
                              data-tooltip-content={technology.name}
                            />
                          )
                        )}
                      </div>
                    </div>
                    <div className="buttons flex gap-10">
                      <Button
                        label="Github Repository"
                        link={project.githuburl}
                        iconSVG={FiGithub}
                        buttoncolor="main-btn"
                        iconcolor="white"
                      />
                    </div>
                  </div>

                  <div className="right-content mt-20 relative h-[17rem] overflow-hidden rounded-xl w-[40%] transition-all duration-200 shadow-2xl">
                    <img
                      src={project.image}
                      alt={`${project.title}-project-mockup`}
                      className={`w-full h-auto transition-all duration-[5000ms] transform opacity-100 hover:translate-y-[-50%] 
                      `}
                    />
                  </div>
                </SwiperSlide>
              ))}
            </Swiper>
            {projectsData.map((project, index: number) => (
              <article
                key={index}
                className="bg-darkblue flex flex-col gap-10 w-[80%] h-full  border-lightblue border-[0.4rem] p-8 rounded-xl mb-10 min-[1024px]:hidden max-lg:w-[90%]"
              >
                <h2 className="text-white">{project.title}</h2>
                <img
                  src={project.image}
                  alt={project.image}
                  className="h-[35vh] w-full object-cover object-top rounded-3xl"
                />
                <div className="buttons flex gap-10 max-lg:flex-col">
                  <Button
                    label="Github Repository"
                    link={project.githuburl}
                    iconSVG={FiGithub}
                    buttoncolor="main-btn"
                    iconcolor="white"
                  />
                </div>
                <p className="text-white  max-lg:text-4xl">
                  {project.description}
                </p>

                <div className="technologies">
                  <h3 className="text-white">Technologies</h3>
                  <div className="grid grid-cols-3 gap-10 p-4">
                    {project.technologies.map(
                      (technology, innerIndex: number) => (
                        <img
                          key={innerIndex}
                          src={technology.icon}
                          alt={`${project.title}-icon`}
                          className="h-[5rem] w-[60%] "
                          data-tooltip-id="my-tooltip"
                          data-tooltip-content={technology.name}
                        />
                      )
                    )}
                  </div>
                </div>
              </article>
            ))}
          </div>
        </div>
        <LiveTicker />
      </section>
      <ReactTooltip
        place="top"
        id="my-tooltip"
        style={{
          fontSize: "1.5rem",
          backgroundColor: "var(--blue)",
        }}
      />
    </React.Fragment>
  );
};

export default ProjectSlider;
