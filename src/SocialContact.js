import React from 'react';

import { birdOfPrey } from './utils';


const SocialContact = () => {

  return (
    <div className="social-contact">
      <p className="follow-us">Follow Us!</p>

      <p>
        <a href="https://www.facebook.com" target="_blank">
          <img className="center" src="./img/fb-icon-32.png" alt="facebook icon" />
          facebook.com/listservenyc
        </a>
      </p>

      <p>
        <a href="https://www.twitter.com" target="_blank">
          <img className="center" src="./img/twitter-icon-32.png" alt="twitter icon" />
          twitter.com/listservenyc
        </a>
      </p>
      
      <p id="email-text">
        <a href={`mailto:${birdOfPrey}`}>
          <img className="center" src="./img/email-icon-32.png" alt="email icon" />
          {birdOfPrey}
        </a>
      </p>

    </div>  
  )

}

export default SocialContact;
