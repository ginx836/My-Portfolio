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
      "Mettre en place son environnement Front-End",
    ],
    technologies: ["SiHtml5", "SiCss3", "SiGit", "SiGithub"],
    img: "/images/Covers/Booki-Cover.webp",
    pictures: [
      "/images/Main/Booki-Desktop.webp",
      "/images/Main/Booki-Tab.webp",
      "/images/Main/Booki-Mobile.webp",
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
      "L'objectif de ce projet était de développer les compétences en JS.\nEn travaillant avec une API, j'ai du concevoir une gallerie d'images avec des filtres basés sur les catégories des images.\n Ajouter une page de connexion afin de permettre au propriétaire de pouvoir administrer sa page et de mainupuler ses projets (ajout/suppression) via une modale. \nLe projet est écrit en vanilla JS.",
    objectifs: [
      "Gérer les évènements d'un site avec JavaScript",
      "Travailler avec une API",
      "Manipuler les éléments du DOM",
      "Récupérer des données utilisateurs avec un formulaire",
    ],
    technologies: ["SiJavascript"],
    img: "/images/Covers/Bluel-Cover.webp",
    pictures: [
      "/images/Main/Bluel-1.webp",
      "/images/Main/Bluel-2.webp",
      "/images/Main/Bluel-3.webp",
    ],
    link: "https://github.com/ginx836/P3-Portfolio-Sophie-Bluel",
  },
  {
    id: 2,
    header: "Nina Carducci",
    body_title: "Optimisation, débogage et amélioration du SEO",
    description:
      "Pour ce projet, l'objectif était de partir d'une base de code existante afin de la corriger et d'en optimiser les performances en se basant sur les ChromeDev Tools et Lighthouse notamment.\n En plus de ce travail, il a fallu optimiser le code pour améliorer le SEO grâce aux Google Rich Snippets ou Schéma.org.\n\n Ce projet a été également un moyen de travailler sur l'accessibilité du site grâce à des outils comme Wave et ainsi de comprendre comment réflechir à l'accessibilité dès la conception d'un site.",
    objectifs: [
      "Analyser les performances d'un site web",
      "Écrire un code HTML et CSS maintenable",
      "Optimiser la taille et la vitesse d’un site web",
      "Assurer l'accessibilité d'un site web",
      "Optimiser le référencement d'un site web",
      "Production d'un cahier de recette",
    ],
    technologies: ["SiGoogle", "SiGooglechrome"],
    img: "/images/Covers/Nina-Cover.webp",
    pictures: [
      "/images/Main/Nina-Desktop.webp",
      "/images/Main/Nina-Desktop2.webp",
      "/images/Main/Nina-Mobile.webp",
    ],
    link: "https://github.com/ginx836/P4-Nina.Carducci-Photo",
  },
  {
    id: 3,
    header: "Kasa",
    body_title: "Création d'une application React avec une API",
    description:
      "Il s'agit de ma 1ère application en React.\n L'objectif était de construite le front-end avec React, récupérer les données via une API, et animer certains composants.\n \n Travailler avec la librairie à été extrêmement challengeant et très enrichissant. J'ai pu découvrir le fonctionnement de React, ses avantages et ses inconvénients.\n\nLe point de difficulté sur ce projet aura été la gestion des données externes des logements et comment bien les manipuler.\n\n Afin de pouvoir les utiliser à travers l'ensemble de l'application, j'ai mis en place un contexte pour me permettre de les récupérer et de les utiliser dans les composants qui en ont besoin plutôt que les passer en props.\n Ceci m'a permis de garder un code plus propre et plus lisible.",
    objectifs: [
      "Développer une interface utilisateur avec React et Sass",
      "Configurer la navigation avec React Router",
      "Animer des composants en CSS",
      "Récupérer des données de l'API",
      "Adapter l'application à tous les formats d'écrans",
    ],
    technologies: ["SiReact", "SiReactrouter", "SiSass"],
    img: "/images/Covers/Kasa-Cover.webp",
    pictures: [
      "/images/Main/Kasa-Desktop.webp",
      "/images/Main/Kasa-Tab.webp",
      "/images/Main/Kasa-Mobile.webp",
    ],
    link: "https://github.com/ginx836/P6-Kasa",
  },
  {
    id: 4,
    header: "Mon Vieux Grimoire",
    body_title: "Développement du back-end avec Node.js, Express et MongoDB",
    description:
      "L'objectif était de développer le back-end d'un site de partage de livres.\nLe projet devait être réalisé avec Node.js, Express et MongoDB.\nIl s'agit de mon 1er projet back-end.\n\n Ce projet m'a permis de découvrir le fonctionnement côté serveur.\n\n Le point de challenge sur ce projet aura été sur les controlleurs qui gèrent les opérations CRUD. Cela m'a challengé sur la manière de structurer le code et de le rendre plus lisible et maintenable tout en étant vigilant sur la logique d'écriture des fonctions.",
    objectifs: [
      "Créer un serveur Node.js avec Express",
      "Sécuriser l'application avec Express",
      "Stocker des données de manière sécurisée dans une base de données MongoDB Atlas",
      "Implémenter de manière logique les schémas de données avec Mongoose",
      "Mettre en oeuvre des opérations CRUD sécurisées",
    ],
    technologies: ["SiNodedotjs", "SiExpress", "SiMongodb", "SiMongoose"],
    img: "/images/Covers/Grimoire-Cover.webp",
    pictures: [
      "/images/Main/Grimoire-Desktop.webp",
      "/images/Main/Grimoire-Desktop2.webp",
    ],
    link: "https://github.com/ginx836/P7-Mon_vieux_grimoire",
  },
];
