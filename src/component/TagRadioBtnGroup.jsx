import React from "react";
import { DDSRadioButton, DDSRadioGroup } from "@dds/react";
import "../assets/styles/TagRadioBtnGroup.css";

const TagRadioBtnGroup = ({ isEditMode, selectedTag, handleTagChange }) => {
    const tagOptions = [
        { value: "chat", label: "Chat" },
        { value: "coffee break", label: "Coffee Break" },
        { value: "snack", label: "Snack Break" },
        { value: "game", label: "Game/Pool" },
        { value: "work buddy", label: "Work Buddy" },
    ];

    return (
        <div>
            {isEditMode ? 
                (
                    <DDSRadioGroup legend="" className="btnGroup">
                        {tagOptions.map((option) => (
                            <DDSRadioButton
                                key={option.value}
                                name="radio"
                                value={option.value}
                                label={option.label}
                                size="sm"
                                checked={selectedTag === option.value}
                                onChange={() => handleTagChange(option.value)}
                            />
                        ))}
                    </DDSRadioGroup>
                )
                :
                (
                    <p className="selected-tag" style={{fontWeight:"bold"}}>{selectedTag}</p>
                )
            }
        </div>
    );
};

export default TagRadioBtnGroup;
