import React, { useState } from 'react';
import './FAQ.css';
import FAQitem from './FAQitem';


function FAQ() {
    const [faqs, setfaqs] = useState([
        {
            question: 'Das ist die erste Frage?',
            answer: 'Das wird funktionieren',
            open: false
        },
        {
            question: 'Das ist die erste Frage2?',
            answer: 'Das wird funktionieren2',
            open: false
        },
        {
            question: 'Das ist die erste Frage3?',
            answer: 'Das wird funktionieren3',
            open: false
        },
        {
            question: 'Das ist die erste Frage3?',
            answer: 'Das wird funktionieren3',
            open: false
        },
        {
            question: 'Das ist die erste Frage3?',
            answer: 'Das wird funktionieren3',
            open: false
        },
        {
            question: 'Das ist die erste Frage3?',
            answer: 'Das wird funktionieren3',
            open: false
        },
        {
            question: 'Das ist die erste Frage3?',
            answer: 'Das wird funktionieren3',
            open: false
        },
    ]);

    const toggleFAQ = index => {
        setfaqs(faqs.map((faq, i) => {
            if (i === index) {
                faq.open = !faq.open
            } else {
                faq.open = false;
            }

            return faq;
        }))
    };


    return (
        <div className="FAQ">
            <div>
                <h2>FAQ</h2>
            </div>

            <div className="faqs">
                {faqs.map((faq, i) => (
                    <FAQitem faq={faq} index={i} toggleFAQ={toggleFAQ} />
                ))}

            </div>


        </div >



    );
}
export default FAQ; 