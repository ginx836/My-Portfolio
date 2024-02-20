import { Linkedin, Mail, MapPin, Phone } from "lucide-react";

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
    icon: "/icons/code.svg",
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
    icon: Linkedin,
    url: "https://www.linkedin.com/in/cedric-bourquin-092a8a250/",
  },
];
export const contactDetails = [
  {
    id: 1,
    icon: Phone,
    text: "+33 661217242",
  },
  {
    id: 2,
    icon: Mail,
    text: "cedric.bourquin1@icloud.com",
  },
  {
    id: 3,
    icon: MapPin,
    text: "Auxerre, France",
  },
];
