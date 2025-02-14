import "./Projects.scss";
import jsIcon from "../../assets/images/javascript.svg";
import htmlIcon from "../../assets/images/html.svg";
import cssIcon from "../../assets/images/css.svg";
import sassIcon from "../../assets/images/sass.svg";
import reactIcon from "../../assets/images/react.svg";
import nodeIcon from "../../assets/images/node.svg";
import mysqlIcon from "../../assets/images/mysql.svg";
import expressIcon from "../../assets/images/express.svg";
import knexIcon from "../../assets/images/knex.svg";
import InstaClone from "../../assets/images/instaclone.png";
import kika from "../../assets/images/kika.png";
import ccg from "../../assets/images/ccg.png";
import crossway from "../../assets/images/crossway.png";
import gulpIcon from "../../assets/images/gulp.svg";
import { Link } from "react-router-dom";

function Projects() {
  return (
    <section id="projects" className="projects">
      <h2 className="projects__title">Projects</h2>
      <div className="projects__list">
        <Link
          to="https://my-insta-clone.netlify.app/"
          target="_blanc"
          className="projects__item projects__instaclone"
        >
          <div className="projects__image">
            <img src={InstaClone} alt="instaclone image" />
          </div>
          <h3 className="projects__item-title">InstaClone</h3>
          <p className="projects__item-text">
            Social media-inspired web app for sharing photos, liking posts, and
            engaging with content
          </p>
          <ul className="projects__item-stack">
            <li className="projects__item-technology">
              <img src={reactIcon} alt="react icon" />
              <span>React</span>
            </li>
            <li className="projects__item-technology">
              <img src={nodeIcon} alt="node icon" />
              <span>Node.js</span>
            </li>
            <li className="projects__item-technology">
              <img src={expressIcon} alt="express icon" />
              <span>Express</span>
            </li>
            <li className="projects__item-technology">
              <img src={mysqlIcon} alt="mysql icon" />
              <span>MySQL</span>
            </li>
            <li className="projects__item-technology">
              <img src={knexIcon} alt="knex icon" />
              <span>Knex.js</span>
            </li>
          </ul>
        </Link>
        <Link
          to="https://olhapelenska.github.io/Projects/kika/index.html"
          target="_blanc"
          className="projects__item projects__kika"
        >
          <div className="projects__image">
            <img src={kika} alt="kika image" />
          </div>
          <h3 className="projects__item-title">Kika</h3>
          <p className="projects__item-text">
            Sleek and modern website for a web design studio
          </p>
          <ul className="projects__item-stack">
            <li className="projects__item-technology">
              <img src={jsIcon} alt="mysql icon" />
              <span>JavaScript</span>
            </li>
            <li className="projects__item-technology">
              <img src={htmlIcon} alt="mysql icon" />
              <span>HTML</span>
            </li>
            <li className="projects__item-technology">
              <img src={cssIcon} alt="mysql icon" />
              <span>CSS</span>
            </li>
            <li className="projects__item-technology">
              <img src={sassIcon} alt="mysql icon" />
              <span>Sass</span>
            </li>
            <li className="projects__item-technology">
              <img src={gulpIcon} alt="mysql icon" />
              <span>Gulp</span>
            </li>
          </ul>
        </Link>
        <Link
          to="https://olhapelenska.github.io/Projects/ccg/index.html"
          target="_blanc"
          className="projects__item projects__ccg"
        >
          <div className="projects__image">
            <img src={ccg} alt="ccg image" />
          </div>
          <h3 className="projects__item-title">Crypto Consult Group</h3>
          <p className="projects__item-text">
            Consulting company website, showcasing cryptocurrency insights and
            services
          </p>
          <ul className="projects__item-stack">
            <li className="projects__item-technology">
              <img src={jsIcon} alt="mysql icon" />
              <span>JavaScript</span>
            </li>
            <li className="projects__item-technology">
              <img src={htmlIcon} alt="mysql icon" />
              <span>HTML</span>
            </li>
            <li className="projects__item-technology">
              <img src={cssIcon} alt="mysql icon" />
              <span>CSS</span>
            </li>
            <li className="projects__item-technology">
              <img src={sassIcon} alt="mysql icon" />
              <span>Sass</span>
            </li>
            <li className="projects__item-technology">
              <img src={gulpIcon} alt="mysql icon" />
              <span>Gulp</span>
            </li>
          </ul>
        </Link>
        <Link
          to="https://olhapelenska.github.io/Projects/crossway-logistics/index.html"
          target="_blanc"
          className="projects__item projects__crossway"
        >
          <div className="projects__image">
            <img src={crossway} alt="crossway image" />
          </div>
          <h3 className="projects__item-title">Crossway Logistics</h3>
          <p className="projects__item-text">
            Professional website for a logistics company
          </p>
          <ul className="projects__item-stack">
            <li className="projects__item-technology">
              <img src={jsIcon} alt="mysql icon" />
              <span>JavaScript</span>
            </li>
            <li className="projects__item-technology">
              <img src={htmlIcon} alt="mysql icon" />
              <span>HTML</span>
            </li>
            <li className="projects__item-technology">
              <img src={cssIcon} alt="mysql icon" />
              <span>CSS</span>
            </li>
            <li className="projects__item-technology">
              <img src={sassIcon} alt="mysql icon" />
              <span>Sass</span>
            </li>
            <li className="projects__item-technology">
              <img src={gulpIcon} alt="mysql icon" />
              <span>Gulp</span>
            </li>
          </ul>
        </Link>
      </div>
    </section>
  );
}

export default Projects;
