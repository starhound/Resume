import WorkExperienceResponsibilityList from "./WorkExperienceResponsibilityList";

const positions = [
  {
    title: "Senior Software Engineer",
    employer: "Comply365",
    url: "https://comply365.com/",
    location: "Beloit, WI (Remote)",
    dates: "Apr 2025 - Present",
    responsibilities: [
      "Develop large language model (LLM) integrations and natural language processing (NLP) pipelines for large text datasets using AWS Bedrock and Spring AI.",
      "Design Python microservices using Model Context Protocol (MCP), LangChain, and FastAPI/FastMCP to unify data access and operations across the product suite.",
      "Build autonomous agents using retrieval-augmented generation (RAG) and orchestration patterns to support complex business workflows.",
      "Architect hybrid document search with Amazon OpenSearch, vector embeddings, and keyword retrieval.",
      "Lead full-stack development of document authoring and distribution software using .NET (C#), Java, TypeScript, Spring, and Hibernate.",
      "Mentor engineers on containerized development and production workflows; translate architectural and performance findings into recommendations for stakeholders.",
    ],
  },
  {
    title: "Web Software Engineer",
    employer: "Comply365",
    url: "https://comply365.com/",
    dates: "May 2022 - Apr 2025",
    previous: true,
    responsibilities: [
      "Contributed to full-stack document authoring and distribution products using TypeScript, .NET 6, and Azure DevOps.",
      "Developed and integrated WYSIWYG XML editors for document authoring.",
      "Designed multi-tenant Entity Framework architectures and code-first migrations for SQL Server.",
      "Architected Azure solutions to modernize legacy software using Functions, Service Bus, and App Services; guided containerization of legacy projects.",
    ],
  },
  {
    title: "Project Lead Developer",
    employer: "Telesmatic Systems LLC",
    url: "https://lostsouls.org/",
    location: "New Port Richey, FL",
    dates: "Dec 2018 - Present",
    responsibilities: [
      "Own and lead development of Lost Souls MUD, a game in continuous operation for over 35 years; maintain its LPC, C, and Python codebases.",
      "Direct and train a volunteer development team of over 20 international software professionals; establish documentation, version control, and error-tracking practices.",
      "Build Docker-based development and production environments, continuous integration and deployment (CI/CD) pipelines, Azure-hosted services, and third-party API integrations.",
      "Architect and operate a multi-node Kubernetes platform for APIs, telemetry, analytics, and web apps, including Helm charts, RBAC, observability, scaling, and deployment.",
    ],
  },
  {
    title: "Full Stack Engineer (Contract)",
    employer: "Revenue Management Solutions",
    url: "https://www.revenuemanage.com/",
    location: "Tampa, FL",
    dates: "Sep 2021 - Jan 2022",
    responsibilities: [
      "Contributed to financial analytics tools used by Fortune 500 clients, using .NET Framework, .NET Core, ASP.NET, and JavaScript.",
      "Developed Azure Functions to integrate client data across development and production environments, and expanded MVC web applications.",
      "Integrated Excel reporting frameworks and helped develop and troubleshoot SQL stored procedures and queries for client data.",
    ],
  },
  {
    title: "Software Engineer",
    employer: "Bayonet Plumbing, Heating & Air Conditioning",
    url: "https://www.bayonet-inc.com/",
    location: "Hudson, FL",
    dates: "Jan 2020 - Aug 2021",
    responsibilities: [
      "Designed an ASP.NET microservice framework integrating Exchange, osTicket, Active Directory, Gophish, and SAP Business One; built SAP add-ons and connectors.",
      "Configured and customized Rocket.Chat, including webhooks, bots, and event-driven scripts in Node.js and Python.",
      "Created SQL stored procedures and Crystal Reports for SAP Business One data.",
      "Developed Android and iOS apps with Xamarin and React Native, plus Flask web apps for data analysis and generation.",
    ],
  },
];

export default function WorkExperience() {
  return (
    <section className="resume-section experience-section" aria-labelledby="experience-heading">
      <h2 id="experience-heading">Work Experience</h2>
      {positions.map((position) => (
        <article className={`position${position.previous ? " previous-position" : ""}`} key={`${position.employer}-${position.title}`}>
          <div className="position-heading">
            <h3>{position.title}</h3>
            <p className="position-dates">{position.dates}</p>
          </div>
          <p className="position-employer">
            <a href={position.url}>{position.employer}</a>
            {position.location && <> | {position.location}</>}
            {position.previous && <span className="promotion-note"> | Prior role before promotion</span>}
          </p>
          <WorkExperienceResponsibilityList items={position.responsibilities} />
        </article>
      ))}
    </section>
  );
}
