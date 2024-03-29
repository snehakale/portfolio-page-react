import React from "react";
import './Project.css';

function Project(props) {
    return (
        <div className="project-box">
            <p className="project-title-box">{props.title}</p>
            <p>{props.desc}</p>
            <p><span className="project-text">Company</span> : {props.company}</p>
            <p><span className="project-text">Role </span>: {props.role}</p>
            <p><span className="project-text">Technologies used </span>: {props.technologies}</p>
        </div>
    );
}

export default Project;