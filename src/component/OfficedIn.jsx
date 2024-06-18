// Bottom Right Section
import React from 'react';

const OfficedIn = () => {
    return (
        <div className='officed-in'>
            <h1>OfficedIn</h1>
            <button className="toggle-btn">toggle</button>
            <div className="user-icons">
                {users.map((user) => (
                    <div key={user.name} className="user">
                        <img src={user.profile_pic} alt={user.name} className="user-img"/>
                    </div>
                ))}
            </div>
            <div className="bar-chart"></div>
        </div>
    );
};

export default OfficedIn;