import React from 'react';

const SocialNav = () => {

  return (
    <div id="logo">
      <a href="https://www.facebook.com/andrewhheller" target="_blank" className="fa fa-facebook fa-lg"></a>
      <a href="https://www.twitter.com/andrewhheller" target="_blank" className="fa fa-twitter fa-lg"></a>
      <p className="share-pipe">|</p>
      <a href="http://www.twitter.com/share?url=http://www.google.com/" target="_blank"className="tweet-button">Tweet</a>
    </div>
  )

}


export default SocialNav;
