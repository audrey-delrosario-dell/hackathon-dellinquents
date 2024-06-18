// Top Right Section 
import React, { useEffect, useRef } from 'react';
import LunchSelect from './LunchSelect';
import {DDSRadioButton, DDSRadioGroup, DDSButton} from "@dds/react";
import "../assets/styles/MyStatus.css";
import LunchStatus from './LunchStatus';
import OfficeStatus from './OfficeStatus';
import TagRadioBtnGroup from './TagRadioBtnGroup';
import TagsSection from './TagsSection';

const MyStatus = () => {
    const radioBtnRef = useRef(null);
    useEffect(() => {
        // The console log should return { wrapper, ... }  
        console.log(radioBtnRef.current); 
    }, []);



    return (
        <div className='my-status'>
            <h1>My Status</h1>
            {/* Lunch status section  */}
            <LunchStatus/>

            {/* Office Section  */}
            <OfficeStatus/>

            {/* Tags Section  */}
            <TagsSection/>



        </div>


    ); 
};

export default MyStatus;