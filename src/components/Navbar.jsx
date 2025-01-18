import logo from "../assets/logo.jpg";
import React from 'react';
import { FaLinkedin, FaPhoneAlt } from "react-icons/fa";
import { FaGithub } from "react-icons/fa";
import { SiGmail, SiLeetcode } from "react-icons/si";
import { SiCodechef } from "react-icons/si";


const Navbar = () => {
  return <nav className="mb-8 flex items-center justify-between py-6 -mt-8">
    <div className="flex flex-shrink-0 items-center">
        <img className="mx-2 w-10" src={logo} alt="logo" />
    </div>
    <div className="m-8 flex items-center justify-center gap-4 text-2xl">
        <a href="https://www.linkedin.com/in/ankit-sisodya/" target="_blank">
          <FaLinkedin />
        </a>
        <a href="https://github.com/Ankitsinghsisodya" target="_blank">
          <FaGithub />
        </a>
        <a href="https://leetcode.com/u/Ankit_singh_sisodya/" target="_blank">
          <SiLeetcode />
        </a>
        <a href="https://www.codechef.com/users/ankitsisodya" target="_blank">
          <SiCodechef/>
        </a>
        <a href="mailto:ankitsingh24012005@gmail.com" target="_blank">
          <SiGmail/>
        </a>
        <a href="tel:+917667144864" target="_blank">
          <FaPhoneAlt/>
        </a>
    </div>
  </nav>
}

export default Navbar