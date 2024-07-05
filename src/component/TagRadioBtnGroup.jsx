import React from "react";
import { DDSRadioButton, DDSRadioGroup } from "@dds/react";
import "../assets/styles/TagRadioBtnGroup.css";
import RadioButton from "./RadioButton";
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import { CollectionPlay } from "react-bootstrap-icons";

const TagRadioBtnGroup = ({ isEditMode, selectedTag, handleTagChange }) => {
    const tagOptions = [
        { value: "chat", label: "Chat" },
        { value: "coffee break", label: "Coffee Break" },
        { value: "snack", label: "Snack Break" },
        { value: "game", label: "Game/Pool" },
        { value: "work buddy", label: "Work Buddy" },
    ];
    return (
        <Container>
            <Row>
            {isEditMode ? 
                ( tagOptions.map((option) => (
                        <Col md='auto'>
                            {/* *** THESE BUTTON WILL SAVE THE DATA BUT THE CIRCLE WONT CHANGE COLOURS **** */}
                            <RadioButton
                            value={option.value}
                            label={option.label}
                            checked={selectedTag === option.value}
                            onChange={() => handleTagChange(option.value)}
                            />
                        </Col>
                    )))
                :
                (<p className="selected-tag" style={{fontWeight:"bold"}}>{selectedTag}</p>)
            }
                <Col>

                </Col>
            </Row>
        </Container>
    );
};

export default TagRadioBtnGroup;
