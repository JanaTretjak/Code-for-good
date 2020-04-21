//import React from 'react';
import React, { Component } from 'react';
import "./contactForm.css";
import "./progressButton.css"
import history from './history'
import ProgressButton from 'react-progress-button'

const encode = (data) => {
    return Object.keys(data)
        .map(key => encodeURIComponent(key) + "=" + encodeURIComponent(data[key]))
        .join("&");
}

class ContactForm extends Component {
    state = {
        buttonState: '',
        button: "Senden",
        display4: true,
        display3: true
    }
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
    handleClick = () => {
        this.setState({ buttonState: 'loading' })
        // make asynchronous call
        setTimeout(() => {
            this.setState({ buttonState: 'success' })
            this.setState({ button: "Gesendet" });

        }, 3000)
        setTimeout(() => {
            this.setState({ display4: !this.state.display4 });
            this.setState({ display3: !this.state.display3 });
        }, 4500)
    }
    render() {
        return (
            <section>
                <div className="contact-box" style={this.state.display4 ? { display: "grid" } : { display: "none" }}>
                    <div className="contact-text" >
                        <h1>
                            Hi, wie können wir dir <span>helfen?</span>
                        </h1>
                        <p>An diesen Zeiten erreichst du uns am besten an folgenden Tagen und Zeiten</p>
                        <p>Montag - Freitag 09:00 - 17:00 Uhr</p>
                        <p>Unser Campus befindet sich im Super7000 Coworcing Space - der Mutter aller Coworking Spaces. Die genau Adresse lautet:</p>
                        <p>Ratherstr. 25, 40476 Düsseldorf</p>
                    </div>
                    <form onSubmit={this.handleSubmit} name="contact">
                        <div className="contact-input">
                            <button className="kreuz" onClick={() => { history.push('/') }}></button>
                            <input type="text" placeholder="VORNAME" name="Vorname" onChange={this.handleChange1}></input>
                            <input type="text" placeholder="NAME" name="Name" onChange={this.handleChange1}></input>
                            <input type="email" placeholder="EMAIL" name="Email" onChange={this.handleChange1}></input>
                            <input type="number" placeholder="TELEFONNUMMER" name="Telefonnummer" onChange={this.handleChange1}></input>
                            <textarea placeholder="NACHRICHT" name="Nachricht" onChange={this.handleChange1}></textarea>
                            <div className="senden">
                                <ProgressButton onClick={this.handleClick} state={this.state.buttonState}>
                                    <p>{this.state.button}</p>
                                </ProgressButton>
                            </div>
                        </div>
                    </form>
                </div>
                <article className="pb-container beenden1" style={this.state.display3 ? { display: "none" } : { display: "block" }} >
                    <h1>🎉YEAH <span>YEAH</span>🎉</h1>
                    <p>Deine Anfrage wurde an uns versendet. Du erhälst in kürze per Mail eine Bestätigung. Wir werden alle Angaben prüfen und uns zeitnah bei dir melden.</p>
                    <button onClick={() => { history.push('/') }}>Beenden</button>
                </article>
            </section>



        );
    }
}

export default ContactForm;
