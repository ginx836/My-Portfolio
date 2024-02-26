import { Mail, MapPin, Phone } from "lucide-react";

export const navLinks = [
  {
    label: "Accueil",
    url: "/",
  },
  {
    label: "A propos",
    url: "/about",
  },
  {
    label: "Réalisations",
    url: "/portfolio",
  },
];
export const skills = [
  {
    id: 1,
    name: "Développement Front-end",
    description:
      "Coder l'aspect visuel de votre site pour assurer une expérience attractive et sans accroc.",
    icon: "/icons/file-code-2.svg",
  },
  {
    id: 2,
    name: "UI / UX Design",
    description:
      "Créer une interface utilisateur intuitive et conviviale pour un site web ou une application. Améliorer l'expérience utilisateur pour un impact positif sur votre audience.",
    icon: "/icons/swatch-book.svg",
  },
  {
    id: 3,
    name: "Accessibilité et SEO",
    description:
      "Mettre en place les bonnes pratiques en matière d'accessibilité pour booster votre site web.\nAméliorer la visibilité de votre site sur les moteurs de recherche grâce à une optimisation SEO.",
    icon: "/icons/user.svg",
  },
];

export const portfolios = [
  {
    id: 1,
    title: "Z - Aura Perfume Website",
    link: "#",
    images: [
      "/images/portfolio-1.png",
      "/images/portfolio-2.png",
      "/images/portfolio-3.png",
    ],
  },
  {
    id: 2,
    title: "Forhelp Charity Website",
    link: "#",
    images: [
      "/images/portfolio-2.png",
      "/images/portfolio-3.png",
      "/images/portfolio-1.png",
    ],
  },
  {
    id: 3,
    title: "Skill Bridge Website",
    link: "#",
    images: [
      "/images/portfolio-3.png",
      "/images/portfolio-1.png",
      "/images/portfolio-2.png",
    ],
  },
  {
    id: 4,
    title: "Current Vandi Website",
    link: "#",
    images: [
      "/images/portfolio-4.png",
      "/images/portfolio-5.png",
      "/images/portfolio-6.png",
    ],
  },
  {
    id: 5,
    title: "Fit Fusion Gym Website",
    link: "#",
    images: [
      "/images/portfolio-5.png",
      "/images/portfolio-6.png",
      "/images/portfolio-7.png",
    ],
  },
  {
    id: 6,
    title: "DX Digital Agency Website",
    link: "#",
    images: [
      "/images/portfolio-6.png",
      "/images/portfolio-7.png",
      "/images/portfolio-8.png",
    ],
  },
  {
    id: 7,
    title: "Little Learners Website",
    link: "#",
    images: [
      "/images/portfolio-7.png",
      "/images/portfolio-8.png",
      "/images/portfolio-9.png",
    ],
  },
  {
    id: 8,
    title: "StreamVibe Website",
    link: "#",
    images: [
      "/images/portfolio-8.png",
      "/images/portfolio-9.png",
      "/images/portfolio-4.png",
    ],
  },
  {
    id: 9,
    title: "YourBank Website",
    link: "#",
    images: [
      "/images/portfolio-9.png",
      "/images/portfolio-4.png",
      "/images/portfolio-5.png",
    ],
  },
];
export const socialLinks = [
  {
    id: 1,
    label: "Linkedin",
    icon: "/icons/linkedin.svg",
    url: "https://www.linkedin.com/in/cedric-bourquin-092a8a250/",
  },
];
export const projects = [
  {
    id: 0,
    header: "Booki",
    body_title: "Intégration de maquette",
    description:
      "Mon tout premier projet.\nIl s'agit d'une intégration simple d'une maquette FIGMA.\nPremière mise en pratique HTML/CSS.",
    objectifs: [
      "Intégrer une maquette en HTML et CSS",
      "Respecter les bonnes pratiques du HTML et du CSS",
      "Versionner avec Git et GitHub",
      
    ],
    technologies: ["SiHtml5", "SiCss3", "SiGit", "SiGithub"],
    pictures: [
      "/images/Projects/Booki-Desktop.webp",
      "/images/Projects/Booki-Tab.webp",
      "/images/Projects/Booki-Mobile.webp",
    ],
    link: "https://github.com/ginx836/P2_Booki",
    link2: "https://ginx836.github.io/P2_Booki/",
  },
  {
    id: 1,
    header: "Portfolio Sophie Bluel",
    body_title:
      "Ajout de nouvelles fonctionnalités sur le site de Sophie Bluel",
    description:
      "L'objectif de ce projet était de  concevoir une gallerie d'images avec des filtres de catégorie. Les données sont recupérées via une API Rest.\n Ajouter une page de connexion afin de permettre à Sophie de pouvoir administrer sa page et de mainupuler ses projets (ajout/suppression d'images) via une modale.",
    objectifs: [
      "Gérer les évènements d'un site avec JavaScript",
      "Travailler avec une API",
      "Manipuler les éléments du DOM",
      "Récupérer des données utilisateurs avec un formulaire",
    ],
    technologies: ["SiJavascript"],
    pictures: [
      "/images/Projects/Bluel-1.webp",
      "/images/Projects/Bluel-2.webp",
      "/images/Projects/Bluel-3.webp",
    ],
    link: "https://github.com/ginx836/P3-Portfolio-Sophie-Bluel",
  },
  {
    id: 2,
    header: "Nina Carducci",
    body_title: "Optimisation, débogage et amélioration du SEO",
    description:
      "Pour ce projet, l'objectif était de partir d'une base de code existante afin de la corriger et d'en optimiser les performances avec Lighthouse.\n Le code a été optimisé pour améliorer le SEO et le référencement local grâce aux Google Rich Snippets et Schéma.org.\n\n Travail sur l'accessibilité du site avec Wave et reflexion sur l'accessibilité dès la conception d'un projet.",
    objectifs: [
      "Analyser les performances d'un site web",
      "Écrire un code HTML et CSS maintenable",
      "Optimiser la taille et la vitesse d’un site web",
      "Assurer l'accessibilité d'un site web",
      "Optimiser le référencement d'un site web",
      "Production d'un cahier de recette",
    ],
    technologies: ["SiGoogle", "SiGooglechrome", "SiLighthouse"],
    pictures: [
      "/images/Projects/Nina-Desktop.webp",
      "/images/Projects/Nina-Desktop2.webp",
      "/images/Projects/Nina-Mobile.webp",
    ],
    link: "https://github.com/ginx836/P4-Nina.Carducci-Photo",
  },
  {
    id: 3,
    header: "Kasa",
    body_title: "Création d'une application React avec une API",
    description:
      "Il s'agit de ma 1ère application en React.\n Application de location de biens immobiliers entre particuliers style AirBnb.\n Construction du front-end avec React, récupération des données via une API Rest, et animation de certains composants.\n ",
    objectifs: [
      "Développer une interface utilisateur avec React et Sass",
      "Configurer la navigation avec React Router",
      "Animer des composants en CSS",
      "Récupérer des données de l'API",
      "Adapter l'application à tous les formats d'écrans",
    ],
    technologies: ["SiReact", "SiReactrouter", "SiSass"],
    pictures: [
      "/images/Projects/Kasa-Desktop.webp",
      "/images/Projects/Kasa-Tab.webp",
      "/images/Projects/Kasa-Mobile.webp",
    ],
    link: "https://github.com/ginx836/P6-Kasa",
  },
  {
    id: 4,
    header: "Mon Vieux Grimoire",
    body_title: "Développement du back-end avec Node.js, Express et MongoDB",
    description:
      "L'objectif était de développer le back-end uniquement d'un site de partage de livres.\nIl s'agit de mon 1er projet back-end basé sur la stack MERN.",
    objectifs: [
      "Créer un serveur Node.js avec Express",
      "Sécuriser l'application avec Express",
      "Stocker des données de manière sécurisée dans une base de données MongoDB Atlas",
      "Implémenter de manière logique les schémas de données avec Mongoose",
      "Mettre en oeuvre des opérations CRUD sécurisées",
    ],
    technologies: ["SiNodedotjs", "SiExpress", "SiMongodb", "SiMongoose"],
    pictures: [
      "/images/Projects/Grimoire-Desktop.webp",
      "/images/Projects/Grimoire-Desktop2.webp",
    ],
    link: "https://github.com/ginx836/P7-Mon_vieux_grimoire",
  },
];
