import React from "react";
import Project from "./Project";
import './Project.css';

function Projects(props) {
    // array of projects data
    const projects = [
        {
            title: 'Portfolio Pgae using React JS',
            desc: 'This is portfolio page built using react js library',
            link: 'some link',
            technologies: 'React js, CSS, HTML, JavaScript',
            company: 'Personal Project',
            role: 'React JS developer / STudent',
        },
        {
            title: 'IHG (Intercontinental Hotel Group)',
            desc: 'A multinational hotel indutry serving multiple brands and services',
            link: 'some link',
            technologies: 'Angular js, CSS, HTML, JavaScript, TypeScript, Bootstrap',
            company: 'IHG / TCS',
            role: 'UI Developer',
        },
        {
            title: 'Webstac',
            desc: 'Portal for industries dealing with legislations for thier environment, health, safety',
            link: 'some link',
            technologies: 'CSS, HTML,JavaScript, Java, Spring MVC, JSP, SQL',
            company: 'I2E consulting PVT LTD',
            role: 'Full Stack Web Developer',
        }
    ];

    return (
        <div>
            <div className="project-title">Projects</div>
            <div className="projects-container">
                <Project
                    title={projects[0].title}
                    desc={projects[0].desc}
                    link={projects[0].link}
                    technologies={projects[0].technologies}
                    company={projects[0].company}
                    role={projects[0].role}
                />
                <Project
                    title={projects[1].title}
                    desc={projects[1].desc}
                    link={projects[1].link}
                    technologies={projects[1].technologies}
                    company={projects[1].company}
                    role={projects[1].role}
                />
                <Project
                    title={projects[2].title}
                    desc={projects[2].desc}
                    link={projects[2].link}
                    technologies={projects[2].technologies}
                    company={projects[2].company}
                    role={projects[2].role}
                />
            </div>
        </div>
    );
}

export default Projects;