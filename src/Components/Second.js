import React, { Component } from 'react';
import './Second.css';
import history from './history'

class Second extends Component {
    state = {}
    render() {
        return (

            <div className="second-page">
                <section className="container second-box" >
                    <h1><span> SuperCode hilft -</span> <br /> Digitalisierungsinitiative für <br />
                kleine Unternehmen in <br />Düsseldorf.</h1>
                    <p>Kostenlose Unterstützung für Einzelhändler, <br /> Gastronomen, Handwerker, Dienstleister, NGOs und Vereine</p>
                    <button onClick={() => { history.push('/interesse') }} className="erfahreMehr btn striped-shadow violet ls"> <span>Erfahre Mehr</span> </button>
                    <button className="btn striped-shadow violet ls losGehts" onClick={() => { history.push('/umfrage') }}><span>LOS GEHT'S</span></button>
                    <div className="streifen"></div>
                    <button className="untenLinks" onClick={() => { history.push('/interesse') }}>≫</button>
                    <button className="obenRechts" onClick={() => { history.push('/contact') }}>≪</button>
                </section>
            </div>

        );
    }
}

export default Second;
