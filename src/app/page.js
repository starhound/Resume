import WorkExperience from "../components/WorkExperience"
import ProgrammingLanguages from "../components/ProgrammingLanguages"
import DatabaseSystems from "../components/DatabaseSystems"
import Frameworks from "../components/Frameworks"
import Education from "../components/Education"
import ContactCard from "../components/ContactCard"

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col">
        <div id="page-wrap">
            
            <ContactCard />

            <ProgrammingLanguages />

            <Frameworks />
            
            <DatabaseSystems />
            
            <WorkExperience />

            <Education />
        </div>
    </main>
  )
}
