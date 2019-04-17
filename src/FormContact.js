import React, { Component } from 'react';



class FormContact extends Component {

  componentDidMount() {

  }

  render() {
    return (
      <form>
        <input
          className="input-box"
          type="text"
          id="name"
          name="name"
          placeholder="name *"
        required/>
        
        <input
          className="input-box"
          type="email"
          id="email"
          name="email"
          placeholder="email *"
          pattern="[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,3}$"
          required
        />

        <textarea
          id="Message"
          name="message"
          style={{height: "200px"}}
          placeholder="message *"
          required
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
