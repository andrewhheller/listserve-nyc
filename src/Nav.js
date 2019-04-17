import React from 'react';
import ScrollSpy from 'react-scrollspy';

import respNavIcon from './respNavIcon';

const Nav = () => {

  return (
    <div>
      <div className="icon">
        <a href="javascript:void(0);" onClick={() => respNavIcon()}>
          <svg width="30" height="30">
            <path d="M0,5 30,5" stroke="#595959"
            strokeWidth="3"/>
            <path d="M0,14 30,14" stroke="#595959"
            strokeWidth="3"/>
            <path d="M0,23 30,23" stroke="#595959"
            strokeWidth="3"/>
          </svg>
        </a>
      </div>
      <nav className="topnav" id="myTopnav">
        <ScrollSpy
          items={ ['showcase', 'how-it-works', 'FAQ', 'contact']}
          componentTag={'nav'}
          currentClassName={'active'}
        >
          <a className="nav-link" href="#" onClick={() => respNavIcon()}>Home</a>
          <a className="nav-link" href="#how-it-works" onClick={() => respNavIcon()}>How it Works</a>
          <a className="nav-link" href="#FAQ" onClick={() => respNavIcon()}>FAQ</a>
          <a className="nav-link" href="#contact" onClick={() => respNavIcon()}>Contact</a>
        </ScrollSpy>
      </nav>
    </div>
  )
}


export default Nav;
