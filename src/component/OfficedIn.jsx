// Bottom Right Section
import React from 'react';
import placeholder from '../assets/images/user-ph.png';
import '../assets/styles/OfficedIn.css';

const OfficedIn = () => {
    return (
        <div className='officed-in'>
            <h1>OfficedIn</h1>
            <button className="toggle-btn">toggle</button>
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