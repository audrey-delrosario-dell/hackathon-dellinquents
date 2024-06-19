import { DDSRadioButton, DDSRadioGroup  } from "@dds/react";
import '../assets/styles/TagRadioBtnGroup.css'; 

const TagRadioBtnGroup = () => {
    return (
        <div>
            <DDSRadioGroup className="btnGroup">
                <DDSRadioButton name="radio" value="chat" label="Chat" size="sm" />
                <DDSRadioButton name="radio" value="coffeebreak" label="Coffee Break" size="sm" />
                <DDSRadioButton name="radio" value="snack" label="Snack Break" size="sm" />
                <DDSRadioButton name="radio" value="game" label="Game/Pool" size="sm" />
                <DDSRadioButton name="radio" value="game" label="Work Buddy" size="sm" />
            </DDSRadioGroup>
        </div>
    );
};

export default TagRadioBtnGroup;