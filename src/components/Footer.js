import { AiFillTwitterSquare, AiFillLinkedin, AiFillGithub } from 'react-icons/ai';

import React from 'react';
import { Link } from 'react-router-dom';
import logo from './planet.png';
import '../styles/footer.css';

const Footer = () => (
  <footer className="footer">
    <div className="footer-container">
      <img src={logo} alt="logo" className="logo-footer" />
      <div className="copyright-names">
        <div className="creators">
          <p>Houssam Hichami</p>
          <div className="icons">
            <Link to="https://github.com/redwing555" target="_blank" rel="noopener noreferrer"><AiFillTwitterSquare className="git fab fa-github-square" /></Link>
            <Link to="https://twitter.com/" target="_blank" rel="noopener noreferrer"><AiFillGithub className="twitter fab fa-twitter-square" /></Link>
            <Link to="https://www.linkedin.com/in/hichami-houssam/" target="_blank" rel="noopener noreferrer"><AiFillLinkedin className="linkedin fab fa-linkedin" /></Link>
          </div>
        </div>
        <div className="creators">
          <p>Francis Ugorji.N.</p>
          <div className="icons">
            <Link to="www.twitter.com" target="_blank" rel="noopener"><AiFillTwitterSquare className="twitter fab fa-twitter-square" /></Link>
            <Link to="https://github.com/Gambit142" target="_blank" rel="noopener noreferrer"><AiFillGithub className="git fab fa-github-square" /></Link>
            <Link to="https://www.linkedin.com/in/francis-ugorji/" target="_blank" rel="noopener noreferrer"><AiFillLinkedin className="linkedin fab fa-linkedin" /></Link>
          </div>
        </div>
      </div>
    </div>
    <hr />
    <small>&#169; Copyright 2021: Houssam. Hichami & Francis Ugorji.N.</small>
  </footer>
);

export default Footer;
