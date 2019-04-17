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
            <p className="hiw-caption">Each week, one lucky person is selected to send an email to all other subscribers!</p>
          </div>
          <div className="col-4">
            <img className="hiw-image-shield" src="img/email-privacy-blue.png" />
            <p className="hiw-caption">If selected, you can choose if you want your email address visible or kept private.</p>
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
