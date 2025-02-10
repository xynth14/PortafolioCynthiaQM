import React, { useState } from "react";
import Modal from "react-modal";
import heroImg from "../../assets/img/hero/cMarin.jpg";
import heroImgMobile from "../../assets/img/hero/img-mobile.jpg";
import cancelImg from "../../assets/img/cancel.svg";
import heroIconNsJS from "../../assets/img/hero/nestJS.png";
import heroIconMdb from "../../assets/img/hero/mongoDB.png";
import heroIconNxJS from "../../assets/img/hero/nextjs.png";
import heroIconWP from "../../assets/img/hero/WordPress.png";
import heroIconReact from "../../assets/img/hero/react.png";
import heroIconLaravel from "../../assets/img/hero/laravel.png";
import heroIconAngular from "../../assets/img/hero/angular.png";
import heroIconFirebase from "../../assets/img/hero/firebase.png";
import Index from "../../components/about/index";

const heroContent = {
  heroImage: heroImg,
  heroMobileImage: heroImgMobile,
  heroTitleName: "Cynthia Q. Marin",
  heroDesignation: "Developed FullStack",
  heroDescriptions: `Profesional con más de 8 años de experiencia, que con excelente capacidad de organización y conocimientos en el entorno de desarrollo web y aplicaciones móbiles. Capaz de trabajar en equipo y de forma independiente según las necesidades.`,
  heroBtn: "más sobre mí",
  heroIconNsJS: heroIconNsJS,
  heroIconMdb: heroIconMdb,
  heroIconNxJS: heroIconNxJS,  
  heroIconWP: heroIconWP,
  heroIconReact: heroIconReact,
  heroIconLaravel: heroIconLaravel,
  heroIconAngular: heroIconAngular,
  heroIconFirebase: heroIconFirebase,
};

const Hero = () => {
  const [isOpen, setIsOpen] = useState(false);
  function toggleModalOne() {
    setIsOpen(!isOpen);
  }

  return (
    <>
      <div className="row home-details-container align-items-center">
        <div
          className="col-lg-4 bg position-fixed d-none d-lg-block"
          style={{
            backgroundImage: `url(${
              process.env.PUBLIC_URL + heroContent.heroImage
            })`,
          }}
        ></div>
        <div className="col-12 col-lg-8 offset-lg-4 home-details  text-center text-lg-start">
          <div>
            <img
              src={heroContent.heroMobileImage}
              className="img-fluid main-img-mobile d-sm-block d-lg-none"
              alt="hero man"
            />
            <h1 className="text-uppercase poppins-font">
              {heroContent.heroTitleName}.
              <span>{heroContent.heroDesignation}</span>
            </h1>
            <p className="open-sans-font">{heroContent.heroDescriptions}</p>
            <div className="skills">
              <div><img src= {heroContent.heroIconNsJS} alt="" /><span>NestJS</span></div>
              <div><img src= {heroContent.heroIconLaravel} alt="" /><span>Laravel</span></div>
              <div><img src= {heroContent.heroIconReact} alt="" /><span>React</span></div>
              <div><img src= {heroContent.heroIconNxJS} alt="" /><span>Next.JS</span></div>
              <div><img src= {heroContent.heroIconMdb} alt="" /><span>Mongo DB</span></div>
              <div><img src= {heroContent.heroIconWP} alt="" /><span>WordPress</span></div>
            </div>
          </div>
        </div>
      </div>
      {/* End home-details-container */}

      {/* Start Modal for About More */}
      <Modal
        isOpen={isOpen}
        onRequestClose={toggleModalOne}
        contentLabel="My dialog"
        className="custom-modal dark hero"
        overlayClassName="custom-overlay dark"
        closeTimeoutMS={500}
      >
        <div>
          <button className="close-modal" onClick={toggleModalOne}>
            <img src={cancelImg} alt="close icon" />
          </button>
          {/* End close icon */}

          <div className="box_inner about">
            <div data-aos="fade-up" data-aos-duration="1200">
              <div className="title-section text-left text-sm-center">
                <h1>
                  SOBRE <span>MI</span>
                </h1>
                <span className="title-bg">Resumen</span>
              </div>
              {/* End title */}
              <Index />
            </div>
          </div>
        </div>
        {/* End modal box news */}
      </Modal>
      {/* End  Modal for About More */}
    </>
  );
};

export default Hero;
