import React from 'react';





const Modal = ({ show, modalEmail, handleClose }) => {

	const toggleModal = show ? "modal display-block" : "modal display-none"

  return (
    <div className={ toggleModal }>
    	<div className="modal-content">
		    <div className="modal-content-text">
      		<h2>Great job!</h2>
      		<p>We just emailed a confirmation link to 
							<span> { modalEmail }</span>.
							<br />
						Click the link to confirm your subscription!</p>
      		<button type="button" className="closeBtn" onClick={ handleClose }>OK</button>
          <br />
      		<img src="img/email-dove.png" style={{width: "50%"}} />
  		  </div>
			</div>
    </div>
  )

}




export default Modal;
