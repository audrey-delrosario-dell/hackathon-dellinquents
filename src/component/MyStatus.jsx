// Top Right Section 
import React, { useEffect, useRef, useState } from 'react';
import {DDSButton} from "@dds/react";
import "../assets/styles/MyStatus.css";
import LunchStatus from './LunchStatus';
import OfficeStatus from './OfficeStatus';
import TagRadioBtnGroup from './TagRadioBtnGroup';
import TagsSection from './TagsSection';
import Button from './Button';

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
            <h2>My Status</h2>
            {/* Lunch status section  */}
            <LunchStatus isEditMode={!showSavedBtn}/>

            {/* Office Section  */}
            <OfficeStatus isEditMode={!showSavedBtn}/>

            {/* Tags Section  */}
            <TagsSection isEditMode={!showSavedBtn}/>
            <div className='save-btns'>
                
                {!showSavedBtn && (<Button onClick={handleClickSave} className='std' label='Save Changes' />)}
                {showSavedBtn && (<Button onClick={handleClickEdit} className="outline" label='Edit Status'/>)}
            </div>
            

        </div>


    ); 
};

export default MyStatus;