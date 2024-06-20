// Bottom Right Section
import React, {useRef, useEffect, useState} from 'react';
import placeholder from '../assets/images/user-ph.png';
import '../assets/styles/OfficedIn.css';
import { DDSDropdown, DDSButton, DDSSwitch } from "@dds/react";
import users from '../users-database';

const OfficedIn = () => {

    const switchRef = useRef(null);
    
    const tagColors ={
        "chat-tag": '#f69ac6',
        "coffee-tag": '#e6ac28', //orange
        "snack-tag": '#0468a1', // light 
        "game-tag": '#c0dd78',
        "working-tag": '#97dcf4',
        "busy-tag": '#fe6873'
    }

    const [borderColors, setBorderColors] = useState({});
    const [hoveredUserId, setHoveredUserId] = useState(null);
    const [remote, setRemote] = useState(true);

    const [options] = useState([
        { label: "All", value: "All" },
        { label: "Monday", value: "Monday" },
        { label: "Tuesday", value: "Tuesday" },
        { label: "Wednesday", value: "Wednesday" },
        { label: "Thursday", value: "Thursday" },
        { label: "Friday", value: "Friday" },
        { label: "On Leave", value: "Leave" }
      ]);

    const dayRef = useRef(null);
    const [selectedDay, setSelectedDay] = useState(null);

    const handleDayChange = () => {
        setSelectedDay(dayRef.current.value);
        console.log(selectedDay);
    }

    useEffect(() => {  
        console.log(dayRef.current.value); 
    }, [dayRef]); 


    useEffect(() => { 
        const checkTags =() => {
            let newBorderColors = {};
            for(let user of users){
                for(let tag of Object.keys(user.tags)){
                    if(user.tags[tag]){
                        newBorderColors[user.id] = tagColors[tag];
                        break;
                    }
                    else{
                        newBorderColors[user.id] = 'white'; //if no tag is true
                    }
                } 

            }
    
            setBorderColors(newBorderColors);
        };
    
        checkTags();
    
    }, [users]); // re-run effect when users change


    const handleRemoteChange = () =>{
        console.log(remote);
       setRemote(!remote);
    }

    return (
        <div className='officed-in'>
            <h1>OfficedIn</h1>
            <div className="tools-o">
                <div className="days-group">
                    <DDSDropdown 
                        label={{ children: "Day", visualIndicator: true }} 
                        required 
                        options={options} 
                        size="sm"
                        ref={dayRef}
                    />
                    <DDSButton
                        icon="check"
                        iconOnly
                        className="day-btn" 
                        onClick={handleDayChange}
                    />
                </div>
                <DDSSwitch ref={switchRef} displayControlValues={false} onChange={handleRemoteChange}/>
            </div>
            
            <div className="user-icons">
            {!remote && users.filter(user => user.office_status[selectedDay] || selectedDay === 'All').map(user => (
                <div 
                    className="user" 
                    key={user.id} 
                    onMouseOver={() => setHoveredUserId(user.id)}
                    onMouseOut={() => setHoveredUserId(null)}
                >
                    <img src={user.profile_pic ? user.profile_pic : placeholder} style={{borderColor: borderColors[user.id] || 'white'}}></img>
                    <p className='hover-user' style={{opacity: hoveredUserId === user.id ? 1 : 0}}>{user.name}</p>
                </div>
            ))}

            {remote && users.filter(user => (!user.office_status[selectedDay] && !user.office_status['Leave']) || selectedDay === 'All').map(user => (
                <div 
                    className="user" 
                    key={user.id} 
                    onMouseOver={() => setHoveredUserId(user.id)}
                    onMouseOut={() => setHoveredUserId(null)}
                >
                    <img src={user.profile_pic ? user.profile_pic : placeholder} style={{borderColor: borderColors[user.id] || 'white'}}></img>
                    <p className='hover-user' style={{opacity: hoveredUserId === user.id ? 1 : 0}}>{user.name}</p>
                </div>
            ))}
            </div>
        </div>
    );
};

export default OfficedIn;