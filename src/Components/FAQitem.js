import React from 'react'
// Die Fragen werden hier verdeckt bzw offengelegt
function FAQitem({ faq, index, toggleFAQ }) {
    return (
        <div className={"faq" + (faq.open ? 'open' : ' ')}
            key={index}
            onClick={() => toggleFAQ(index)}
        >
            <div className="faq-question">
                {faq.question}
            </div>
            <div className="faq-answer">
                {faq.answer}
            </div>
        </div>
    )
}

export default FAQitem
