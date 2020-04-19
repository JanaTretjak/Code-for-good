import React from 'react';
import './Components/Second.css';

function Second() {
    return (
        <div className="second-page">
            <section className="second-box" >
                <h1><span> SuperCode hilft - </span><br /> Digitalisierungsinitiative für <br />
                kleine Unternehmen in <br />Düsseldorf.</h1>
                <p>
                    Kostenlose Unterstützung für Einzelhändler, <br /> Gastronomen, Handwerker, Dienstleister,
                    NGOs und Vereine
                </p>
                <a href="#" className="button-mehr">ERFAHRE MEHR</a>
                <a href="#" className="button-gehts">LOS GEHTS</a>
                <div className="streifen"></div>
            </section>
        </div>


    );
}
export default Second;