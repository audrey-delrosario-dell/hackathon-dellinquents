import LunchedIn from './LunchedIn';
import MyLinks from "./MyLinks";
import MyStatus from "./MyStatus";
import OfficedIn from "./OfficedIn";
import '../assets/styles/Quadrant.css'; 


const Quadrant = () => {
    return (
        <div className="dds__container-fluid">
            <div className="dds__row">
                <div className="dds__col--1 dds__col--sm-3 dds__col--md-6 dds__mb-3">
                    <div className="section">
                        <LunchedIn/>
                    </div>
                </div>
                <div className="dds__col--1 dds__col--sm-3 dds__col--md-6 dds__mb-3">
                    <div className="section">
                       <MyStatus/> 
                    </div>
                </div>
            </div>
            <div className="dds__row">
                <div className="dds__col--1 dds__col--sm-3 dds__col--md-6 dds__mb-3">
                    <div className="section">
                        <OfficedIn/>
                    </div>
                </div>
                <div className="dds__col--1 dds__col--sm-3 dds__col--md-6 dds__mb-3">
                    <div className="section">
                        <MyLinks/>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Quadrant;