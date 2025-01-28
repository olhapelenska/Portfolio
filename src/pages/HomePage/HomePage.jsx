import "./HomePage.scss";
import About from "../../components/About/About";
import TechStack from "../../components/TechStack/TechStack";
import Projects from "../../components/Projects/Projects";
import Experience from "../../components/Experience/Experience";

function HomePage() {
  return (
    <main className="home-page">
      <div className="home-page__container">
        <About />
        <TechStack />
        <Projects />
        <Experience />
      </div>
    </main>
  );
}

export default HomePage;
