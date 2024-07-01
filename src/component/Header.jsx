
import { useState } from 'react';
import LocationIcon from '../assets/icons/LocationIcon';
import '../assets/styles/Header.css'; 
import UserIcon from './../assets/icons/UserIcon';
import logo from './../assets/images/Dell_Technologies_logo.png';
import UserMenu from './UserMenu';


const Header = () => {

    const [isClicked, setIsClicked] = useState(false);
    const handleClick = () => {
        setIsClicked(!isClicked);
        alert("icon clicked");
    }

    return (
        <div>
            <div className="header-container">
                <div className="group">
                    <UserMenu/>
                    <img src={logo} className='logo'/>
                </div>
                <h1 className='InterNex'>Intern Nexus</h1>
                <div className='right-icons'>
                    <LocationIcon onClick={handleClick}/>
                    <UserIcon/>
                </div>  
            </div>
        </div>
        
    );
};

export default Header;