import Summary from '../summary/Summary';
import Technologies from '../technologies/Technologies';
import PersonalData from '../personal/Personal';
import './Container.css';
import Projects from '../projects/ProjectsAll';
import Academics from '../academics/Academic';

function Container() {
    return (
        <div>
            <div className="container-style container-fixed-box">
                <div className="container-left"> 
                    <PersonalData />
                    <Summary />
                </div>
                <div className="container-right">
                    <Technologies />
                </div>
            </div>
            <div className="container-style">
                <Projects />
            </div>
            <div className="container-style">
                <Academics />
            </div>
        </div>
    );
}

export default Container;