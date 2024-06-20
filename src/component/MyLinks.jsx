import '../assets/styles/MyLinks.css'; 

import { DDSButton } from "@dds/react";
import LinkCards from './LinkCards';

const MyLinks = () => {

    return (
        <div className='my-links'>
            <h1>My Links</h1>

            <DDSButton className="addLink" size="md" >Add New Link</DDSButton>
            <div className='cardsSection'>
                <LinkCards/>
                <LinkCards/><LinkCards/><LinkCards/><LinkCards/>
            </div>

        </div>
    );
};

export default MyLinks;