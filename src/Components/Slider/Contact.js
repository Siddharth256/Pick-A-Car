import React from 'react';
import './Contact.css';
import Call from '../../Call.PNG'

const Contact = () => {
  return (
    <div className="containercontact" id='Contact'>
      <div className="uppercontactcontainer">
      <img src={Call} className="CALL" alt="Call.PNG" />
        <div className="uppercontact">
            <h2 className="h22">Contact Us</h2>
            <form className='form-cont'>
             <div className="form-groupcontact">
              <label htmlFor="name" className="label1">Name:</label>
              <input type="text" id="name" className="formki" name="name" required placeholder='Eg. "Gary Kaushik"'/>
             </div>
            <div className="form-groupcontact">
              <label htmlFor="email" className="label1">Email:</label>
              <input type="email" id="email" className="formki" name="email" required placeholder='xyz123@gmail.com'/>
            </div>
            <div className="form-groupcontact">
              <label htmlFor="message" className="label1">Message:</label>
              <textarea id="message" className="formki" name="message" required placeholder='Write Here'></textarea>
            </div>
            <button type="submit" className="contactbutton">Send</button>
            </form>
      </div>
      
     </div>
      <div className="lowercontact">
        <div className="lowerleft"></div>
        <div className="iconlaga">
          <span className="mereicons">&#128222;</span>
            <br/>
            Call us at:
            <br/>
            658-251-25
        </div>
        <br/>
        <div className="iconlaga">
        <span className="mereicons">&#128231;</span>
            <br/>
            EMAIL
            <br/>
            pickacar@gmail.com
        </div>
        <br/>
        <div className="iconlaga">
          <span className="mereicons">&#127968;</span>
            <br/>
            Location
            <br/>
            123 street,New Delhi

        </div>
        <br/>
        <div className="iconlaga">
          <span className="mereicons">&#127760;</span>
            <br/>
            WEBSITE
            <br/>
           www.pick-a-car.in
        </div>
      
      
     
      
      </div>
    </div>
  );
};

export default Contact;
