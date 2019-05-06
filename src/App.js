import React, { Component } from 'react';

import axios from 'axios';

import Header from './Header';
import Main from './Main';
import HowItWorks from './HowItWorks';
import FAQ from './FAQ';
import Contact from './Contact';
import Footer from './Footer';


class App extends Component {

  createEmail(email) {
    return axios.post('/api/sub', email)
      .then(response => response.data)
      .catch(error => console.log(error))
  };

  contactMail(contact) {
    return axios.post('/api/contact', contact)
      .then(response => response.data)
      .catch(error => console.log(error))
  };

  render() {
    const { createEmail, contactMail } = this;

    return(
      <div>
        <Header />
        <Main createEmail={ createEmail } s/>
        <HowItWorks />
        <FAQ />
        <Contact contactMail = { contactMail } />
        <Footer />
      </div>
    )
  }

}

export default App;
