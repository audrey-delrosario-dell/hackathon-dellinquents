import { useState } from "react";
import TagRadioBtnGroup from "./TagRadioBtnGroup";
import { Col,Row, Container } from "react-bootstrap";

const TagsSection = ({isEditMode}) => {
    const [selectedTag, setSelectedTag] = useState("");
    const handleTagChange = (tag) => {
        setSelectedTag(tag);
    };

    return (
        <Container fluid>
            <Row>
            <Col sm={4}><h5>My Tags</h5></Col>
            <Col sm={8}>{isEditMode? 
                (<p>Up for... <TagRadioBtnGroup isEditMode={isEditMode} electedTag={selectedTag}
                                handleTagChange={handleTagChange}/></p>) : (<p>Up for a {selectedTag}</p>)}
            </Col>
            </Row>
        </Container>
    );
};

export default TagsSection;