import React, { Component } from 'react';



class FormContact extends Component {

  constructor() {
    super();
    this.state = {
      name: '',
      email: '',
      message: ''
    }

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(event) {
    this.setState({
      [event.target.name]: event.target.value
    })
    // console.log(this.state)
  }

  handleSubmit(event) {
    const { contactMail } = this.props;

    event.preventDefault();
    contactMail(this.state);
  }

  render() {
    const { name, email, message } = this.state;
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
        
        <div className="col-8" id="contact-responsive">
          <button className="contact-button" type="submit" value="Send">Send</button>
        </div>

      </form>
    )
  }

}


export default FormContact;
