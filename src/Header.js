import React from 'react';

import SocialNav from './SocialNav';
import Nav from './Nav';

const Header = () => {
  return (
    <header>
      <div className="container">
        <SocialNav />
        <Nav />
      </div>
    </header>
  )

}

export default Header;
