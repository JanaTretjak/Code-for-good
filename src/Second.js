import React, { Component } from 'react';
import './Components/Second.css';

class Second extends Component {
    state = {}
    render() {
        return (
            <div className="second-page">
                <section className="container second-box" >
                    <h1><span> SuperCode hilft -</span> <br /> Digitalisierungsinitiative für <br />
                kleine Unternehmen in <br />Düsseldorf.</h1>
                    <p>Kostenlose Unterstützung für Einzelhändler, <br /> Gastronomen, Handwerker, Dienstleister,NGOs und Vereine</p>
                    <button onClick={this.props.vonRechts} className="btn striped-shadow violet ls erfahreMehr"><span>Erfahre Mehr</span></button>
                    <button className="btn striped-shadow violet ls losGehts" onClick={this.props.vonUnten}><span>LOS GEHT'S</span></button>
                    <div className="streifen"></div>
                    <button className="untenLinks" onClick={this.props.vonRechts}>≫</button>
                    <button className="obenRechts" onClick={this.props.vonLinks}>≪</button>
                </section>

            </div>
        );
    }
}

export default Second;



