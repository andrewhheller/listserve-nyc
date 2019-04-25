import React from 'react';

import FormSub from './FormSub';

const Main = ({ createEmail }) => {

  return (
    <section id="showcase" className="showcase-class">
      <div id="darken">
        <div className="container">
          <div className="row">
            <div className="col-12">
              <div id="row-spacer"></div>
            </div>
          </div>
          <div className="row">
            <div className="col-12">
              <div id="transparent-box">
                <br />
                <br />
                {/* <br /> */}
                <h1>listserve NYC</h1>
                <h2>What would you say to all of New York City?</h2>
                <br />
              </div>
            </div>
          </div>
          <FormSub createEmail={createEmail} />
        </div>
      </div>
	  </section>
  )

}


export default Main;
