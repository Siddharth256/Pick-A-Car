import React, { useState } from 'react';
import './FAQ.css';

function FAQ() {
    const [activeIndex, setActiveIndex] = useState(null);

    const toggleAccordion = (index) => {
        if (index === activeIndex) {
            setActiveIndex(null);
        } else {
            setActiveIndex(index);
        }
    };

    const sections = [
        { id: 1, Question: "1.Do you provide drivers?", panel: "Unfortunately we currently do not provide drivers." },
        { id: 2, Question: "2.Am I eligible to use this service?", panel: "To avail Pick-A-Car's services, you must be at least 21 years old, and your driving license for Light Motor Vehicles must be at least 1 year old (at the time of starting the trip). Driving license printed on A4 sheet of paper (original or otherwise), driving license on Digilocker or M-Parivaahan app and commercial driving licenses will not be accepted." },
        { id: 3, Question: "3.Which are the areas where I can avail the services?", panel: "We are currently serving in Bangalore, Hyderabad, Chennai, Mumbai, Pune, Delhi NCR, Chandigarh, Jaipur, Kolkata, Ahmedabad.Delhi NCR : We are covering most parts of Delhi & Gurgaon and some parts of Noida & Ghaziabad.Hyderabad, Bangalore, Mumbai, Pune, Jaipur, Chennai, Kolkata, Ahmedabad : We serve the main city and the airport area." },
        { id: 4, Question: "4.What kind of cars can I choose from?", panel: "We have a curated selection of cars, which includes block-buster models across segments such as SUVs, ultra-luxury cars, hatchbacks and sedans. We are constantly increasing our portfolio; so keep a close watch for your favourite car, just in case we don’t have it already." },
        { id: 5, Question: "5.Can I book for any duration of time?", panel: "For rentals, the minimum booking duration is 10 hours, and the maximum is up to 90 days." },
        { id: 6, Question: "6.Can I book for one way trip?", panel: "Yes, you can choose different delivery and pickup locations within the same city, without any extra cost other than the standard delivery/pickup charges. However, this option needs to be availed while creating of the booking, before it is confirmed. You may also modify the booking later, however, it will then attract applicable modification charges." }
    ];

    return (
        <div className='accordion-main' id="FAQ">
            <h3 className='accordion-heading'>FAQ</h3>
            <h1 className='accordion-heading'>Frequently Asked Questions</h1>
            <p className='statement'>Frequently Asked Questions About the Car Rental Booking Process on Our Website: Answers to Common Concerns and Inquiries</p>
            {sections.map((section) => {
                return (
                    <div key={section.id}>
                                               <button className="Questions" onClick={() => toggleAccordion(section.id)}>
                            {section.Question}
                        </button>
                        {activeIndex === section.id && (
                            <div className='panel'>{section.panel}</div>
                        )}
                    </div>
                );
            })}
        </div>
    );
}

export default FAQ;
