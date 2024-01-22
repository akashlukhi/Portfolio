// @ts-nocheck
import React, { lazy, Suspense } from "react";
import { Link } from "react-router-dom";
import { useTheme } from "../context/theme-context";
import { FiGithub, FiLinkedin, FiMail } from "react-icons/fi";
import { sideBarLeftSocials } from "./SiteBarLeft";
import Popup from "reactjs-popup";
import { VscChromeClose } from "react-icons/vsc";

interface SocialLink {
  link: string;
  icon: string | React.FC<{ className: string }>;
  strokeColor?: string;
  altimgname: string;
  iconcolor?: string;
}

const Footer: React.FC = () => {
  const { theme } = useTheme();

  return (
    <footer className="bg-darkblue flex justify-around items-center gap-10 p-10 max-lg:flex-col max-lg:pb-48 relative z-[1]">
      <div className="text-3xl text-center">©2023 Copyright: Akash Lukhi</div>
      <div className="socials flex gap-10 ">
        {sideBarLeftSocials.map((social: SocialLink, index: number) => (
          <Link
            to={social.link}
            className="block"
            key={index}
            target="_blank"
            rel="noopener noreferrer"
            aria-current={
              social.altimgname === "true"
                ? social.altimgname + " button"
                : social.altimgname + " button"
            }
          >
            {typeof social.icon === "function" ? (
              <social.icon className={`stroke-blue`} />
            ) : (
              <img
                src={social.icon}
                alt={social.altimgname}
                style={{ stroke: social.iconcolor || "" }}
              />
            )}
          </Link>
        ))}
      </div>
    </footer>
  );
};

export default Footer;
