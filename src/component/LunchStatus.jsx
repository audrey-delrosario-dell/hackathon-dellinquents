import "../assets/styles/LunchStatus.css";
import React, { useState } from "react";
import { DDSDropdown } from "@dds/react";
import { InputLabel, MenuItem, Select } from "@mui/material";

const LunchStatus = ({ isEditMode }) => {
    const [selectedTime, setSelectedTime] = useState('11:00');  // Add a new state for selected time

    const handleSelectTime = (e) => {
        const selectedValue = e.target.value;
        const selectedOption = options.find((option) => option.value === selectedValue);
        setSelectedTime(selectedOption.label);
    };

    const options = [
        { label: "11:00", value: "1100" },
        { label: "11:30", value: "1130" },
        { label: "12:00", value: "1200" },
        { label: "12:30", value: "1230" },
        { label: "13:00", value: "1300" },
        { label: "13:30", value: "1330" },
        { label: "14:00", value: "1400" },
        { label: "14:30", value: "1430" },
        { label: "15:00", value: "1500" },
    ];

    return (
        <div>
            <div className="dds__row">
                <div className="dds__col--1 dds__col--sm-3 dds__col--md-4 dds__mb-3">
                    <div className="dds-sb__sample-box">
                        <div className="tags-container">
                            <h5>My Lunch Status</h5>
                        </div>
                    </div>
                </div>
                <div className="dds__col--1 dds__col--sm-3 dds__col--md-6 dds__mb-3">
                    <div className="dds-sb__sample-box">
                        {isEditMode ? 
                            (
                                <div>
                                    <InputLabel id="demo-simple-select-label">Select Lunch Time</InputLabel>
                                    <select onChange={handleSelectTime} className="lunch-time-dropdown" title="Choose lunch time">
                                        {options.map((option) => (
                                            <option
                                                key={option.value}
                                                value={option.value}
                                                selected={selectedTime === option.label}  // Set selected attribute
                                            >
                                                {option.label}
                                            </option>
                                        ))}
                                    </select>
                                </div>
                            ) 
                            :
                            (
                                <p>{selectedTime}</p>
                            )
                        }
                    </div>
                </div>
            </div>
        </div>
    );
};

export default LunchStatus;

