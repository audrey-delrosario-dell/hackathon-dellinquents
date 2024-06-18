// Top Left section
import React, {useRef, useEffect, useState} from 'react';
import placeholder from '../assets/images/user-ph.png';
import menu from '../assets/images/food-menu.png';
import item from '../assets/images/cover-food.png';
import '../assets/styles/LunchedIn.css';
import users from '../users-database';
import { DDSDropdown } from "@dds/react";

const LunchedIn = () => {

    const [options] = useState([
        { label: "11:00", value: "1100" },
        { label: "11:30", value: "1130" },
        { label: "12:00", value: "1200" },
        { label: "12:30", value: "1230" },
        { label: "13:00", value: "1300" },
        { label: "13:30", value: "1330" },
        { label: "14:00", value: "1400" },
        { label: "14:30", value: "1430" },
        { label: "15:00", value: "1500" }
      ]);

    const timeRef = useRef(null);
    const [selectedLunchTime, setSelectedLunchTime] = useState(null);

    useEffect(() => {  
        console.log(timeRef.current); 
        setSelectedLunchTime(timeRef.current.value);
    }, []);



    return (
        <div className="lunched-in">
            <div className="title-l">
                <DDSDropdown label={{ children: "Time", visualIndicator: true }} required options={options} ref={timeRef} size="sm"/>
                <h1>LunchedIn</h1>
                <div className="title-icon-bg">
                    <img src={menu} className='title-icon'/>
                </div>
                <div className="title-icon-bg">
                    <img src={item} className='title-icon'/>
                </div>     
            </div>
            <div className="user-icons">
            {users.filter(user => user.lunch_time === selectedLunchTime).map(user => (
                <div className="user" key={user.id}>
                    <img src={placeholder} style={{borderColor: borderColors[user.id] || 'white'}}></img>
                    <div className="status" style={{backgroundColor: statusColors[user.id] || 'white', visibility: visibility[user.id] || 'visible'}}></div>
                </div>
            ))}
        </div>
        </div>
    );
};

export default LunchedIn;