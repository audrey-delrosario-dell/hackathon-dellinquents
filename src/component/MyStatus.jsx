// Top Right Section 
import React, { useEffect, useRef, useState } from 'react';
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

    const [showSavedBtn, setShowSavedBtn] = useState(false);
    const handleClickSave = () => {
        setShowSavedBtn(true);
    }
    const handleClickEdit = () => {
        setShowSavedBtn(false);
    }



    return (
        <div className='my-status'>
            <h1>My Status</h1>
            {/* Lunch status section  */}
            <LunchStatus/>

            {/* Office Section  */}
            <OfficeStatus/>

            {/* Tags Section  */}
            <TagsSection/>

            <DDSButton kind="secondary" size="sm" onClick={handleClickEdit}>Edit Status</DDSButton>
            {!showSavedBtn && (<DDSButton size="sm" onClick={handleClickSave}>Save Changes</DDSButton>)}
            {showSavedBtn && (<DDSButton icon="check" iconPlacement="end" size="sm" className="savedBtn" >Changes Saved</DDSButton>)}

        </div>


    ); 
};

export default MyStatus;