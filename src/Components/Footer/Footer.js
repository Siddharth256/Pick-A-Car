import React from 'react'
import './Footer.css'
import { Link } from 'react-router-dom'
function Footer() {
    return (
        <div className='main'>
            <footer>
                <div className='footer-container'>
                    <div className='footer-content'>
                        <ul className='ul' >
                            <li className='heading'>Pick-A-Car</li>
                            <li>We offer a variety of cars depending on your needs.
                                <br />
                                Customer experience is our priority</li>
                            <li>658-251-25</li>
                            <li>pickacar@gmail.com</li>
                        </ul></div>
                    <div className='footer-content'>
                        <ul className='ul'>
                            <li className='heading'>COMPANY</li>
                            <li>Delhi</li>
                            <li>Careers</li>
                            <li>Mobile</li>
                            <li>Blog</li></ul></div>
                    <div className='footer-content'>
                        <ul className='ul'><li className='heading'>WORKING HOURS</li>
                            <li>Mon-Fri: 9:00AM-9:00PM</li>
                            <li>Sat: 9:00AM-7:00PM</li>
                            <li>Sun: Closed</li>
                        </ul></div>
                    <div className='footer-content'>
                        <ul className='ul'>
                            <li className='heading'>SUBSCRIPTION</li>
                            <li>Subscribe your Email address for latest news & updates.</li>
                            <li><input type="text" placeholder='Enter Email Address' className='int'/></li>
                            <li><button className='submitbtn'><Link to='/' className='sbtbtnlink'>Submit</Link> </button></li>
                        </ul></div>
                </div>
            </footer>
        </div>
    )
}

export default Footer
