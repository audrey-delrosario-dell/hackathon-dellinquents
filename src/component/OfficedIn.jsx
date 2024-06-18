// Bottom Right Section
import React, {useRef, useEffect, useState} from 'react';
import placeholder from '../assets/images/user-ph.png';
import '../assets/styles/OfficedIn.css';
import { DDSSwitch } from "@dds/react";
import users from '../users-database';

const OfficedIn = () => {

    const switchRef = useRef(null);
    
    const tagColors ={
        "chat-tag": 'red',
        "coffee-tag": 'blue',
        "snack-tag": 'green',
        "game-tag": 'purple',
        "working-tag": 'gray',
        "busy-tag": 'yellow'
    }

    const [statusColors, setStatusColors] = useState({});
    const [borderColors, setBorderColors] = useState({});
    const [visibility, setVisibility] = useState({});

    useEffect(() => { 
        const checkTags =() => {
            let newStatusColors = {};
            let newVisibility = {};
            for(let user of users){
                for(let tag of Object.keys(user.tags)){
                    if(user.tags[tag]){
                        newStatusColors[user.id] = tagColors[tag];
                        newVisibility[user.id] = 'visible';
                        break;
                    }
                    else{
                        newStatusColors[user.id] = 'white'; //if no tag is true
                        newVisibility[user.id] = 'hidden';
                    }
                } 

            }
    
            setStatusColors(newStatusColors);
            setVisibility(newVisibility);
        };
    
        checkTags();

        const checkOfficeStatus =() => {
            let newBorderColors = {};
            const today = new Date().toLocaleString('en-us', {  weekday: 'long' });
            for(let user of users){
                if(user.office_status["Leave"]){
                    newBorderColors[user.id] = 'purple';
                } else if(user.office_status[today]){
                    newBorderColors[user.id] = 'blue';
                } else {
                    newBorderColors[user.id] = 'grey';
                }
            }
    
            setBorderColors(newBorderColors);
        };
    
        checkOfficeStatus();
    
    }, [users]); // re-run effect when users change



    return (
        <div className='officed-in'>
            <div className="title">
                <h1>OfficedIn</h1>
                <DDSSwitch ref={switchRef} displayControlValues={false}/>
            </div>
            <div className="user-icons">
                {users.map(user => (
                    <div className="user" key={user.id}>
                        <img src={user.profile_pic ? user.profile_pic : placeholder} style={{borderColor: borderColors[user.id] || 'white'}}></img>
                        <div className="status" style={{backgroundColor: statusColors[user.id] || 'white', visibility: visibility[user.id] || 'visible'}}></div>
                    </div>
                ))}
            </div>
            <div className="bar-chart"></div>
        </div>
    );
};

export default OfficedIn;