
import { useState } from 'react';
import LocationIcon from '../assets/icons/LocationIcon';
import MenuIcon from '../assets/icons/MenuIcon';
import '../assets/styles/Header.css'; 
import UserIcon from './../assets/icons/UserIcon';


const Header = () => {

    const [isClicked, setIsClicked] = useState(false);
    const handleClick = () => {
        setIsClicked(!isClicked);
        alert("icon clicked");
    }

    return (
        <div>
            <div className="header-container">
                <MenuIcon/>
                <h1 className='InterNex'>Intern Nexus</h1>
                <div className='right-icons'>
                    <LocationIcon onClick={handleClick}/>
                    <UserIcon/>
                </div>  
            </div>
                {isClicked && (
                    <select>
                        <option value="Location1">Location 1</option>
                        <option value="Location2">Location 2</option>
                    </select>
                )}
        </div>
        
    );
};

export default Header;