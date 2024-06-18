import '../assets/styles/MyLinks.css'; 

import { DDSButton } from "@dds/react";

const MyLinks = () => {
    return (
        <div className='my-links'>
            <h1>My Links</h1>

            <DDSButton className="addLink" size="md">Add New Link</DDSButton>

        </div>
    );
};

export default MyLinks;