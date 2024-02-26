import {
  SiExpress,
  SiMongodb,
  SiMongoose,
  SiHtml5,
  SiCss3,
  SiGit,
  SiJavascript,
  SiGoogle,
  SiGooglechrome,
  SiLighthouse,
  SiReact,
  SiSass,
  SiReactrouter,
  SiNodedotjs,
  SiGithub,
} from "react-icons/si";

export const TECHNOLOGIES = {
  SiHtml5: { icon: SiHtml5, name: "HTML5" },
  SiCss3: { icon: SiCss3, name: "CSS3" },
  SiGithub: { icon: SiGithub, name: "GitHub" },
  SiGit: { icon: SiGit, name: "Git" },
  SiJavascript: { icon: SiJavascript, name: "JavaScript" },
  SiGoogle: { icon: SiGoogle, name: "Google" },
  SiGooglechrome: { icon: SiGooglechrome, name: "Chrome DevTools" },
  SiLighthouse: { icon: SiLighthouse, name: "Lighthouse" },
  SiReact: { icon: SiReact, name: "React" },
  SiReactrouter: { icon: SiReactrouter, name: "React Router" },
  SiSass: { icon: SiSass, name: "Sass" },
  SiNodedotjs: { icon: SiNodedotjs, name: "Node.js" },
  SiExpress: { icon: SiExpress, name: "Express" },
  SiMongodb: { icon: SiMongodb, name: "MongoDB" },
  SiMongoose: { icon: SiMongoose, name: "Mongoose" },
};

interface RenderTechnologiesProps {
  technologies: string[];
  size?: number;
  DevIconStyles?: string;
}

const RenderTechnologies: React.FC<RenderTechnologiesProps> = ({
  technologies,
  size,
  DevIconStyles,
}) => {
  return (
    <div>
      <ul className={DevIconStyles}>
        {technologies &&
          technologies.length > 0 &&
          technologies.map((technology, index) => {
            const TechnologyComponent =
              TECHNOLOGIES[technology as keyof typeof TECHNOLOGIES];
            if (!TechnologyComponent) {
              console.warn(`No icon found for technology: ${technology}`);
              return null;
            }
            return (
              <li key={index} className="flex flex-col items-center gap-2">
                <TechnologyComponent.icon size={size} />
                <p className="text-grey-600 text-sm text-center flex items-center justify-center">
                  {TechnologyComponent.name}
                </p>
              </li>
            );
          })}
      </ul>
    </div>
  );
};

export default RenderTechnologies;
