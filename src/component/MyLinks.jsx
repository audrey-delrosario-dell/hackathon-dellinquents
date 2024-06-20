import '../assets/styles/MyLinks.css'; 

import { DDSButton } from "@dds/react";
import LinkCards from './LinkCards';
import { useState } from 'react';

const MyLinks = () => {

    const defaultLinks = [
        {title: "My Learning", text: "Dell Learning Resources", url: "https://dell.sabacloud.com/Saba/saml/login/alias/dell_sp/sp?token=ad31b1aa-15fc-4de7-8c63-4f0933777cd7&idp=Dell.SAML2.0&ESigRequest=false"},
        {title: "WorkDay", text: "To fill in weekly time entries", url: "https://www.myworkday.com/dell/d/home.htmld"},
        {title: "Sharepoint", text: "All Dell related news", url: "https://dell.sharepoint.com/sites/InsideDellTechnologies/?OR=Teams-HL&CT=1718892421866&clickparams=eyJBcHBOYW1lIjoiVGVhbXMtRGVza3RvcCIsIkFwcFZlcnNpb24iOiI0OS8yNDA1MTYyMjIyMCIsIkhhc0ZlZGVyYXRlZFVzZXIiOmZhbHNlfQ%3D%3D"},
        
    ];
    const [links, setLinks] = useState(defaultLinks);

    const addNewLink = () => {
        const title = prompt('Enter the a title');
        const text = prompt('Enter a description');
        const url = prompt('Enter the link URL')
        const newLink ={
            title, 
            text,
            url,
        };

        setLinks([...links, newLink]); 
    }

    


    return (
        <div className='my-links'>
            <h1>My Links</h1>
            <DDSButton className="addLink" size="md" onClick={addNewLink} >Add New Link</DDSButton>
            <div className='cardsSection'>
                {links.map((link, index) => (
                    <LinkCards key={index} title={link.title} text={link.text} url={link.url}/>
                ))}
            </div>
        </div>
    );
};

export default MyLinks;