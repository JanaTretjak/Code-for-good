import React, { useState } from 'react';
import history from './history'
import './FAQ.css';
import FAQitem from './FAQitem';


function FAQ(props) {
    const [faqs, setfaqs] = useState([
        {
            question: 'Hier steht eine Frage, die sich jeder stellt?',
            answer: 'Das wird funktionieren',
            open: false
        },
        {
            question: 'Hier steht eine Frage, die sich jeder stellt?',
            answer: 'Das wird funktionieren2',
            open: false
        },
        {
            question: 'Hier steht eine Frage, die sich jeder stellt?',
            answer: 'Das wird funktionieren3',
            open: false
        },
        {
            question: 'Hier steht eine Frage, die sich jeder stellt?',
            answer: 'Das wird funktionieren3',
            open: false
        },
        {
            question: 'Hier steht eine Frage, die sich jeder stellt?',
            answer: 'Das wird funktionieren3',
            open: false
        },
        {
            question: 'Hier steht eine Frage, die sich jeder stellt?',
            answer: 'Das wird funktionieren3',
            open: false
        },
        {
            question: 'Hier steht eine Frage, die sich jeder stellt?',
            answer: 'Das wird funktionieren3',
            open: false
        },
        {
            question: 'Hier steht eine Frage, die sich jeder stellt?',
            answer: 'Das wird funktionieren3',
            open: false
        },
        {
            question: 'Hier steht eine Frage, die sich jeder stellt?',
            answer: 'Das wird funktionieren3',
            open: false
        },
        {
            question: 'Hier steht eine Frage, die sich jeder stellt?',
            answer: 'Das wird funktionieren3',
            open: false
        },
        {
            question: 'Hier steht eine Frage, die sich jeder stellt?',
            answer: 'Das wird funktionieren3',
            open: false
        },
        {
            question: 'Hier steht eine Frage, die sich jeder stellt?',
            answer: 'Das wird funktionieren3',
            open: false
        },
        {
            question: 'Hier steht eine Frage, die sich jeder stellt?',
            answer: 'Das wird funktionieren3',
            open: false
        },
        {
            question: 'Hier steht eine Frage, die sich jeder stellt?',
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
        <div className={`FAQ `}>
            <article>
                <h2>FAQ</h2>

                <div className="faqs">
                    {faqs.map((faq, i) => (
                        <FAQitem faq={faq} index={i} toggleFAQ={toggleFAQ} />
                    ))}
                </div>
            </article>
            <button className="kreuz1" onClick={() => { history.push('/interesse') }}></button>
        </div >
    );
}
export default FAQ;

//${props.expendOben ? "SearchPageFaq" : "SearchPageBackFaq"}