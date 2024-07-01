import User from "./person.svg";
import "./UserIcon.css";

const UserIcon = () => {
    return (
        <div className="user-icon-container">
            <img src={User} alt="" />
            
        </div>
    );
};

export default UserIcon;