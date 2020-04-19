//import React from 'react';
import React, { Component } from 'react';
import "./contactForm.css";

class ContactForm extends Component {
    state = {}
    render() {
        return (
            <div className={`contact-box ${this.props.expend ? "SearchPage" : "SearchPageBack"}`}>
                <div className="contact-text">
                    <h1>
                        Hi, wie können wir dir <span>helfen?</span>
                    </h1>
                    <p>An diesen Zeiten erreichst du uns am besten an folgenden Tagen und Zeiten</p>
                    <p>Montag - Freitag 09:00 - 17:00 Uhr</p>
                    <p>Unser Campus befindet sich im Super7000 Coworcing Space - der Mutter aller Coworking Spaces. Die genau Adresse lautet:</p>
                    <p>Ratherstr.25 40476 Düsseldorf</p>
                </div>
                <div className="contact-input">
                    <button className="kreuz" onClick={this.props.vonLinks}></button>
                    <input type="text" placeholder="VORNAME"></input>
                    <input type="text" placeholder="NAME"></input>
                    <input type="email" placeholder="EMAIL"></input>
                    <input type="number" placeholder="TELEFONNUMMER"></input>
                    <textarea placeholder="NACHRICHT"></textarea>
                </div>
            </div>
        );
    }
}

export default ContactForm;

/*const ContactForm = (props) => {
    console.log(props)
    return (
        <div className={`contact-box ${props.expend ? "SearchPage" : ""}`}>
            <div className="contact-text">
                <h1>
                    Hi, wie können wir dir <span>helfen?</span>
                </h1>
                <p>An diesen Zeiten erreichst du uns am besten an folgenden Tagen und Zeiten</p>
                <p>Montag - Freitag 09:00 - 17:00 Uhr</p>
                <p>Unser Campus befindet sich im Super7000 Coworcing Space - der Mutter aller Coworking Spaces. Die genau Adresse lautet:</p>
                <p>Ratherstr.25 40476 Düsseldorf</p>
            </div>
            <div className="contact-input">

                <input type="text" placeholder="VORNAME"></input>
                <input type="text" placeholder="NAME"></input>
                <input type="email" placeholder="EMAIL"></input>
                <input type="number" placeholder="TELEFONNUMMER"></input>
                <textarea placeholder="NACHRICHT"></textarea>
            </div>
        </div>
    );
}

export default ContactForm;*/