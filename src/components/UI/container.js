import Summary from '../summary/Summary';
import Technologies from '../technologies/Technologies';
import PersonalData from '../personal/Personal';
import './Container.css';

function Container() {
    return (
        <div>
            <div className="container-style">
                <div className="container-left"> 
                    <PersonalData />
                </div>
                <div className="container-right">
                    <Summary />
                    <Technologies />
                </div>
            </div>
        </div>
    );
}

export default Container;