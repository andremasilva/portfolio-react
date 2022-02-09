import React, { useRef, useState, useContext } from 'react';
import "./contact.css"
import Phone from "../../img/phone.png"
import Email from "../../img/email.png"
import emailjs from '@emailjs/browser';
import { ThemeContext } from '../../context';




const Contact = () => {
    const formRef = useRef()

    const [state, setState] = useState(false);

    const theme = useContext(ThemeContext);
    const darkMode =theme.state.darkMode;

    const handleSubmit= (e)=>{
        e.preventDefault();
        emailjs.sendForm('service_pq90qrf', 'template_oktnska', formRef.current, "user_qbmPlxF4B9rzCmGAAvr1k")
        .then((result) => {
            console.log(result.text);
            setState(true)
        }, (error) => {
            console.log(error.text);
        });
    }

    return( 
    <div className='c'>
        <div className="c-bg"></div>
            <div className="c-wrapper">
              <div className="c-left">
                  <h1 className="c-tittle">Let's discuss your project</h1>
                  <div className="c-info">
                      <div className="c-info-item">
                          <img 
                          src={Phone} 
                          alt="" 
                          className="c-icon" />
                          +351 913 366 575
                      </div>
                      <div className="c-info-item">
                          <img 
                          src={Email} 
                          alt="" 
                          className="c-icon" />
                          andremasilva1991@gmail.com
                      </div>
                  </div>
              </div>
              <div className="c-right">
                  <p className='c-desc'>
                  <b>What's your story?</b> Get in touch. Always available for
                   freelancing if the right project comes along.
                  </p>
                  <form ref={formRef}  onSubmit={handleSubmit}>
                   <input style={{backgroundColor: darkMode && "#333"}} type="text" placeholder="Name" name="user_name" />
                   <input style={{backgroundColor: darkMode && "#333"}} type="text" placeholder="Subject" name="user_subject" />
                   <input style={{backgroundColor: darkMode && "#333"}} type="text" placeholder="Email" name="user_email" />
                   <textarea style={{backgroundColor: darkMode && "#333"}} rows="5" placeholder="Message" name="message" />
                   <button>Submit</button>
                   {state && "Thank you..."}
                  </form>
              </div>
          </div>
  </div>
  )};

export default Contact;
