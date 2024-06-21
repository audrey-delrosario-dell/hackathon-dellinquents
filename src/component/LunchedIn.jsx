// Top Left section
import React, {useRef, useEffect, useState} from 'react';
import placeholder from '../assets/images/user-ph.png';
import menu from '../assets/images/food-menu.png';
import item from '../assets/images/cover-food.png';
import '../assets/styles/LunchedIn.css';
import users from '../users-database';
import { DDSDropdown, DDSButton } from "@dds/react";
//to do: add hover
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
    const [hoveredMenu, setHoveredMenu] = useState(false);
    const [hoveredItem, setHoveredItem] = useState(false);
    const [hoveredUserId, setHoveredUserId] = useState(null);
    const handleTimeChange = () => {
        setSelectedLunchTime(timeRef.current.value);
        console.log(selectedLunchTime);
    }
    useEffect(() => {  
        console.log(timeRef.current.value); 
    }, [timeRef]); 
    return (
        <div className="lunched-in">
            <h2>LunchedIn</h2>
            <div className="tools">
                <div className="time-group">
                    <DDSDropdown 
                    label={{ children: "Time", visualIndicator: true }} 
                    required 
                    options={options} 
                    size="sm"
                    ref={timeRef}
                    />
                    <DDSButton
                        icon="check"
                        iconOnly
                        className="time-btn" 
                        onClick={handleTimeChange}
                    />
                </div>
                
                <div className="button-group">
                    <DDSButton
                        iconOnly
                        className="menu-icon-bg"
                        onMouseOver={() => setHoveredMenu(true)}
                        onMouseOut={() => setHoveredMenu(false)}
                    >
                        <img src={menu} className='menu-icon'/>
                    </DDSButton>
                    <p className='hover-menu' style={{opacity: hoveredMenu ? 1 : 0}}>View Today's Menu</p>
                    <DDSButton
                        iconOnly
                        className="menu-icon-bg"
                        onMouseOver={() => setHoveredItem(true)}
                        onMouseOut={() => setHoveredItem(false)}
                    >
                        <img src={item} className='menu-icon'/>
                    </DDSButton>
                    <p className='hover-item' style={{opacity: hoveredItem ? 1 : 0}}>Order an Alternative Meal</p>
                </div>     
            </div>

            <div className="user-icons-l">
                {users.filter(user => user.lunch_time === selectedLunchTime).map(user => (
                    <div className="user-l" 
                        key={user.id}
                        onMouseOver={() => setHoveredUserId(user.id)}
                        onMouseOut={() => setHoveredUserId(null)}
                    >
                        <img src={user.profile_pic ? user.profile_pic : placeholder}></img>
                        <div className='hover-user-l' style={{opacity: hoveredUserId === user.id ? 1 : 0}}>{user.name}</div>
                        
                    </div>
                ))}
            </div>
        </div>
    );
};
export default LunchedIn;