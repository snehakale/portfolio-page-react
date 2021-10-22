import Summary from '../summary/summary';
import Technologies from '../technologies/technologies';
import PersonalData from '../personal/personal';
import './container.css';

function Container() {
    return (
        <div className="container-style">
            <div className="container-left"> 
                <PersonalData />
            </div>
            <div className="container-right">
                <Summary />
                <Technologies />
            </div>
        </div>
    );
}

export default Container;