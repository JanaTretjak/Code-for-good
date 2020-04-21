import React, { useState } from 'react';
import history from './history'
import './FAQ.css';
import FAQitem from './FAQitem';


function FAQ(props) {
    const [faqs, setfaqs] = useState([
        {
            question: 'Was ist SuperCode?',
            answer: 'Das wird funktionieren',
            open: false
        },
        {
            question: 'Wie könnt ihr mir helfen?',
            answer: 'Einfach die Fragen auf "Lets Go" beantworten',
            open: false
        },
        {
            question: 'Was ist der Sinn des Lebens?',
            answer: '42',
            open: false
        },
        {
            question: 'Wo geht es hier wieder raus??',
            answer: 'Immer wieder auf "X" drücken',
            open: false
        },
        {
            question: 'Hab ich kein von IT - ist das ein Problem?',
            answer: 'Natürlich Nicht! Dafür sind wir ja da.',
            open: false
        },
        {
            question: 'Wie lange wird es dauern?',
            answer: 'Es hängt ab, welches Produkt ihr braucht',
            open: false
        },
        {
            question: 'Wann meldet ihr euch??',
            answer: 'Wegen hoher Nachfrage kann es bis zu 2 Tagen dauern',
            open: false
        },
        {
            question: 'Steht ihr auch nach der Corona-Krise zu verfügung??',
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
            question: 'Das ist die erste Frage3?',
            answer: 'Das wird funktionieren3',
            open: false
        }
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