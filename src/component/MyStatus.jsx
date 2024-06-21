// Top Right Section 
import React, { useEffect, useRef, useState } from 'react';
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

    const toggleEditMode = () => {
        setEditMode(!editMode);
    };

    const handleStatusChange = (day, newStatus) => {
        setStatus((prevStatus) => ({
            ...prevStatus,
            [day]: newStatus,
        }));
    };  


    return (
        <div className='my-status'>
            <h1>My Status</h1>
            {/* Lunch status section  */}
            <LunchStatus isEditMode={!showSavedBtn}/>

            {/* Office Section  */}
            <OfficeStatus isEditMode={!showSavedBtn}/>

            {/* Tags Section  */}
            <TagsSection isEditMode={!showSavedBtn}/>
            <div className='save-btns'>
                <DDSButton kind="secondary" size="sm" onClick={handleClickEdit} className="edit-stat-btn">Edit Status</DDSButton>
                {!showSavedBtn && (<DDSButton size="sm" onClick={handleClickSave}>Save Changes</DDSButton>)}
                {showSavedBtn && (<DDSButton icon="check" iconPlacement="end" size="sm" className="savedBtn" >Changes Saved</DDSButton>)}
            </div>
            

        </div>


    ); 
};

export default MyStatus;