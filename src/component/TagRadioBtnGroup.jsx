import { DDSRadioButton, DDSRadioGroup  } from "@dds/react";

const TagRadioBtnGroup = () => {
    return (
        <div>
            <DDSRadioGroup legend="Up for a">
                <div className='row'>
                    <div className='col'>
                        <DDSRadioButton value="chat" label="Chat" size="sm" />
                        <DDSRadioButton value="coffeebreak" label="Coffee Break" size="sm" />
                    </div>
                    <div className='col'>
                        <DDSRadioButton value="snack" label="Snack Break" size="sm" />
                        <DDSRadioButton value="game" label="Game/Pool" size="sm" />

                    </div>
                    <div className='col'>
                        <DDSRadioButton value="game" label="Work Buddy" size="sm" />

                    </div>
                </div>
            </DDSRadioGroup>
        </div>
    );
};

export default TagRadioBtnGroup;