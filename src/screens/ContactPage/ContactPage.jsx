import React from 'react';
import {ButtonContact, EmailLink} from '../../components/Contact/index';

const ContactPage = () => (
    <div className="flex-container">
        <h1 className ="contact-title">Contact me</h1>
        <div className="contact-container">
            <EmailLink/>
            <hr width="100"/>
            <ButtonContact/>
        </div>
    </div>
);


export default ContactPage;
