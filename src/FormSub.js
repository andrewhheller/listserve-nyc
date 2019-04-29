import React, { Component } from 'react';

import Modal from './Modal';



const afterGoodEmailSub = {
  email: '',
  error: '',
  confirm: 'Great job! You are now subscribed.'
}

// email not updated in state so that email stays in field so that user can review
const afterBadEmailSub = {
  error: 'Oops, email address is already subscribed.',
  confirm: ''
}

const afterCloseModal = {
  email: '',
  error: '',
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
    this.setState({ showModal: true })
  }

  handleModalClose() {
    this.setState( afterCloseModal )
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
          this.handleModalOpen();
          this.setState({ modalEmail: result[0].email })
        }
        else {
          this.setState( afterBadEmailSub )
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
