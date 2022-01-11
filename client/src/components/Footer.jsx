import React from "react";

import logo from "../../images/logo.png";
import {AiFillLinkedin, AiFillInstagram, AiFillGithub} from 'react-icons/ai' ;


const Footer = () => (
  <div className="w-full flex md:justify-center justify-between items-center flex-col p-4 gradient-bg-footer">
    <div className="w-full flex sm:flex-row flex-col justify-between items-center my-4">
      <div className="flex flex-[0.5] justify-center items-center">
        <img src={logo} alt="logo" className="w-32" />
      </div>
      <div className="flex flex-1 justify-evenly items-center flex-wrap sm:mt-0 mt-5 w-full">
        <p className="text-white text-base text-center mx-2 cursor-pointer">Market</p>
        <p className="text-white text-base text-center mx-2 cursor-pointer">Exchange</p>
        <p className="text-white text-base text-center mx-2 cursor-pointer">Tutorials</p>
        <p className="text-white text-base text-center mx-2 cursor-pointer">Wallets</p>
      </div>
    </div>

    <div className="flex justify-center items-center flex-col mt-5">
      <p className="text-white text-sm text-center">Join us and help us grow!</p>
      <p className="text-white text-sm text-center font-medium mt-2">achrafrachek1@gmail.com</p>
    </div>

    <div className="sm:w-[90%] w-full h-[0.25px] bg-gray-400 mt-5 " />

    <div className="sm:w-[90%] w-full flex justify-center items-center mt-3">
      <a href="https://www.linkedin.com/in/achraf-rachek-b710431b8/" className="text-2xl text-white">
        <AiFillLinkedin /> 
      </a>
      <a href="https://www.instagram.com/achrafrachek/" className="text-white text-left text-2xl px-3">
        <AiFillInstagram /> 
      </a>
      <a href="https://github.com/achrafrachek" className="text-white text-left text-2xl">
        <AiFillGithub /> 
      </a>
    </div>
  </div>
);

export default Footer;
