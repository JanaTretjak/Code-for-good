import React, { Component } from 'react';
import data from "./data"
import Form from './Form';
import "./umfrage.css"
import history from './history'
import ProgressButton from 'react-progress-button' //Hier mussten wir noch ein extra-Paket für React instalieren
import "./progressButton.css"

// Übergaba an Netlyfy Backend
const encode = (data) => {
    return Object.keys(data)
        .map(key => encodeURIComponent(key) + "=" + encodeURIComponent(data[key]))
        .join("&");
}

class Umfrage extends Component {
    state = {
        display: true,
        display0: true,
        display1: false,
        display2: true,
        data: data,
        i: 0,
        frage: data[0].frage,
        antwort: {},
        name: {},
        value: '',
        buttonState: '',
        button: "Senden"
    }
    start = () => {
        this.setState({ display: false });
        this.setState({ display0: false });
        console.log(this.state.i)
    }
    // Hier werden die Antworten gespeichert für Netlyfy
    handleChange = (event) => {
        this.setState({ value: event.target.value })
        this.setState({ [event.target.name]: event.target.value })
    }

    //In diesem Teil werden die Fragen einzeln dargestellt und in dem Array werden die Antworten gespeichert; 
    //Auch falls die Antwort leer sein sollte, wird es weitergeleitet; 
    next = (event) => {
        event.preventDefault();
        if (this.state.data[this.state.i].antwort === undefined) {
            if (this.state.value === "") {
                this.setState({ data: this.state.data });
            } else {
                this.state.data[this.state.i].antwort = this.state.value
            }
        } else if (this.state.data[this.state.i].antwort !== undefined && this.state.value !== "") {
            this.state.data[this.state.i].antwort = this.state.value
        }
        console.log(this.state.data)

        if (this.state.i < this.state.data.length - 1) {
            this.setState({ i: ++this.state.i });
        } else {
            this.setState({ display0: !this.state.display1 });
            this.setState({ display1: !this.state.display1 });
        }
        if (this.state.i === 1 && this.state.data[0].antwort === undefined) {
            this.state.data[this.state.i].frage = "2 -> Danke dir und wie lautet dein Nachname?"
            this.setState({ frage: this.state.data[1].frage });
        } else if (this.state.i === 1) {
            this.state.data[this.state.i].frage = "2 -> Danke, " + this.state.data[0].antwort + ", " + "und wie lautet dein Nachname?"
            this.setState({ frage: this.state.data[1].frage });
        }
        this.setState({ frage: this.state.data[this.state.i].frage });
        this.setState({
            data: this.state.data
        }, () => {
            this.setState({ value: '' })
        });
    }
    //Hier werden die Antworten an N weitergeschickt
    handleSubmit = e => {
        fetch("/", {
            method: "POST",
            headers: { "Content-Type": "application/x-www-form-urlencoded" },
            body: encode({ "form-name": "umfrage", ...this.state })
        })
            .then(() => console.log("Success!"))
            .catch(error => console.log(error));
        e.preventDefault();
    };
    //Button zurück
    before = (event) => {
        event.preventDefault()
        if (this.state.i > 0) {
            this.setState({ i: this.state.i-- });
            this.setState({
                frage: this.state.data[this.state.i].frage,
                i: this.state.i
            });
        }
    }

    //Das ist der Sende-Button - 
    handleClick = () => {
        this.setState({ buttonState: 'loading' })
        // make asynchronous call
        setTimeout(() => {
            this.setState({ buttonState: 'success' })
            this.setState({ button: "Gesendet" });

        }, 3000)
        // Man bekommt hier die Finale Seite Yeah Yeah
        setTimeout(() => {
            this.setState({ display1: !this.state.display1 });
            this.setState({ display2: !this.state.display2 });
        }, 4500)
    }
    render() {

        return (
            <section className={`umfrage `}>
                <article className="losGehts" style={this.state.display ? { display: "block" } : { display: "none" }}>
                    <h1>Los <span>geht's</span> 👋</h1>
                    <p>Hi, jetzt gleich erwarten dich ein paar Fragen, die uns helfen werden deine Anfrage besser beurteilen zu können. Bitte, nimm dir genug Zeit, alle Frage in Ruhe und vollständig auszufühlen. Bereit?</p>
                    <button className="start btn striped-shadow violet st" onClick={this.start}><span>Start</span></button>
                </article>
                <article className="fragen" style={this.state.display0 ? { display: "none" } : { display: "block" }} >
                    <Form before={this.before} next={this.next} handleChange={this.handleChange} frage={this.state.frage} value={this.state.value} i={this.state.i} name={this.state.titel} />
                </article>
                <article className="endForm" style={this.state.display1 ? { display: "block" } : { display: "none" }}>
                    <form onSubmit={this.handleSubmit} name="umfrage">
                        <div>
                            {this.state.data.map((elt, i) =>
                                <div id="array" name="array">
                                    <label name="frage" value={elt.frage}>{elt.frage}</label>
                                    <label className="antwort" name="antwort" value={elt.antwort}>{elt.antwort}</label>
                                    {/* <input className="antwort" type="text" name={`antwort${i}`} placeholder={elt.antwort} onChange={this.handleChange1} /> */}
                                </div>)
                            }
                        </div>
                        <div className="senden">
                            <ProgressButton onClick={this.handleClick} state={this.state.buttonState}>
                                <p>{this.state.button}</p>
                            </ProgressButton>
                        </div>
                    </form >
                </article >
                <article className="pb-container beenden" style={this.state.display2 ? { display: "none" } : { display: "block" }} >
                    <h1>🎉YEAH <span>YEAH</span>🎉</h1>
                    <p>Deine Anfrage wurde an uns versendet. Du erhälst in kürze per Mail eine Bestätigung. Wir werden alle Angaben prüfen und uns zeitnah bei dir melden.</p>
                    <button onClick={() => { history.push('/') }}>Beenden</button>
                </article>
            </section >
        );
    }
}
export default Umfrage;

//${this.props.expendUnten ? "SearchPageUmfrage" : "SearchPageBackUmfrage"}