import React from "react";

const personalInfoContent = [
  { meta: "Nombre", metaInfo: "Cynthia" },
  { meta: "Apellidos", metaInfo: "Quispe Marin" },
  { meta: "Edad", metaInfo: "36 años" },
  { meta: "Nacionalidad", metaInfo: "Peruana" },
  /*{ meta: "Freelance", metaInfo: "Available" },
  { meta: "Address", metaInfo: "Tunis" },*/
  { meta: "Celular", metaInfo: "+51 902669524" },
  { meta: "Email", metaInfo: "cyn19870@gmail.com" },
  /*{ meta: "Skype", metaInfo: " steve.milner" },*/
  { meta: "Idioma", metaInfo: "Español" },
];

const PersonalInfo = () => {
  return (
    <ul className="about-list list-unstyled open-sans-font">
      {personalInfoContent.map((val, i) => (
        <li key={i}>
          <span className="title">{val.meta}: </span>
          <span className="value d-block d-sm-inline-block d-lg-block d-xl-inline-block">
            {val.metaInfo}
          </span>
        </li>
      ))}
    </ul>
  );
};

export default PersonalInfo;
