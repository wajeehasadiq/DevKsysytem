import React from 'react'
import './Form.css'
export default function Form() {
  return (
    <div className='from-bgimg'>
        <div className='from-text'>
            <h1>K<span className='from-span'>eep</span> in t<span className='from-span'>ouch</span></h1>
            <p>Stay connected with us for health tips, clinic updates, and easy appointment
                 booking — we’re just a <br /> message away!</p>
                 <div>
                   <div className='form-input'> <input type="text" placeholder='Your name' /></div>
                <div  className='form-input'>    <input type="text" placeholder='Email' /></div>
                <div className='input-message'>     <textarea
    id="message"
    name="message"
    rows="5"
    cols="40"
    placeholder="Message "
    required
  ></textarea></div>
                    <div className='from-btn'><button>Get a Free Quote</button></div>
                 </div>
        </div>
    </div>
  )
}

