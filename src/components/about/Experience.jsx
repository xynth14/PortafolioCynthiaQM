import React from "react";

const experienceContent = [
  {
    year: "   2024 - Freelance",
    position: " Web FullStack",
    compnayName: "JC Fabico SAC",
    details: `  Diseño y programación de páginas Web en WordPress / Posicionamiento y desarrollo de estrategias de Marketing Web, SEO  y busqueda / Reunió, definió y transformó los requisitos del cliente en tareas procesables. / Configuración de correos corporativos Gmail.`,
  },
  {
    year: "   2024 - Freelance",
    position: " Web FullStack",
    compnayName: "JC Fabico SAC",
    details: `  Desarrollo Web Sorteo con Administrador/ Lenguaje ASP.NET C# API, ANGULAR Y SQL SERVER / Módulo de pago con OpenPay. / Compras de Tickets sin limites para el usuario / Venta de Productos relacionados a los premios que tiene los Tickets comprados. / Envio de correo al vendedor con el detalle de su compra y un Código QR donde direcciona al mismo. / Configuración de correos corporativos Gmail.`,
  },
  {
    year: "   2024 - Freelance",
    position: " Web FullStack",
    compnayName: "Cip Maestros EIRL",
    details: `  Rediseño de su página web para mejorar la navegación y su atractivo visual en WordPress / Instalación y configuración del plugin E-Learning / Configuracion método de pago / Permisos de Usuarios para el Profesor y alumnos / ChatBot WhatsApp con la API / Desarrollo y Programación sistema interno para el área de Ventas y Marketing con Laravel, Boostrap, MySql. / Posicionamiento SEO y busqueda / Creación de Campañas pagadas para conseguir Leads en Meta Bussiness / Exportación e importación de Leads al Sistema Web / Compartir Copys de manera Orgánica en las redes Sociales. / Configuración de correos corporativos Gmail.`,
  },
];

const Experience = () => {
  return (
    <ul>
      {experienceContent.map((val, i) => (
        <li key={i}>
          <div className="icon">
            <i className="fa fa-briefcase"></i>
          </div>
          <span className="time open-sans-font text-uppercase">{val.year}</span>
          <h5 className="poppins-font text-uppercase">
            {val.position}
            <span className="place open-sans-font">{val.compnayName}</span>
          </h5>
          <p className="open-sans-font">{val.details}</p>
        </li>
      ))}
    </ul>
  );
};

export default Experience;
