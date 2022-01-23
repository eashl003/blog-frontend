import React, { Component } from 'react';
import emailjs from 'emailjs-com'; 

function sendEmail(e) {
    e.preventDefault();

    emailjs.sendForm('service_9cauv5t', 'template_0ubgz1u', e.target, 'user_nsQrjb0EC85gJA7TrRcYs')
      .then((result) => {
          console.log(result.text);
      }, (error) => {
          console.log(error.text);
      });
  }

class Subscribe extends Component {

  constructor(props) {
    super(props);
    this.state = {
        message: "Get free updates before others do!"
    }
  }
 
  updateContent = () => {
      this.setState({ message: "Thanks for subscribing!"});
  }
 
  render() {
    return (
      <div className="footer">
        <h2 id="subscribe" className="text-3xl font-serif" >Stay Updated</h2> 
        <div className="h1 mb-2 text-lg">
          { this.state.message }
        </div>
        <form onClick={this.updateContent} onSubmit={sendEmail}>
                    <input type="email" name="user_email" placeholder="Enter email address" required/>
                    <input type="submit" value="Send"/>
        </form> 
      </div>
    );
  }
}
 
export default Subscribe;