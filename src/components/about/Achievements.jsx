import React from "react";

const achievementsContent = [
  { title: "IDAT", subTitle1: "COMPUTACIÓN E INFORMÁTICA", subTitle2: "2006 - 2009" },
  { title: "UTP", subTitle1: "ING. DE SISTEMAS", subTitle2: "2013" },
  { title: "U-CAMP", subTitle1: "DEVELOPED FULL STACK", subTitle2: "2021" },
  { title: "UDAVINCI", subTitle1: "ING. DE SOFTWARE ", subTitle2: "2025" },
];

const Achievements = () => {
  return (
    <div className="row">
      {achievementsContent.map((val, i) => (
        <div className="col-6" key={i}>
          <div className="box-stats with-margin">
            <h3 className="poppins-font position-relative">{val.title}</h3>
            <p className="open-sans-font m-0 position-relative text-uppercase">
              {val.subTitle1} <span className="d-block">{val.subTitle2}</span>
            </p>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Achievements;
