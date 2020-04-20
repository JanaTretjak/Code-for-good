//import React from 'react';
import React, { Component } from 'react';
import "./contactForm.css";
import history from './history'

const encode = (data) => {
    return Object.keys(data)
        .map(key => encodeURIComponent(key) + "=" + encodeURIComponent(data[key]))
        .join("&");
}

class ContactForm extends Component {
    state = {}
    handleSubmit = e => {
        fetch("/", {
            method: "POST",
            headers: { "Content-Type": "application/x-www-form-urlencoded" },
            body: encode({ "form-name": "contact", ...this.state })
        })
            .then(() => console.log("Success!"))
            .catch(error => console.log(error));
        e.preventDefault();
    };
    handleChange1 = e => {
        this.setState({ [e.target.name]: e.target.value });
        console.log(e.target.value)
    }
    render() {
        return (
            <div className={`contact-box `}>
                <div className="contact-text">
                    <h1>
                        Hi, wie können wir dir <span>helfen?</span>
                    </h1>
                    <p>An diesen Zeiten erreichst du uns am besten an folgenden Tagen und Zeiten</p>
                    <p>Montag - Freitag 09:00 - 17:00 Uhr</p>
                    <p>Unser Campus befindet sich im Super7000 Coworcing Space - der Mutter aller Coworking Spaces. Die genau Adresse lautet:</p>
                    <p>Ratherstr.25 40476 Düsseldorf</p>
                </div>
                <form onSubmit={this.handleSubmit} name="contact">
                    <div className="contact-input">
                        <button className="kreuz" onClick={() => { history.push('/') }}></button>
                        <input type="text" placeholder="VORNAME" name="Vorname" onChange={this.handleChange1}></input>
                        <input type="text" placeholder="NAME" name="Name" onChange={this.handleChange1}></input>
                        <input type="email" placeholder="EMAIL" name="Email" onChange={this.handleChange1}></input>
                        <input type="number" placeholder="TELEFONNUMMER" name="Telefonnummer" onChange={this.handleChange1}></input>
                        <textarea placeholder="NACHRICHT" name="Nachricht" onChange={this.handleChange1}></textarea>
                        <button className="anim" >Senden</button>
                    </div>
                </form>
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