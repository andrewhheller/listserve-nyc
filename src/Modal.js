import React from 'react';

// const modal = document.getElementById('myModal');

// const showModal = () => {
//   modal.style.display = 'block';
// }

const showModal = () => {

	const modal = document.getElementById('myModal');
	console.log(modal)
  // modal.style.display = 'block';

  return (
    <div id="myModal" className="modal">
    	<div className="modal-content">
		    <div className="modal-content-text">
      		<h2>Check your inbox</h2>
      		<p>We just emailed a confirmation link to [email]. Click the link to confirm your subscription!</p>
      		<button className="closeBtn">OK</button>
          <br />
      		<img src="img/email-dove.png" style={{width: "50%"}} />
  		  </div>
  	  </div>
    </div>
  )

}




export default showModal;
// export {
//   modal,
//   showModal
// }
