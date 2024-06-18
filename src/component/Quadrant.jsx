import LunchedIn from './LunchedIn';
import MyLinks from "./MyLinks";
import MyStatus from "./MyStatus";
import OfficedIn from "./OfficedIn";

const Quadrant = () => {
    return (
        <div className="dds__container-fluid">
            <div className="dds__row">
                <div className="dds__col--1 dds__col--sm-3 dds__col--md-6 dds__mb-3">
                    <div className="dds-sb__sample-box">
                        <LunchedIn/>
                    </div>
                </div>
                <div className="dds__col--1 dds__col--sm-3 dds__col--md-6 dds__mb-3">
                    <div className="dds-sb__sample-box">
                       <MyStatus/> 
                    </div>
                </div>
            </div>
            <div className="dds__row">
                <div className="dds__col--1 dds__col--sm-3 dds__col--md-6 dds__mb-3">
                    <div className="dds-sb__sample-box">
                        <OfficedIn/>
                    </div>
                </div>
                <div className="dds__col--1 dds__col--sm-3 dds__col--md-6 dds__mb-3">
                    <div className="dds-sb__sample-box">
                        <MyLinks/>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Quadrant;