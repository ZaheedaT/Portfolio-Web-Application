import React, { useContext } from 'react';
import Githubcomp from '../FooterInterface/Githubcomp';
import { ServiceContext } from '../../../ServiceContext';
import './ProjHome.css';

const ProjHome = () => {
  const { imageStyle } = useContext(ServiceContext);
  return (
    <>
      <div className="proj_containar_section">
        <div className="proj_left">
          <h3>Projects & Experiences</h3>
          <p>
            You can find all of my projects on my profile on Github. You can
            view my activities, contributions and code on these projects. Some
            of these are completed and some are in progress. You can also leave
            comments on the profile and start a discussion. I am always looking
            for new projects and Ideas. You can also reach out to me on any of
            the social media channels mentioned below.
          </p>
          <Githubcomp
            backgroundColor="#512da8"
            shadow="#482e87 0px 0px 9px"
            href="https://github.com/ganraj21/Portfolio-Web-Application"
          />
        </div>
        <div className="proj_right">
          <img src={imageStyle?.globalImages?.proj_img} alt="Project Img" />
        </div>
      </div>
    </>
  );
};

export default ProjHome;