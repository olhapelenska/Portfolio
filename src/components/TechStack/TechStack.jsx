import "./TechStack.scss";

// Import all skill icons
import jsIcon from "../../assets/images/javascript.svg";
import htmlIcon from "../../assets/images/html.svg";
import cssIcon from "../../assets/images/css.svg";
import sassIcon from "../../assets/images/sass.svg";
import reactIcon from "../../assets/images/react.svg";
import nodeIcon from "../../assets/images/node.svg";
import mysqlIcon from "../../assets/images/mysql.svg";
import expressIcon from "../../assets/images/express.svg";
import knexIcon from "../../assets/images/knex.svg";
import gitIcon from "../../assets/images/git.svg";
import githubIcon from "../../assets/images/github.svg";
import postmanIcon from "../../assets/images/postman.svg";
import gulpIcon from "../../assets/images/gulp.svg";
import figmaIcon from "../../assets/images/figma.svg";
import viteIcon from "../../assets/images/vite.svg";
import vscodeIcon from "../../assets/images/vscode.svg";
import herokuIcon from "../../assets/images/heroku.svg";
import netlifyIcon from "../../assets/images/netlify.svg";
import jiraIcon from "../../assets/images/jira.svg";

// Skills Data Array
const skills = [
  { name: "JavaScript", icon: jsIcon },
  { name: "HTML5", icon: htmlIcon },
  { name: "CSS3", icon: cssIcon },
  { name: "Sass", icon: sassIcon },
  { name: "React", icon: reactIcon },
  { name: "Node.js", icon: nodeIcon },
  { name: "Express", icon: expressIcon },
  { name: "MySQL", icon: mysqlIcon },
  { name: "Knex.js", icon: knexIcon },
  { name: "Git", icon: gitIcon },
  { name: "GitHub", icon: githubIcon },
  { name: "Postman", icon: postmanIcon },
  { name: "Gulp", icon: gulpIcon },
  { name: "Figma", icon: figmaIcon },
  { name: "Vite", icon: viteIcon },
  { name: "VS Code", icon: vscodeIcon },
  { name: "Heroku", icon: herokuIcon },
  { name: "Netlify", icon: netlifyIcon },
  { name: "Jira", icon: jiraIcon },
];

const TechStack = () => {
  return (
    <section id="tech-stack" className="tech-stack">
      <h2 className="tech-stack__title">Tech Stack & Tools</h2>
      <ul className="tech-stack__list">
        {skills.map((skill, index) => (
          <li key={index} className="tech-stack__item">
            <img src={skill.icon} alt={`${skill.name} icon`} />
            <span>{skill.name}</span>
          </li>
        ))}
      </ul>
    </section>
  );
};

export default TechStack;
