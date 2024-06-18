// Bottom Right Section
import React, {useRef, useEffect} from 'react';
import placeholder from '../assets/images/user-ph.png';
import '../assets/styles/OfficedIn.css';
import { DDSSwitch } from "@dds/react";

const OfficedIn = () => {

    const switchRef = useRef(true);
    useEffect(() => { 
        console.log(switchRef.current); 
    }, []);

    return (
        <div className='officed-in'>
            <div className="title">
                <h1>OfficedIn</h1>
                <DDSSwitch ref={switchRef} />
            </div>
            <div className="user-icons">
                <div className="user">
                    <img src={placeholder}></img>
                </div>
                <div className="user">
                    <img src={placeholder}></img>
                </div>
                <div className="user">
                    <img src={placeholder}></img>
                </div>
                <div className="user">
                    <img src={placeholder}></img>
                </div>
                <div className="user">
                    <img src={placeholder}></img>
                </div>
                <div className="user">
                    <img src={placeholder}></img>
                </div>
                <div className="user">
                    <img src={placeholder}></img>
                </div>
                <div className="user">
                    <img src={placeholder}></img>
                </div>
                <div className="user">
                    <img src={placeholder}></img>
                </div>
                <div className="user">
                    <img src={placeholder}></img>
                </div>
            </div>
            <div className="bar-chart"></div>
        </div>
    );
};

export default OfficedIn;