import React, { Component } from 'react';

import axios from 'axios';

import Header from './Header';
import Main from './Main';
import HowItWorks from './HowItWorks';
import FAQ from './FAQ';
import Contact from './Contact';
import Footer from './Footer';
import Modal from './Modal';

class App extends Component {

  constructor() {
    super();

  }

  componentDidMount() {

    const bounding = document.getElementById('FAQ').getBoundingClientRect();
  
    window.addEventListener('scroll', () => {
      // console.log(bounding)
      if (
        bounding.top < window.innerHeight
      ) {
        // console.log('In the viewport!');
      } else {
        // console.log('Not in the viewport');
      }
      
    })
  }

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
        <Main createEmail={ createEmail } />
        <HowItWorks />
        <FAQ />
        <Contact contactMail = { contactMail } />
        <Footer />
        {/* <Modal /> */}
      </div>
    )
  }

}

export default App;
