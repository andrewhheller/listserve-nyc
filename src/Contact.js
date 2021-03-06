import React from 'react';

import SocialContact from './SocialContact';
import FormContact from './FormContact';

const Contact = ({ contactMail }) => {
  
  return (
    <section id="contact">
      <h1 className="section-title">Contact</h1>
      <div className="col-4" id="contact-responsive">
        <SocialContact />
      </div>
      <div className="col-8" id="contact-responsive">
        <FormContact contactMail={ contactMail }/>
      </div>
      <br />
      <br />
      <br />
      <br />
      <br />
    </section>
  )

}

export default Contact;
