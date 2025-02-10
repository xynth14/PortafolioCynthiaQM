import React from "react";

const educationContent = [
  {
    year: "2017 - 2023",
    degree: "DEVELOPED FULLSTACK",
    institute: "LAIKA COMUNICACIÓN INTEGRAL",
    details: `  Desarrollo de aplicaciones adaptadas a CMS y ECommerce / Trabajo con distintas base de datos MySQL, SQL Server / Posicionamiento y desarrollo de estrategias de marketing web y en buscadores. / Manejo de gestores de contenidos como WordPress y Prestshop. / Desarrollo e implementación de Control administrativo en Angular 12 y  en Laravel 8. / Rediseño sitios web para mejorar la navegación y su atractivo visual. / Diseño y producción de los contenidos de la página para cumplir con los requisitos del proyecto y satisfacer las necesidades del cliente en React. / Creó páginas de destino, paneles de control y aplicaciones web, utilizando lenguajes  de programación PHP y MySQL, funcionales y fáciles de usar. /Configuración de correos corporativos Gmail.`,
  },
  {
    year: "2016 - 2017",
    degree: "DEVELOPED FULLSTACK",
    institute: "PLAY DIGITAL MEDIA",
    details: `Análisis de necesidades, ejecutando el diseño de componentes visuales. / Creación de interfaces de usuario app adaptables. / Automatizaciones y procesos para el desarrollo de Aplicaciones móviles. / Uso de Lenguaje Java Android para desarrollar aplicaciones y colaboración con desarrolladores de Back-End y Diseñadores Web.`,
  },
  {
    year: "2013 - 2015",
    degree: "DEVELOPED .NET ",
    institute: "PLANIVEST SA",
    details: `Analisis y Desarrollo de Sistema de Ventas, Planilla y de Control de Asistencia / Lenguaje de Programación: ASP:NET C# y Base de DAtos SQL Server /  Actualización de su página Web desarrollado en PHP MVC POO y MySQL.`,
  },
];

const Education = () => {
  return (
    <ul>
      {educationContent.map((val, i) => (
        <li key={i}>
          <div className="icon">
            <i className="fa fa-briefcase"></i>
          </div>
          <span className="time open-sans-font text-uppercase">{val.year}</span>
          <h5 className="poppins-font text-uppercase">
            {val.degree}
            <span className="place open-sans-font">{val.institute}</span>
          </h5>
          <p className="open-sans-font">{val.details}</p>
        </li>
      ))}
    </ul>
  );
};

export default Education;
