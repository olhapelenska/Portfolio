import "./TechStack.scss";
import StackList from "../StackList/StackList";

function TechStack() {
  return (
    <section id="tech-stack" className="tech-stack">
      <h2 className="tech-stack__title">Tech Stack & Tools</h2>
      <StackList />
    </section>
  );
}

export default TechStack;
