import React, { Component } from 'react';
import './Components/Second.css';

class Second extends Component {
    state = {}
    render() {
        return (
            <div>
                <section className="container" >
                    <h1>SuperCode hilft - <br /> Digitalisierungsinitiative für <br />
                kleine Unternehmen in <br />Düsseldorf</h1>
                    <br />
                    <p>
                        Kostenlose Unterstützung für Einzelhändler, <br /> Gastronomen, Handwerker, Dienstleister,
                    NGOs und Vereine
                </p>
                    <button onClick={this.props.vonRechts}>Erfahre Mehr</button>
                    <button className="btn striped-shadow violet ls" onClick={this.props.vonUnten}><span>LOS GEHT'S</span></button>
                    <div className="streifen"></div>
                    <button className="untenLinks" onClick={this.props.vonRechts}>≫</button>
                    <button className="obenRechts" onClick={this.props.vonLinks}></button>
                </section>

            </div>
        );
    }
}

export default Second;



