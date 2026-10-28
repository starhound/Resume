import WorkExperience from "../components/WorkExperience";
import ProgrammingLanguages from "../components/ProgrammingLanguages";
import DatabaseSystems from "../components/DatabaseSystems";
import Frameworks from "../components/Frameworks";
import Education from "../components/Education";
import ContactCard from "../components/ContactCard";

export default function Home() {
  return (
    <main id="page-wrap">
      <ContactCard />
      <p className="professional-summary">
        Senior software engineer developing applied artificial intelligence (AI),
        backend services, and full-stack document platforms with C#, .NET, Java,
        Python, and TypeScript. Experience includes large language model (LLM)
        integrations, retrieval-augmented generation (RAG), cloud systems, and
        technical leadership for an international volunteer team.
      </p>
      <WorkExperience />
      <section className="resume-section skills-section" aria-labelledby="skills-heading">
        <h2 id="skills-heading">Technical Skills</h2>
        <div className="skills-list">
          <ProgrammingLanguages />
          <Frameworks />
          <DatabaseSystems />
        </div>
      </section>
      <Education />
    </main>
  );
}
