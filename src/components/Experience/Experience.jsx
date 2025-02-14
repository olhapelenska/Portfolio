import "./Experience.scss";

// Experience Data Array
const experiences = [
  {
    title: "JavaScript Developer (Contract)",
    company: "Pepperi",
    date: "Sep 2022 – Nov 2022",
    description:
      "Developed JavaScript workflows for large datasets, ensuring efficient retrieval and seamless front-end presentation.",
    bullets: [
      "Processed and displayed API data, ensuring accuracy and usability within the application.",
      "Implemented custom UI behaviors to meet specific business requirements.",
      "Collaborated with a diverse team of professionals to troubleshoot issues, refine functionality, and improve overall system efficiency.",
    ],
  },
  {
    title: "Front-End Developer",
    company: "Kika Web Design Studio",
    date: "Oct 2021 – Apr 2022",
    description:
      "Designed and developed responsive, high-performance user interfaces using HTML, CSS (Sass), and JavaScript.",
    bullets: [
      "Integrated UI with a custom WordPress backend, ensuring smooth interactions and visual consistency.",
      "Worked on a variety of front-end projects, refining and adapting designs to meet evolving client needs.",
      "Partnered with designers and developers to bring creative concepts to life in a fast-paced team environment.",
    ],
  },
];

const Experience = () => {
  return (
    <section id="experience" className="experience">
      <h2 className="experience__title">Experience</h2>
      <div className="experience__list">
        {experiences.map((exp, index) => (
          <div key={index} className="experience__item">
            <h3 className="experience__role">{exp.title}</h3>
            <p className="experience__company">
              {exp.company} | {exp.date}
            </p>
            <p className="experience__description">{exp.description}</p>
            <ul className="experience__bullets">
              {exp.bullets.map((bullet, i) => (
                <li key={i} className="experience__bullet">
                  {bullet}
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Experience;
