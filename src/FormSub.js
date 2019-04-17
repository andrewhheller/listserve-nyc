import React, { Component } from 'react';

import { modal, showModal } from './Modal';

import { formFocus } from './utils';

class FormSub extends Component {

  constructor() {
    super();
    this.state = {
      email: '',
      error: ''
    }

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
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
          console.log('email created, load modal')
          this.setState({ email: '' });
          showModal();
        }
        else {
          console.log('email exists')
          this.setState({ error: 'Oops, that email address is already subscribed.'})
        }
      })
      .catch(error => console.log(error));
  }

  render() {
    const { email, error } = this.state;
    const { handleChange, handleSubmit } = this;

    return (
      <form onSubmit={ handleSubmit }>

        <div id="subscribe">
          <div className="row">
            <input
              id="field1"
              type="email"
              name="email"
              value={email}
              placeholder="email address..."
              pattern="[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,3}$"
              required
              onChange={handleChange}
            />
            <button type="submit" className="button1">Subscribe</button>
          </div>
         
          {
            error ? (<div className="error">{ error }</div>) : null
          }
          
        </div>
      </form>
    )
  }


}


export default FormSub;
