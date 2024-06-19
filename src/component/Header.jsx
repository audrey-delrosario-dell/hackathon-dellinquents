import LocationIcon from '../assets/icons/LocationIcon';
import UserIcon from '../assets/icons/UserIcon';
import '../assets/styles/Header.css'; 
import MenuIcon from './../assets/icons/MenuIcon';

const Header = () => {
    return (
        <div className="header-container">
            <MenuIcon className="menu-icon"/>
            <h1 className='InterNex'>Intern Nexus</h1>
            <div className='right-icons'>
                <LocationIcon className="location-icon"/>
                <UserIcon className="user-icon"/>
            </div>
            
        </div>
    );
};

export default Header;