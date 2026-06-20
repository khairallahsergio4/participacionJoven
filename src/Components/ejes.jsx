  import {
  Users,
  Lightbulb,
  Bus,
  GraduationCap,
  Laptop,
  Trophy,
  Trees,
  Briefcase,
  Building2,
  SquareUserRound,
  Clapperboard,
  Wallet,
  Handshake 
} from "lucide-react";

const ejes = [
    {
      icon: <SquareUserRound  size={40} />,
      titulo: "Liderazgo Joven",
      descripcion:
        `El liderazgo juvenil es la capacidad de inspirar, servir y transformar. Es la fuerza de quienes convierten sus valores en acciones, sus sueños en proyectos y su ejemplo en una oportunidad para que otros también se animen a construir el futuro.`,
      
    },

    {
      icon: <Briefcase size={40} />,
      titulo: "Empleo y Primer Trabajo",
      descripcion:`El acceso al trabajo y al primer empleo representa uno de los principales desafíos que enfrentan los jóvenes en la actualidad. La falta de experiencia laboral, las dificultades para acceder a capacitaciones y la escasa vinculación entre la educación y el mercado de trabajo suelen convertirse en barreras que limitan su desarrollo personal y profesional.
      
      Promover oportunidades laborales para las juventudes implica generar espacios de formación, orientación y acompañamiento que les permitan adquirir herramientas y competencias para desenvolverse en un mundo laboral cada vez más dinámico y competitivo. La capacitación en oficios, habilidades digitales y emprendedurismo resulta fundamental para ampliar sus posibilidades de inserción laboral.

      Asimismo, es importante fortalecer los vínculos entre el sector educativo, el sector productivo y las instituciones públicas, creando programas que faciliten prácticas, pasantías y experiencias de trabajo para quienes buscan dar sus primeros pasos en el ámbito laboral.
      
      Este eje busca impulsar propuestas que fomenten el empleo joven, el desarrollo de emprendimientos y la generación de nuevas oportunidades, entendiendo que el trabajo es una herramienta clave para la autonomía, el crecimiento personal y la construcción de un futuro con mayores posibilidades para todos.`,
     
    },
    {
      icon: <GraduationCap size={40} />,
      titulo: "Educación y Formación Profesional",
      descripcion:`La educación es una temática fundamental en el desarrollo del ser humano. Desde este eje, surgen varias preguntas, necesidades e inquietudes a los que nos proponemos dar respuesta y solución. 
      Son los jóvenes los protagonistas en esta jornada quienes pueden alzar su voz para proponer ideas concretas con el fin de  mejorar y crecer en el área de Educación, estrechamente ligada a la Formación Profesional. Son nuestros jóvenes las personas indicadas para promoverlas y llevarlas a cabo.`,
      
    },

    {
      icon: <Trophy size={40} />,
      titulo: "Deportes y Vida Saludable",
      descripcion:`Buscamos promover la diversidad deportiva y el desarrollo infraestructural general, fomentando la actividad fisica para la prevencion de enfermedades y sedentarismo desde la edad temprana a través del deporte, crear nuevos entes deportivos y ayudar al crecimiento de los ya existentes.`,
      
    },

    {
      icon: <Clapperboard size={40} />,
      titulo: "Cultura y Recreación",
      descripcion:`Vivimos la cultura y desconocemos que nos conecta como personas con su historia, su comunidad y su manera de entender el mundo. También responde a preguntas frecuentes como para qué es la cultura o por qué crees que la cultura es importante para las personas, ya que permite aprender, convivir, expresarse y reconocer el valor de otras realidades, porque aporta conocimiento, identidad y capacidad de comprensión. La cultura no es solo información acumulada: también es una forma de vivir, comunicarse y participar en la sociedad. 
      
      No que obviar en esta circunstancias a la recreación tan importante en el ser humano, dado que proporciona importantes beneficios psicoemocionales, cognitivos, físicos y sociales, tales como la confianza en sí mismos, la capacidad de relacionarse, empatizar y resolver conflictos adecuadamente, así como el desarrollo de la imaginación, la creatividad y la memoria, junto con la concentración y atención. 
      
      Por eso cuando ambas se unen da lugar a un eje relevante, de suprema importancia, la RECREACIÓN CULTURAL, que incentiva, actividades lúdicas, artísticas y de esparcimiento que enriquecen el desarrollo personal y colectivo. Fomenta la identidad, el sentido de pertenencia y fortalece los lazos sociales al combinar el tiempo libre con expresiones tradicionales, folclóricas, pedagógicas o comunitarias, creando Cohesión social, puentes de entendimiento entre grupos y personas de distintas edades, así también el desarrollo integral: Mejorando la salud psicofísica, estimula la creatividad y reduce el estrés, y la más importante, la construcción de identidad: Permitiendo transmitir valores históricos, saberes ancestrales y costumbres locales.`,
      
    },

    {
      icon: <Laptop size={40} />,
      titulo: "Nuevas Tecnologías e Inteligencia Artificial",
      descripcion:
        `Las nuevas tecnologías son las herramientas digitales que transforman la forma en que estudiamos, trabajamos, nos comunicamos, nos movemos por la ciudad y accedemos a los servicios públicos. Cuando hablamos de nuevas tecnologías, hablamos de internet, aplicaciones móviles, inteligencia artificial, robótica, programación, plataformas digitales, conectividad, automatización y todas aquellas innovaciones que pueden mejorar la calidad de vida de las personas.
        
        Hoy la tecnología ya no es algo del futuro: forma parte de nuestra vida cotidiana. Desde pedir un turno médico por una aplicación hasta realizar trámites online, estudiar a distancia o acceder a oportunidades laborales a través de internet.
        
        Sin embargo, no todos los jóvenes tienen las mismas oportunidades de acceso. Existen diferencias entre quienes viven en el centro y quienes viven en los barrios, tanto en conectividad como en acceso a dispositivos, capacitación y oportunidades de desarrollo. 
        
        Por eso, el desafío es pensar cómo la tecnología puede ayudar a construir una ciudad moderna, inclusiva y con más oportunidades para todos. La pregunta que nos convoca es: ¿qué le falta a nuestra ciudad en materia de nuevas tecnologías para mejorar la vida de los jóvenes? 
        
        A partir de esta reflexión, los invitamos a proponer ideas, proyectos y soluciones que puedan transformarse en políticas públicas concretas para los próximos años.`,
      
    },

    {
      icon: <Trees size={40} />,
      titulo: "Medio Ambiente y Sustentabilidad",
      descripcion:
        `El cuidado del medio ambiente y la promoción de prácticas sustentables son desafíos fundamentales para construir comunidades más saludables, responsables y preparadas para el futuro. Los jóvenes tienen un papel clave en la generación de conciencia ambiental y en la implementación de acciones que contribuyan a la protección de los recursos naturales.

La sustentabilidad implica adoptar hábitos y políticas que permitan satisfacer las necesidades actuales sin comprometer las posibilidades de las futuras generaciones. Temas como la gestión de residuos, el reciclaje, el uso responsable del agua y la energía, la forestación y la protección de los espacios verdes son aspectos centrales para el desarrollo de una ciudad más sostenible.

Asimismo, es importante fomentar la educación ambiental y la participación ciudadana, promoviendo iniciativas que involucren a la comunidad en el cuidado del entorno. La innovación y las nuevas tecnologías también pueden convertirse en herramientas valiosas para impulsar soluciones ambientales eficientes y accesibles.

Este eje busca generar propuestas que fortalezcan el compromiso con el ambiente, promuevan hábitos responsables y contribuyan a construir una ciudad más limpia, sustentable y consciente, donde el desarrollo y el cuidado de la naturaleza avancen de manera conjunta.`,
      
    },

    {
      icon: <Building2 size={40} />,
      titulo: "Urbanización y Modernización: Desarrollo de la Ciudad y los Parajes",
      descripcion:
        `La urbanización y la modernización son procesos estratégicos cuyo objetivo es transformar el territorio para ordenar el crecimiento demográfico, optimizar los servicios básicos y potenciar el desarrollo económico, garantizando la equidad y el arraigo de la población. 
        
        Por un lado, la urbanización se caracteriza por ocuparse de la infraestructura física e indispensable, centrándose en la base material como el trazado y pavimentación de calles, el loteo de terrenos y el tendido de redes de agua y cloacas. 
        
        Por el otro, la modernización se define por la innovación y la tecnología, enfocándose en la eficiencia y la sustentabilidad a través de la conectividad digital, la tecnología médica de alta complejidad y los planes de diseño ambiental. 
        
        En el plano local de la Ciudad de Fernandez estos conceptos se aplican de forma directa y complementaria según las necesidades de cada zona.`,
      
    },

        {
      icon: <Wallet size={40} />,
      titulo: "Desarrollo Local",
      descripcion:
`1.	¿Qué es el desarrollo local?
      Es la organización del territorio a travez de proyectos poniendo en valor los recursos (económicos, sociales, culturales) de la comunidad.

2.	Económicos:                                          
      •	Promueve la diversificación.                           
      •	Fortalece los emprendimientos.      
      •	Visibiliza las actividades locales. 

    Socioculturales:
      •	Satisfacción de las necesidades. 
      •	Inclusión y la representación de la identidad territorial.
    Ambiental:
      •	Garantizar la sustentabilidad, el uso responsable de los recursos del territorio.

3.	Actores 
	Gobiernos locales y articulación. 
	Emprendedores (producción y empleo). 
	Institución. 

4.	Actividad
	Identificación de fortaleza y debilidades, oportunidades y amenazas en el territorio: Ciudad de Fernández (FODA).
	Diseño de la propuesta de mejoramiento de nuestra ciudad impulsando el desarrollo territorial.

¿COMO? 
	Movilizando los recursos (económicos, sociales, culturales) para mejorar la vida de los habitantes y promoviendo la participación ciudadana.`,
      
    },

        {
      icon: <Handshake  size={40} />,
      titulo: "Voluntariado y acción solidaria",
      descripcion:`El voluntariado es una forma de participación social mediante la cual las personas ofrecen su tiempo, conocimientos y esfuerzo de manera libre, responsable y desinteresada para colaborar con quienes necesitan ayuda o para mejorar la comunidad. 
      
      La acción solidaria es toda actividad realizada con el propósito de ayudar a otras personas, promover el bienestar común y contribuir a la solución de problemas sociales, ambientales o comunitarios. Se basa en el compromiso con los demás y en la búsqueda de una sociedad más justa e igualitaria. 
      
      El voluntariado como herramienta de transformación social. A lo largo de la historia, el voluntariado ha desempeñado un papel fundamental en la construcción de comunidades más fuertes y solidarias. Muchas organizaciones sociales, instituciones educativas, hospitales, comedores comunitarios y entidades de ayuda humanitaria funcionan gracias al trabajo voluntario de miles de personas comprometidas. 
      
      El voluntariado no solo beneficia a quienes reciben la ayuda, sino también a quienes la brindan, ya que permite desarrollar valores, adquirir experiencias, fortalecer habilidades y generar vínculos con otras personas.`,
      
    },
  ];

  export default ejes;

