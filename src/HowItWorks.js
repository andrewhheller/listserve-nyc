import React from 'react';

const HowItWorks = () => {

  return (
    <section id="how-it-works">
      <div className="container">
        <h1 className="section-title" id="how-it-works">How it Works</h1>
        <div className="row">
          <div className="col-4">
            <img className="hiw-image-scatter" src="img/email-scatter.png" />
            <p className="hiw-caption">When subscribed, you are joining our growing list of email addresses.</p>
          </div>
          <div className="col-4">
            <img className="hiw-image-trophy" src="img/email-trophy.png" />
            <p className="hiw-caption">Each week, one person is chosen to send an email to all other subscribers!</p>
          </div>
          <div className="col-4">
            <img className="hiw-image-shield" src="img/email-privacy-blue.png" />
            <p className="hiw-caption">If selected, you can choose to share your email address or keep it  private.</p>
          </div>
        </div>
        <br />
        <a href="#top">Top of Page</a>
        <br />
        <br />
        <br />
      </div>
	  </section>
  )

}

export default HowItWorks;
