import LunchSelect from "./LunchSelect";

const LunchStatus = () => {
    return (
        <div>
            <div className="dds__row">
                <div className="dds__col--1 dds__col--sm-3 dds__col--md-4 dds__mb-3">
                    <div className="dds-sb__sample-box">
                        <div className='tags-container'>
                            <h5>My Lunch Status</h5>         
                        </div>
                    </div>
                </div>
                <div className="dds__col--1 dds__col--sm-3 dds__col--md-6 dds__mb-3">
                    <div className="dds-sb__sample-box"> 
                        <LunchSelect/>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default LunchStatus;