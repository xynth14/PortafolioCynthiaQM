import { useState } from "react";
import img1 from "../assets/img/blog/blog-post-1.jpg";
import img2 from "../assets/img/blog/blog-post-2.jpg";
import img3 from "../assets/img/blog/blog-post-3.jpg";
import img4 from "../assets/img/blog/blog-post-4.jpg";
import img5 from "../assets/img/blog/blog-post-5.jpg";
import img6 from "../assets/img/blog/blog-post-6.jpg";

const AllBlogData = () => {
  const blogsData = [
    {
      id: 1,
      img: img1,
      title: "Importancia de tener una página web a medida",
      commentor: "admin ",
      date: "16 Junio 2024",
      tag: `wordpress, php, javascript, css3, design`,
      description1:
        "Cada vez es más importante para las empresas, independientemente de su tamaño y del sector en el que operan, tener presencia en internet. Se puede decir que, uno de sus requisitos es contar con una web corporativa que otorgue valor, muestre una imagen positiva de su marca y genere confianza en el usuario.",
      description2:
        "Hoy te hablaremos sobre las ventajas de este tipo de diseño web y por qué puede ser la mejor opción para tu negocio. ",
      description3:
        "1. Web única y original: ",
      description3_1:
        "Obtendrás muchas ventajas frente al diseño web tradicional, ya que permite al usuario ver el contenido con una experiencia de usuario más agradable y sencilla, lo que redundará en tiempos de permanencia más altos  y mejor experiencia de usuario. Además, podrás añadir funcionalidades distintas a lo que se ve normalmente, lo que te ayudará a crear ese valor diferencial respecto a tu competencia.",
      description4:
        "2. Optimización en buscadores:",
      description4_1:
        "Esto trae beneficios en cuanto a posicionamiento SEO se refiere, no solo por su velocidad de carga, sino por la experiencia de usuario. Y es que a diferencia de algunos plugin, un desarrollo a medida suele hacer uso únicamente del código y estilos necesarios, por lo que son más sencillos y por tanto, más eficiente.",
      description5:
        "3. Mayor velocidad de carga:",  
      description5_1:
        "Esta es una de las características más importantes actualmente para el algoritmo de Google al momento de posicionar una web.",
      description6:
        "4.  Diseño ajustado a tus necesidades y objetivos:", 
      description6_1:
        "Cada proyecto presenta una serie de necesidades, algunas muy específicas como animaciones, formularios, áreas de clientes, tienda online… Este tipo de desarrollo web te permite implementar todo tipo de acciones y funcionalidades de manera elegante y sin ser disonante con el resto del estilo de tu página.", 
      description7:
        "5.  Mayor seguridad para tu web:", 
      description7_1:
        "Es importante que tengas en cuenta que un diseño web a medida requiere una inversión de tiempo y recursos mayor a la de una plantilla. Sin embargo si tu objetivo es tener un sitio web sólido, robusto y a pruebas de balas, esta es la decisión más acertada.", 
    },
    {
      id: 2,
      img: img2,
      title: "5 Formas de Usar Chat GPT para Aprender a Programar",
      commentor: "admin ",
      date: "14 Junio 2024",
      tag: `Chat GPT, php, JavaScript`,
      description1:
        "Chat GPT es un recurso increíble para cualquier persona que esté aprendiendo a programar. Aquí hay 5 formas en que puede usarlo para aprender a programar.",
      description2:
        "ChatGPT puede ser una herramienta útil para aprender a programar de varias maneras:",
      description3:
        "1. Generando código: ",
      description3_1:
        "Puedes pedirle a ChatGPT que genere código para realizar una tarea específica.Esto puede ayudarte a aprender la sintaxis de un lenguaje de programación y cómo escribir código que funcione. Puedes usar el código generado por ChatGPT como punto de partida y modificarlo para adaptarlo a tus necesidades.",
      description4:
        "2. Depurando código: ",
      description4_1:
        "Puedes pedirle a ChatGPT que te ayude a depurar código que no funciona correctamente. ChatGPT puede ayudarte a identificar errores en tu código y sugerirte cómo corregirlos.",
      description5:
        "3. Explicando conceptos de programación: ",
      description5_1:
        "Puedes pedirle a ChatGPT que te explique conceptos de programación que no entiendes. ChatGPT puede proporcionarte explicaciones claras y concisas de conceptos de programación.",
      description6:
        "4. Generando pruebas: ",
      description6_1:
        "Puedes pedirle a ChatGPT que genere pruebas para tu código. Esto te puede ayudar a asegurarte de que tu código funciona correctamente.",
      description7:
        "5. Ayudándote a aprender nuevos lenguajes de programación: ",
      description7_1:
        "Puedes pedirle a ChatGPT que te ayude a aprender un nuevo lenguaje de programación. ChatGPT puede proporcionarte información sobre la sintaxis del lenguaje de programación y cómo escribir código en ese lenguaje.",
    },
    {
      id: 3,
      img: img3,
      title: "Aprender a programar con React",
      commentor: "admin ",
      date: "12 Junio 2024",
      tag: `React, JavaScript, HTML, CSS`,
      description1:
        "Aprender a programar es una emocionante aventura que puede abrir un mundo de oportunidades en el desarrollo web. En la actualidad, hay muchas tecnologías y frameworks disponibles, pero uno que ha ganado gran popularidad es React. ",
      description2:
        "En este artículo, exploraremos el camino para aprender a programar utilizando React y cómo esta biblioteca JavaScript puede ayudarte a construir aplicaciones web modernas y dinámicas. ",
        description3:
        "1. Fundamentos de JavaScript, HTML y CSS: ",
      description3_1:
        "Aprender los conceptos básicos de JavaScript te permitirá comprender mejor cómo funciona React y cómo aprovechar al máximo sus características. Algunos temas importantes a dominar incluyen variables, funciones, objetos, bucles y manipulación del DOM. Asegúrate de conocer los elementos y atributos básicos de HTML y cómo aplicar estilos utilizando CSS para crear interfaces atractivas y responsivas.",
      description4:
        "2. Introducción a React: ",
      description4_1:
        "Una vez que tengas una base sólida en JavaScript, puedes comenzar a aprender React. Comienza con una introducción a los conceptos principales de React, como componentes, estados, propiedades y ciclo de vida. Explora cómo React simplifica el desarrollo de interfaces de usuario y cómo se diferencia de otras bibliotecas y frameworks.",
      description5:
        "3. Trabajar con APIs: ",
      description5_1:
        "La mayoría de las aplicaciones web modernas interactúan con servicios y API para obtener datos. Aprende cómo realizar solicitudes HTTP utilizando bibliotecas como Axios o el propio Fetch API de JavaScript. Descubre cómo integrar datos externos en tus aplicaciones React y cómo mostrarlos de manera dinámica en tu interfaz de usuario.",
      description6:
        "4. Desarrollo de Componentes Reutilizables: ",
      description6_1:
        "Una de las ventajas de React es su enfoque en la reutilización de componentes. Aprende cómo crear componentes reutilizables que te permitan construir interfaces de usuario de manera eficiente y mantener un código limpio y modular. Explora buenas prácticas para la estructura y organización de tus componentes.",
      description7:
        "5. Pruebas Unitarias en React: ",
      description7_1:
        "Asegurarse de que tu código funcione correctamente es esencial en el desarrollo web. Aprende a escribir pruebas unitarias utilizando herramientas como Jest y React Testing Library. Descubre cómo realizar pruebas efectivas en tus componentes React para garantizar que tu aplicación funcione sin problemas.",
    },
    {
      id: 4,
      img: img4,
      title: "Qué es DevOps y para qué sirve",
      commentor: "Beker ",
      date: "8 Junio 2024",
      tag: `desarrollo software, TI`,
      description1:
        "Se denomina DevOps a la metodología que busca la integración fluida entre el desarrollo de software (Dev) y las operaciones de TI (Ops) con el objetivo de mejorar la colaboración, eficiencia y calidad en el ciclo de vida del desarrollo de software. Adicionalmente, en aquellos ámbitos en los que la seguridad adquiere un papel crítico, se amplía el alcance del término a DevSecOps.",
      description2:
        "Para lograr estos objetivos, DevOps se apoya en prácticas como la integración continua (CI), entrega continua (CD), automatización de pruebas, gestión de configuración, lo que requiere un cambio cultural y la adopción de herramientas apropiadas para una correcta implementación.",
      description3:
        "Por qué DevOps es tan importante: ",
      description3_1:
        "Con DevOps se optimiza el proceso de desarrollo de software, desde la escritura del código hasta la entrega al usuario final, mejorando la velocidad, la calidad, lo que es crucial en un entorno tecnológico altamente competitivo y en constante evolución.",
      description4:
        "Metodologías DevOps: ",
      description4_1:
        "Existen varias metodologías y prácticas asociadas con DevOps que se utilizan para implementar sus principios. A continuación, detallamos algunas de las metodologías y prácticas más comunes dentro del contexto de DevOps: Integración continua (CI), Entrega continua (CD), Gestión de la configuración, Microservicios, Monitorización y retroalimentación continua y Cultura de colaboración.",
      description5:
        "Qué no es DevOps: ",
      description5_1:
        "DevOps está enfocado a acercar el mundo de los desarrolladores y los administradores de sistemas, con un conjunto de mejores prácticas para la producción de aplicaciones en la nube, orientadas a la integración continua y la liberación frecuente del código. Pero también es importante saber distinguir lo que no es: No es un puesto de trabajo, o un rol específico, No es una categoría de herramientas, No es sinónimo de integración continua, No es simplemente un término de moda. ",
      description6:
        "Integración continua: ",
      description6_1:
        "La integración continua —Continuous Integration (CI)— es el proceso que permite la integración del nuevo código generado de manera individual por los desarrolladores en un repositorio común.",
      description7:
        "Beneficios del uso de metodologías y prácticas DevOps en empresas: ",
      description7_1:
        "El uso de metodologías y prácticas DevOps en las empresas puede proporcionar beneficios significativos, que incluyen: Entrega de software más rápida, Mayor calidad del software, Mejora en la colaboración y comunicación, Mayor eficiencia y reducción de errores, Mayor flexibilidad y adaptabilidad, Reducción del tiempo de inactividad, Mejora en la experiencia del usuario, Cultura de innovación y mejora continua.",
    },
    {
      id: 5,
      img: img5,
      title: "¿Qué es una web app, quiénes las desarrollan y cómo?",
      commentor: "admin ",
      date: "8 Junio 2024",
      tag: `app, amdroid, web services`,
      description1:
        "Una web app (aplicación web) es una aplicación de software que se ejecuta en un navegador web y se puede acceder a través de Internet. A diferencia de las aplicaciones de escritorio, que se instalan en una computadora y solo se pueden utilizar en esa computadora, las aplicaciones web se pueden utilizar en cualquier dispositivo con un navegador web y acceso a Internet.",
      description2:
        "Una web app (aplicación web) es una aplicación de software que se ejecuta en un navegador web y se puede acceder a través de Internet. A diferencia de las aplicaciones de escritorio, que se instalan en una computadora y solo se pueden utilizar en esa computadora, las aplicaciones web se pueden utilizar en cualquier dispositivo con un navegador web y acceso a Internet. ",
      description3:
        "Muchas web apps son ampliamente utilizadas, entre ellas encontramos a Gmail, a Google Drive, a Microsoft 365, a Facebook o a Netflix.",
      description4:
        "Los desarrolladores de aplicaciones web son profesionales que crean y mantienen aplicaciones web utilizando diferentes tecnologías y lenguajes de programación. Estos profesionales trabajan en equipo con diseñadores de interfaz de usuario y especialistas en marketing para crear aplicaciones web atractivas y fáciles de usar que cumplan con las necesidades de los usuarios y los objetivos de la empresa.",
    },
    {
      id: 6,
      img: img6,
      title: "¿Qué es CMS y cuál es su función?",
      commentor: "admin ",
      date: "6 Junio 2024",
      tag: `WordPress, Prestashop`,
      description1:
        "CMS es un sistema de gestión de contenidos, es decir, un software que ayuda a crear, colaborar, publicar, actualizar y almacenar el contenido de un sitio o portal web.",
      description2:
        "Actualmente, con la aceleración de la transformación digital, la tecnología está cada vez más presente en el día a día de todos. Por eso, es primordial que una empresa tenga un sitio web para aumentar su visibilidad en el mundo digital.",
      description3:
        "¿Qué es un Sistema de Gestión de Contenidos (CMS)?",
      description3_1:
        "Un Sistema de Gestión de Contenido, conocido como CMS por su denominación en inglés Content Management System, es un software que facilita la creación, edición, colaboración, publicación y almacenamiento del contenido de tu sitio o portal web. Una plataforma de gestión de contenido te permite crear un sitio web de forma rápida y práctica sin la necesidad de entender de programación.",
      description4:
        "¿Cuáles son las características del CMS?",
      description4_1:
        "Creación y publicación de páginas web a través de procedimientos sencillos. / Actualización y edición de textos y códigos de sitios web. / Instalación de extensiones y plugins para aumentar las funcionalidades del sitio web. / Bibliotecas de medios para almacenar el material audiovisual que se utilizará en el sitio web. / Gestión de flujos de trabajo que permiten asignar diversas funciones como autores, editores, traductores, administradores, etc. / Panel de administración con soporte en distintos idiomas. / URL amigables para SEO. / Moderación de comentarios. / Integración con otros software.  / Escalabilidad.",
      description5:
        "¿Cómo funciona el CMS? ",
      description5_1:
        "Para crear un contenido y publicarlo en Internet desde cero, es necesario escribir un archivo utilizando los lenguajes de programación adecuados y después subirlo al servidor. Sin embargo, cuando se cuenta con una plataforma que incluye recursos de CMS, es posible que cualquier persona sin conocimientos de programación pueda aprovechar su interfaz. ",
      description6:
        "¿Qué tipos de sitios web pueden crear estos sistemas? ",
      description6_1:
        "Con una plataforma de gestión de contenido (CMS), es posible crear y gestionar el contenido en diversos tipos de sitios web, dependiendo de las necesidades. A continuación, veremos algunos ejemplos: Blog, Sitios web estáticos, Portales de contenido, Tiendas online, Redes sociales, Foros, Cursos online, Entre otros",
      description7:
        "¿Cuáles son los beneficios de un Sistema de Gestión de Contenidos? ",
      description7_1:
        "Es fácil de usar / Permite administrar el contenido con facilidad / Proporciona acceso desde cualquier lugar / Facilita la búsqueda de la información / Promueve la colaboración / Provee actualizaciones en tiempo real / Contribuye con el buen posicionamiento web.",
    },
  ];

  const [singleData, setSingleData] = useState({});
  const [isOpen, setIsOpen] = useState(false);

  const handleBlogsData = (id) => {
    const find = blogsData.find((item) => item?.id === id);
    setSingleData(find);
    setIsOpen(true);
  };

  return {
    singleData,
    isOpen,
    setIsOpen,
    blogsData,
    handleBlogsData,
  };
};

export default AllBlogData;
