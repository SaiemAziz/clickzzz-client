import React from 'react';
import { BsLinkedin } from 'react-icons/bs';
import logo from '../images/logo.jpg'

const Footer = () => {
    return (
        <footer className="footer p-10 text-white bg-[#232426] flex justify-evenly items-center">
  <div>
    <img className='w-2/3' src={logo} alt="" />
    <p className='w-2/3 text-right'>Clickzzz Ltd.<br/>Providing reliable pictures 2010</p>
  </div> 
  <div>
    <span className="footer-title">Social</span> 
    <div className="grid grid-flow-col gap-4">
      <a target={'_blank'} rel="noreferrer" href='https://www.linkedin.com/in/md-abu-saiem-aziz-chowdhury-9b7217247/'><BsLinkedin className='text-2xl'/></a> 
      <a target={'_blank'} rel="noreferrer" href='https://www.facebook.com/sayem.azizchowdhury.3/'><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" className="fill-current"><path d="M9 8h-3v4h3v12h5v-12h3.642l.358-4h-4v-1.667c0-.955.192-1.333 1.115-1.333h2.885v-5h-3.808c-3.596 0-5.192 1.583-5.192 4.615v3.385z"></path></svg></a>
    </div>
  </div>
</footer>
    );
};

export default Footer;