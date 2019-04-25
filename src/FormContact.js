import React, { Component } from 'react';

const sendSuccess = {
  contact: {
    name: '',
    email: '',
    message: ''
  },
  confirm: 'Message sent!'
}

const sendFailure = {
  error: 'Message failure.'
}

class FormContact extends Component {

  constructor() {
    super();
    this.state = {
      contact: {
        name: '',
        email: '',
        message: ''
      },
      error: '',
      confirm: ''
    }

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(event) {
    const contact = Object.assign({}, this.state.contact, { [event.target.name]: event.target.value })
    this.setState({ contact })
  }

  handleSubmit(event) {
    const { contactMail } = this.props;

    event.preventDefault();
    contactMail(this.state.contact)
      .then(response => {
        if(response.msg === 'success') {
          this.setState( sendSuccess )
        }
        else if (response.msg === 'fail') {
          this.setState( sendFailure )
        }
      })
  }

  render() {
    const { name, email, message } = this.state.contact;
    const { confirm, error } = this.state;
    const { handleChange, handleSubmit } = this;

    return (
      <form onSubmit = { handleSubmit }>
        <input
          required
          placeholder="name *"
          className="input-box"
          type="text"
          id="name"
          name="name"
          value={ name }
          onChange = { handleChange }
        />
        
        <input
          required
          pattern="[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,3}$"
          placeholder="email *"
          className="input-box"
          type="email"
          id="email"
          name="email"
          value={ email }
          onChange={ handleChange }
        />

        <textarea
          required
          placeholder="message *"
          style={ { height: "200px" } }
          id="Message"
          name="message"
          value = { message }
          onChange = { handleChange } 
        >
        </textarea>
        
        <div className="col-1mid" id="contact-responsive">
          <button className="contact-button" type="submit" value="Send">Send</button>
        </div>

        <div className="col-3">
          {
            confirm ? (<div className="confirm-contact">{ confirm }</div>) : null
          }

          {
            error ? (<div className="error-contact">{ error }</div>) : null
          }
        </div>

       </form>
    )
  }

}


export default FormContact;
