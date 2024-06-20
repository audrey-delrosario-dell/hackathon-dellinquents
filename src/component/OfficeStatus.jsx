import { DDSButton } from "@dds/react";
import { useState } from "react";


const OfficeStatus = () => {

    const [showWeekStat, setShowWeekStat] = useState(false);
    const handleClickSetStat = () => {
        setShowWeekStat(true);
    }


    return (
        <div>
            <div className="dds__row">
                <div className="dds__col--1 dds__col--sm-3 dds__col--md-4 dds__mb-3">
                    <div className="dds-sb__sample-box">
                        <div className='tags-container'>
                            <h5>My Office Status</h5>         
                        </div>
                    </div>
                </div>

                <div className="dds__col--1 dds__col--sm-3 dds__col--md-6 dds__mb-3">
                    <div className="dds-sb__sample-box"> 
                    <DDSButton size="lg" onClick={handleClickSetStat}>Set Status for the Week</DDSButton>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default OfficeStatus;