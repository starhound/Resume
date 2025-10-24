import WorkExperienceResponsibilityList from "./WorkExperienceResponsibilityList";

export default function WorkExperience() {
    const comply365SeniorResponsibilities = [
        "Lead full-stack development of document distribution and authoring software utilizing .NET Framework, ASP.NET, .NET Core, and modern JavaScript frameworks.",
        "Architect and develop new product web applications using cutting-edge technologies including TypeScript, .NET 8+, and Azure DevOps.",
        "Design and integrate WYSIWYG XML editors to facilitate advanced document authoring and distribution within the platform.",
        "Mentor team members on containerization strategies for both Production and Development workloads (DevContainers, Docker Desktop, WSL).",
        "Lead development efforts on Java web applications using the Spring Framework and Hibernate ORM.",
        "Drive technical decisions and participate in agile software development ceremonies (Scrum, Kanban).",
        "Design complex Entity Framework architectures and code-first migrations for MS-SQL databases.",
        "Create and maintain development tools, configurations, and IDE solutions to streamline developer onboarding and productivity.",
        "Architect cloud-based solutions to modernize legacy software using Azure Functions, Service Bus, and App Services.",
        "Develop AI and LLM product level integrations and further low level NLP pipelines on large text datasets using tools like AWS Bedrock and Microsoft Semantic Kernel."
    ];

    const comply365WebEngineerResponsibilities = [
        "Assisted in the development of document distribution and authoring software on a full-stack capacity.",
        "Contributed to new product web application development utilizing TypeScript, .NET 6, and Azure DevOps.",
        "Developed and integrated WYSIWYG XML editors for document authoring platforms.",
        "Provided guidance on containerization of legacy software projects for Production and Development workloads."
    ];
    
    const telesmaticSystemsResponsibilities = [
        "Owner and lead developer of the online game Lost Souls MUD (hosted at www.lostsouls.org) which has been in operation for over 30 years.",
        "Create, maintain, or refactor code within the game libraries and drivers which are written in LPC and C.",
        "Utilize trusted Azure cloud products to host the game and its supporting services, such as; Static Web Apps, Functions, Application Gateways, Container Registries and more.",
        "Utilize Docker and Docker Compose to create development and production environments for all products offered by the company, along with CI/CD pipelines to facilitate the deployments.",
        "Provide direction and training regarding the ongoing development of the game itself to a private volunteer development team consisting of over 20 international software professionals.",
        "Integrate third party APIs from various web and private services to provide additional functionality to or extract information (player driven data) out of the game world.",
        "Integrate new development patterns and practices, documentation standards, error tracking, version source control, and any other third party integrations to improve the development workflow."
    ];

    const revenueManagementResponsibilities = [
        "Assisted in the ongoing maintenance and creation of financial analytical tools written with .NET Framework, .NET Core, ASP.NET and Javascript which are utilized by multiple Fortune 500 clients.",
        "Developed Azure Function applications to facilitate the integration of client data into various development and production environments.",
        "Utilized the MVC pattern to develop or expand robust and modern web applications for business purposes on a Front and Back end basis to solve ongoing software issues or feature additions across multiple software projects.",
        "Leveraged and integrated third party frameworks to create Excel reports based on client provided data and requirements.",
        "Assisted in the development and troubleshooting of SQL parameter based stored procedures and queries to handle the input or selection of customer related data."
    ];
    
    const bayonetPlumbingResponsibilities = [
        "Designed and implemented an ASP.NET micro-service framework to integrate with several business critical application platforms such as; Microsoft Exchange, osTicket, Active Directory, Gophish, SAP Business One, and many others.",
        "Developed and maintained custom SAP Business One add ons and connectors to facilitate data transfer with third party services.",
        "Configured and customize a deployment of a Rocket.Chat server to centralize forms of company wide communication. Developed multiple outgoing and incoming webhooks, channel listeners/bots, and other event driven scripts in Node.Js and Python 3.",
        "Created and altered SQL Stored Procedures for later use in Crystal Reports driven from data provided by an SAP B1 deployment.",
        "Developed custom Android and iOS applications using Xamarin (C#/.NET) and ReactNative (Javascript) frameworks.",
        "Generated dynamic websites/web-apps using Flask (Python3) for data analysis or generation."
    ];
    

    return (
        <dl className="flex flex-col sm:flex-row sm:justify-between p-4 sm:pt-2 sm:pb-2 sm:pl-8 sm:pr-8">
                <dt className="text-xl sm:text-xl font-bold mb-2 sm:mb-0">Work Experience</dt>
                <dd className="sm:pl-4 sm:pt-2">
                    {/* Current Senior Position */}
                    <div className="flex flex-col sm:flex-row sm:items-center mb-2">
                        <h2 className="text-lg sm:text-xl font-semibold">Senior Software Engineer</h2>
                        <span className="sm:pl-4 mt-1 sm:mt-0 sm:ml-2 text-sm sm:text-sm workTime">
                            <a href="https://comply365.com/">Comply365</a> - Beloit Wisconsin (Remote), April 2025-Current
                        </span>
                    </div>
                    <hr />
                    <WorkExperienceResponsibilityList items={comply365SeniorResponsibilities} />
                    
                    {/* Previous Position at Same Company - Smaller Display */}
                    <div className="flex flex-col sm:flex-row sm:items-center mb-1 mt-3 opacity-80">
                        <h3 className="text-base sm:text-lg font-medium italic">Previously: Web Software Engineer</h3>
                        <span className="sm:pl-4 mt-1 sm:mt-0 sm:ml-2 text-xs sm:text-sm workTime">
                            May 2022-April 2025
                        </span>
                    </div>
                    <ul className="list-disc pl-5 sm:pl-5 my-2 opacity-80">
                        {comply365WebEngineerResponsibilities.map((item, index) => (
                            <li className="pb-1 text-sm sm:text-sm leading-relaxed" key={index}>{item}</li>
                        ))}
                    </ul>
                    
                    {/* Other Work Experience */}
                    <div className="flex flex-col sm:flex-row sm:items-center mb-2 mt-4">
                        <h2 className="text-lg sm:text-xl font-semibold">Project Lead Developer</h2>
                        <span className="sm:pl-4 mt-1 sm:mt-0 sm:ml-2 text-sm sm:text-sm workTime">
                            <a href="https://lostsouls.org/">Telesmatic Systems LLC</a> - New Port Richey FL, December 2018-Current
                        </span>
                    </div>
                    <hr />
                    <WorkExperienceResponsibilityList items={telesmaticSystemsResponsibilities} />
                    
                    <div className="flex flex-col sm:flex-row sm:items-center mb-2">
                        <h2 className="text-lg sm:text-xl font-semibold">Full Stack Engineer (Contracted)</h2>
                        <span className="sm:pl-4 mt-1 sm:mt-0 sm:ml-2 text-sm sm:text-sm workTime">
                            <a href="https://www.revenuemanage.com/">Revenue Management Solutions</a> - Tampa FL, Sep 2021-Jan 2022
                        </span>
                    </div>
                    <hr />
                    <WorkExperienceResponsibilityList items={revenueManagementResponsibilities} />
                    
                    <div className="no-print">
                        <div className="flex flex-col sm:flex-row sm:items-center mb-2">
                            <h2 className="text-lg sm:text-xl font-semibold">Software Engineer</h2>
                            <span className="sm:pl-4 mt-1 sm:mt-0 sm:ml-2 text-sm sm:text-sm workTime">
                                <a href="https://www.bayonet-inc.com/">Bayonet Plumbing, Heating & Air Conditioning</a> - Hudson FL, Jan 2020-Aug 2021
                            </span>
                        </div>
                        <hr />
                        <WorkExperienceResponsibilityList items={bayonetPlumbingResponsibilities} />
                    </div>
                </dd>
            </dl>
    );
}
