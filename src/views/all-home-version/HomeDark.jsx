import React from "react";
import { Tab, Tabs, TabList, TabPanel } from "react-tabs";
import Hero from "../../components/hero/Hero";
import Index from "../../components/about/index";
import Address from "../../components/Address";
import Portfolio from "../../components/portfolio/Portfolio";
import Blog from "../../components/blog/Blog";
import Contact from "../../components/Contact";
import Social from "../../components/Social";
import SwitchDark from "../../components/switch/SwitchDark";

const menuItem = [
  { icon: "fa-home", menuName: "Inicio" },
  { icon: "fa-user", menuName: "Sobre Mi" },
  { icon: "fa-briefcase", menuName: "Portafolio" },
  { icon: "fa-envelope-open", menuName: "Contacto" },
  { icon: "fa-comments", menuName: "Blog" },
];

const HomeDark = () => {
  document.querySelector("body").classList.remove("rtl");

  return (
    <div className="yellow">
      <SwitchDark />
      {/* End Switcher */}
      <Tabs>
        <div className="header">
          <TabList className=" icon-menu  revealator-slideup revealator-once revealator-delay1">
            {menuItem.map((item, i) => (
              <Tab className="icon-box" key={i}>
                <i className={`fa ${item.icon}`}></i>
                <h2>{item.menuName}</h2>
              </Tab>
            ))}
          </TabList>
        </div>
        {/* End Menu Content */}

        <div className="tab-panel_list">
          {/* Hero Content Starts */}
          <TabPanel className="home ">
            <div
              className="container-fluid main-container container-home p-0 "
              data-aos="fade-up"
              data-aos-duration="1200"
            >
              <div className="color-block d-none d-lg-block"></div>
              <Hero />
            </div>
          </TabPanel>
          {/* Hero Content Ends */}

          {/* About Content Starts */}
          <TabPanel className="about">
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
          </TabPanel>
          {/* About Content Ends */}

          {/* Portfolio Content Starts */}
          <TabPanel className="portfolio professional">
            <div
              className="title-section text-left text-sm-center"
              data-aos="fade-up"
              data-aos-duration="1200"
            >
              <h1>
                Mi <span>Portafolio</span>
              </h1>
              <span className="title-bg">trabajos</span>
            </div>
            {/* End title */}
            <Portfolio />
          </TabPanel>
          {/* Portfolio Content Ends */}

          {/* Contact Content Starts */}
          <TabPanel className="contact">
            <div
              className="title-section text-left text-sm-center"
              data-aos="fade-up"
              data-aos-duration="1200"
            >
              <h1>
                conmigo <span>ahora</span>
              </h1>
              <span className="title-bg">CONTÁCTESE</span>
            </div>
            <div
              className="container"
              data-aos="fade-up"
              data-aos-duration="1200"
            >
              <div className="row justify-content-md-center">
                {/*  Left Side Starts */}
                <div className="col-12 col-lg-10 col-md-12">
                  <h3 className="text-uppercase custom-title mb-0 ft-wt-600 pb-3 ">
                    Ten en cuenta !
                  </h3>
                  <p className="open-sans-font mb-4">
                    No dudes en ponerte en contacto conmigo.<br></br>Siempre estoy abierto a
                    discutir nuevos proyectos, ideas creativas u oportunidades para
                    ser parte de tus visiones.
                  </p>
                  <Address />
                  {/* End Address */}

                </div>
                {/* Left Side Ends */}

              </div>
            </div>
            {/* End .container */}
          </TabPanel>
          {/* Contact Content Ends */}

          {/* Blog Content Starts */}
          <TabPanel className="blog">
            <div
              className="title-section text-left text-sm-center "
              data-aos="fade-up"
              data-aos-duration="1200"
            >
              <h1>
                Mi <span>BLOG</span>
              </h1>
              <span className="title-bg">POSTS</span>
            </div>
            <div
              className="container"
              data-aos="fade-up"
              data-aos-duration="1200"
            >
              {/*  Articles Starts  */}
              <div className="row pb-50">
                <Blog />
              </div>
              {/* Articles Ends */}
            </div>
          </TabPanel>
          {/* Blog Content Ends */}
        </div>
      </Tabs>
    </div>
  );
};

export default HomeDark;
