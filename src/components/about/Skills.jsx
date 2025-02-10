import React from "react";

const skillsContent = [
  { skillClass: "p65", skillPercent: "65", skillName: "NestJS" },
  { skillClass: "p65", skillPercent: "65", skillName: "REACT" },
  { skillClass: "p65", skillPercent: "65", skillName: "NODE JS" },
  { skillClass: "p70", skillPercent: "70", skillName: "EXPRESS" },
  { skillClass: "p80", skillPercent: "80", skillName: "LARAVEL" },
  { skillClass: "p85", skillPercent: "85", skillName: "PHP" },

  { skillClass: "p75", skillPercent: "75", skillName: "APIREST" },
  { skillClass: "p55", skillPercent: "55", skillName: "JAVA ANDROID" },
  { skillClass: "p65", skillPercent: "65", skillName: "TYPESCRIPT" },
  { skillClass: "p75", skillPercent: "75", skillName: "GITHUB" },
  { skillClass: "p75", skillPercent: "75", skillName: "POSTMANT" },

  { skillClass: "p55", skillPercent: "55", skillName: "FIREBASE" },
  { skillClass: "p75", skillPercent: "75", skillName: "SQL SERVER" },
  { skillClass: "p90", skillPercent: "90", skillName: "MySQL" },
  { skillClass: "p55", skillPercent: "55", skillName: "MongoDB" },
  
  { skillClass: "p95", skillPercent: "95", skillName: "CSS3" },
  
  { skillClass: "p99", skillPercent: "99", skillName: "WORDPRESS" },
  { skillClass: "p80", skillPercent: "80", skillName: "PRESTASHOP" },
  { skillClass: "p75", skillPercent: "75", skillName: "JQUERY" }, 

  { skillClass: "p90", skillPercent: "90", skillName: "PHOTOSHOP" },
  { skillClass: "p75", skillPercent: "75", skillName: "ILLUSTRATOR" },
  { skillClass: "p65", skillPercent: "65", skillName: "FIGMA" },
  
];

const Skills = () => {
  return (
    <>
      {skillsContent.map((val, i) => (
        <div className="col-6 col-md-3 mb-3 mb-sm-5" key={i}>
          <div className={`c100 ${val.skillClass}`} >
            <span>{val.skillPercent}%</span>
            <div className="slice" >
              <div className="bar"></div>
              <div className="fill"></div>
            </div>
          </div>
          <h6 className="text-uppercase open-sans-font text-center mt-2 mt-sm-4">
            {val.skillName}
          </h6>
        </div>
      ))}
    </>
  );
};

export default Skills;
