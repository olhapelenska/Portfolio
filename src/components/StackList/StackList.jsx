import "./StackList.scss";
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

function StackList() {
  return (
    <ul className="stack-list">
      <li className="stack-list__item">
        <img src={jsIcon} alt="javascript icon" />
        <span>JavaScript</span>
      </li>
      <li className="stack-list__item">
        <img src={htmlIcon} alt="html icon" />
        <span>HTML5</span>
      </li>
      <li className="stack-list__item">
        <img src={cssIcon} alt="css icon" />
        <span>CSS3</span>
      </li>
      <li className="stack-list__item">
        <img src={sassIcon} alt="sass icon" />
        <span>Sass</span>
      </li>
      <li className="stack-list__item">
        <img src={reactIcon} alt="react icon" />
        <span>React</span>
      </li>
      <li className="stack-list__item">
        <img src={nodeIcon} alt="node icon" />
        <span>Node.js</span>
      </li>
      <li className="stack-list__item">
        <img src={expressIcon} alt="express icon" />
        <span>Express</span>
      </li>
      <li className="stack-list__item">
        <img src={mysqlIcon} alt="mysql icon" />
        <span>MySQL</span>
      </li>
      <li className="stack-list__item">
        <img src={knexIcon} alt="knex icon" />
        <span>Knex.js</span>
      </li>
      <li className="stack-list__item">
        <img src={gitIcon} alt="git icon" />
        <span>Git</span>
      </li>
      <li className="stack-list__item">
        <img src={githubIcon} alt="github icon" />
        <span>GitHub</span>
      </li>
      <li className="stack-list__item">
        <img src={postmanIcon} alt="postman icon" />
        <span>Postman</span>
      </li>
      <li className="stack-list__item">
        <img src={gulpIcon} alt="gulp icon" />
        <span>Gulp</span>
      </li>
      <li className="stack-list__item">
        <img src={figmaIcon} alt="figma icon" />
        <span>Figma</span>
      </li>
      <li className="stack-list__item">
        <img src={viteIcon} alt="vite icon" />
        <span>Vite</span>
      </li>
      <li className="stack-list__item">
        <img src={vscodeIcon} alt="vscode icon" />
        <span>VS Code</span>
      </li>
      <li className="stack-list__item">
        <img src={herokuIcon} alt="heroku icon" />
        <span>Heroku</span>
      </li>
      <li className="stack-list__item">
        <img src={netlifyIcon} alt="netlify icon" />
        <span>Netlify</span>
      </li>
      <li className="stack-list__item">
        <img src={jiraIcon} alt="jira icon" />
        <span>Jira</span>
      </li>
    </ul>
  );
}

export default StackList;
