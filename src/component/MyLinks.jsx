import '../assets/styles/MyLinks.css'; 

import { DDSButton } from "@dds/react";
import LinkCards from './LinkCards';
import { useState } from 'react';
import Button from "react-bootstrap/Button";

const MyLinks = ({isEditMode}) => {

    const defaultLinks = [
        {title: "My Learning", text: "Dell Learning Resources", url: "https://dell.sabacloud.com/Saba/saml/login/alias/dell_sp/sp?token=ad31b1aa-15fc-4de7-8c63-4f0933777cd7&idp=Dell.SAML2.0&ESigRequest=false"},
        {title: "Workday", text: "Assigned Tasks & Logging Hours", url: "https://www.myworkday.com/dell/d/home.htmld"},
        {title: "My IT", text: "Laptop Setup Guide & IT Help", url: "https://dell.service-now.com/esc?id=emp_taxonomy_topic_my_it&topic_id=5066a14947a41dd0d1727e37536d43cb"},
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
           <h1>My Resources</h1>
            <button className='btn-add-link' onClick={addNewLink}>Add New Link</button>
            <div className='cardsSection'>
                {links.map((link, index) => (
                    <LinkCards key={index} title={link.title} text={link.text} url={link.url}/>
                ))}
            </div>
        </div>
    );
};

export default MyLinks;