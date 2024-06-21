import { useState } from "react";
import "./LocationIcon.css";
import Pin from "../images/location-pin.svg";

const LocationIcon = () => {
    const [isHovered, setIsHovered] = useState(false);
    const [isClicked, setIsClicked] = useState(false);


  
    return (
        <div>
            <div className="loc-container">
                <img src={Pin} alt=""/>
            </div>
        </div>
    );
};

export default LocationIcon;