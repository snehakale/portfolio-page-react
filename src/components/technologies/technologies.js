import React from "react";
import './Technologies.css'

function Technologies(props) {
    const colon_Symbol = ":";
    return (
        <div className="technologies-container">
            <div className="technologies-title">
                Technologies
            </div>
            <div>
                <dl className="technology-list">
                    <dt>UI / Front End Technologies {colon_Symbol}</dt>
                    <dd>HTML, CSS, JavaScript, ES6, JavaScript Frameworks such as Angular, React, Knockout
                        SAAS CSS preprocessor, Bootstrap, JSP, JSON, jQuery
                    </dd>
                    <dt>Programing Languages {colon_Symbol}</dt>
                    <dd>Java, Python</dd>
                    <dt>Database Technologies {colon_Symbol}</dt>
                    <dd>SQL, MySQL, PostgreSQL, MongoDB</dd>
                    <dt>Version Controlling {colon_Symbol}</dt>
                    <dd>Git, SVN</dd>
                    <dt>Unit Testing Tools {colon_Symbol}</dt>
                    <dd>Karma, Jasmine, Selenium</dd>
                    <dt>Others {colon_Symbol}</dt>
                    <dd>Adobe Invision, Adobe Target, Apache Tomcat server, JDK, Windows, Linux(Ubuntu)</dd>
                </dl>
            </div>
        </div> 
    );
}

export default Technologies;