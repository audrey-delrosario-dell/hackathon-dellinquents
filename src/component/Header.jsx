
import LocationIcon from '../assets/icons/LocationIcon';
import MenuIcon from '../assets/icons/MenuIcon';
import '../assets/styles/Header.css'; 
import UserIcon from './../assets/icons/UserIcon';


const Header = () => {
    return (
        <div className="header-container">
            <MenuIcon/>
            <h1 className='InterNex'>Intern Nexus</h1>
            <div className='right-icons'>
                <LocationIcon/>
                <UserIcon/>
            </div>
            
        </div>
    );
};

export default Header;