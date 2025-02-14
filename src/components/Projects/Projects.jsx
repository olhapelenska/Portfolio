import "./Projects.scss";
import { Link } from "react-router-dom";

// Import icons
import jsIcon from "../../assets/images/javascript.svg";
import htmlIcon from "../../assets/images/html.svg";
import cssIcon from "../../assets/images/css.svg";
import sassIcon from "../../assets/images/sass.svg";
import reactIcon from "../../assets/images/react.svg";
import nodeIcon from "../../assets/images/node.svg";
import mysqlIcon from "../../assets/images/mysql.svg";
import expressIcon from "../../assets/images/express.svg";
import knexIcon from "../../assets/images/knex.svg";
import gulpIcon from "../../assets/images/gulp.svg";

// Import project images
import instaCloneImg from "../../assets/images/instaclone.png";
import kikaImg from "../../assets/images/kika.png";
import ccgImg from "../../assets/images/ccg.png";
import crosswayImg from "../../assets/images/crossway.png";

// Project Data
const projects = [
  {
    name: "InstaClone",
    description:
      "Social media-inspired web app for sharing photos, liking posts, and engaging with content.",
    image: instaCloneImg,
    link: "https://my-insta-clone.netlify.app/",
    stack: [
      { name: "React", icon: reactIcon },
      { name: "Node.js", icon: nodeIcon },
      { name: "Express", icon: expressIcon },
      { name: "MySQL", icon: mysqlIcon },
      { name: "Knex.js", icon: knexIcon },
    ],
  },
  {
    name: "Kika",
    description: "Sleek and modern website for a web design studio.",
    image: kikaImg,
    link: "https://olhapelenska.github.io/Projects/kika/index.html",
    stack: [
      { name: "JavaScript", icon: jsIcon },
      { name: "HTML", icon: htmlIcon },
      { name: "CSS", icon: cssIcon },
      { name: "Sass", icon: sassIcon },
      { name: "Gulp", icon: gulpIcon },
    ],
  },
  {
    name: "Crypto Consult Group",
    description:
      "Consulting company website, showcasing cryptocurrency insights and services.",
    image: ccgImg,
    link: "https://olhapelenska.github.io/Projects/ccg/index.html",
    stack: [
      { name: "JavaScript", icon: jsIcon },
      { name: "HTML", icon: htmlIcon },
      { name: "CSS", icon: cssIcon },
      { name: "Sass", icon: sassIcon },
      { name: "Gulp", icon: gulpIcon },
    ],
  },
  {
    name: "Crossway Logistics",
    description: "Professional website for a logistics company.",
    image: crosswayImg,
    link: "https://olhapelenska.github.io/Projects/crossway-logistics/index.html",
    stack: [
      { name: "JavaScript", icon: jsIcon },
      { name: "HTML", icon: htmlIcon },
      { name: "CSS", icon: cssIcon },
      { name: "Sass", icon: sassIcon },
      { name: "Gulp", icon: gulpIcon },
    ],
  },
];

function Projects() {
  return (
    <section id="projects" className="projects">
      <h2 className="projects__title">Projects</h2>
      <div className="projects__list">
        {projects.map((project, index) => (
          <a
            href={project.link}
            target="_blank"
            rel="noopener noreferrer"
            key={index}
            className="projects__item"
          >
            <div className="projects__image">
              <img src={project.image} alt={`${project.name} image`} />
            </div>
            <h3 className="projects__item-title">{project.name}</h3>
            <p className="projects__item-text">{project.description}</p>
            <ul className="projects__item-stack">
              {project.stack.map((tech, i) => (
                <li key={i} className="projects__item-technology">
                  <img src={tech.icon} alt={`${tech.name} icon`} />
                  <span>{tech.name}</span>
                </li>
              ))}
            </ul>
          </a>
        ))}
      </div>
    </section>
  );
}

export default Projects;
