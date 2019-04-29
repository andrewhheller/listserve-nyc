import React, { Component } from 'react';

import Modal from './Modal';



const afterGoodEmailSub = {
  email: '',
  error: '',
  confirm: 'Great job! Thank you for subscribing!'
}

// email not updated in state so that email stays in field so that user can review
const afterBadEmailSub = {
  error: 'Oops, email address is already subscribed.',
  confirm: ''
}

const afterModalClose = {
  email: '',
  showModal: false
}




class FormSub extends Component {

  constructor() {
    super();
    this.state = {
      email: '',
      error: '',
      confirm: '',
      showModal: false,
      modalEmail: ''
    }

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleModalOpen = this.handleModalOpen.bind(this);
    this.handleModalClose = this.handleModalClose.bind(this);
  }

  handleModalOpen() {
    this.setState({ showModal: true, email: '' });
    console.log(this.state)
  }

  handleModalClose() {
    this.setState({ showModal: false })
    console.log(this.state)
  }

  handleChange(event) {
    this.setState({
      [event.target.name]: event.target.value
    })
  }

  handleSubmit(event) {
    const { createEmail } = this.props;

    event.preventDefault();
    createEmail(this.state)
      .then(result => { // result is array where [0] = instance and [1] = wasCreated boolean
        if(result[1]) { // wasCreated boolean
          
          if(screen.width > 800) { // show modal on wide screen width only (design)
            this.setState({ modalEmail: result[0].email })
            this.handleModalOpen();
          }

          else {
            this.setState( afterGoodEmailSub ) // use blurb only
          }
     
        }
        else { // email submit error
          this.setState( afterBadEmailSub ) // show error blurb on all screen widths
        }
      })
      .catch(error => console.log(error));
  }

  render() {
    const { email, confirm, error } = this.state;
    const { handleChange, handleSubmit } = this;
    const { showModal } = this.state;

    return (
      <form onSubmit={ handleSubmit }>
      <Modal show={ showModal } modalEmail={ this.state.modalEmail } handleClose={ this.handleModalClose } />

        <div id="subscribe">
          <div className="row">
            <input
              id="field1"
              type="email"
              name="email"
              value={email}
              placeholder="enter email address"
              pattern="[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,3}$"
              required
              onChange={handleChange}
            />
            <button type="submit" className="button1">Subscribe</button>
          </div>
         
          {
            error ? (<div className="error">{ error }</div>) : null
          }
 
          {
            confirm ? (<div className="confirm">{ confirm }</div>) : null
          }
          
        </div>
      </form>
    )
  }


}


export default FormSub;
