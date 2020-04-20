//import React from 'react';
import React, { Component } from 'react';
import './First.css';
import "./umfrage.css"
import foto from "./foto.png"
import image1 from "./img/image 1.svg"
import image2 from "./img/super(code).svg"
import image3 from "./img/image 5.svg"
import image4 from "./img/image 10.svg"
import image5 from "./img/image 9.svg"
import image6 from "./img/sourcetree logo_png 1.svg"
import history from './history'

class First extends Component {
    state = {
        class1: true
    }
    vonRechts = () => {
        this.setState({ class1: false });
        history.push('/')
        console.log("test")
    }
    render() {
        return (
            <section className={`Supercode-hilft `}>
                <div>
                    <div className="main">
                        <div className="text">
                            <div className="text1">
                                <h1><span>SuperCode </span> <br />hilft <br /></h1>
                                <p>Tausende von Betrieben stehen in Düsseldorf vor dem Aus. Insbesondere viele kleinere Betrieben aus dem
                                Bereich Einzelhandel und Gastronomie und Dienstleistungen sind von Corona besonders betroffen: Den
                                Unternehmen sind in der aktuellen Lage die Umsätze weggebrochen und online werden noch nicht alle
                                Register gezogen, ergänzende oder zusätzlich Umsätze zu erzielen oder den Kontakt zu Kunden zu halten
                                bzw. auszubauen.

                                Die Düsseldorfer Initiative „SuperCode hilft“ will diese Unternehmern dabei unterstützen, online ihre
                                Wettbewerbsfähigkeit schnell aber vor allem, Nachhaltig zu verbessern. Das kann ein Online-Shop sein,
                    eine Homepage, ein Social-Media-Auftritt oder ein Newsletter.</p>
                            </div>

                            <div className="text2">
                                <h1>Interesse? <br /></h1>
                                <p>Interessierte Unternehmen können sich online melden. Nach einem kurzem online Briefing
                                Interview prüft eine unabhängige Jury die Möglichkeiten und schlägt dem Unternehmen
                        Projektpartner für eine kostenfreie Beratung und Umsetzung von Möglichkeiten vor.</p>
                                <div>
                                    <button className="btn striped-shadow violet ls" onClick={() => { history.push('/faq') }}><span>FRAGEN?</span></button>
                                    <button className="btn striped-shadow violet ls" onClick={() => { history.push('/umfrage') }}><span>LOS GEHT'S</span></button>
                                </div>
                            </div>

                        </div>
                    </div>
                    <img src={foto} alt="" />
                </div>
                <footer>
                    <button className="untenLinks" onClick={() => { history.push('/') }}>≪</button>
                    <div className="footer">
                        <h1>Unsere Partner</h1>
                        <a href="#"><img src={image1} alt=""></img></a>
                        <a href="#"><img src={image2} alt=""></img></a>
                        <a href="#"><img src={image3} alt=""></img></a>
                        <a href="#"><img src={image4} alt=""></img></a>
                        <a href="#"><img src={image5} alt=""></img></a>
                        <a href="#"><img src={image6} alt=""></img></a>
                    </div>
                </footer>

            </section>
        );
    }
}

export default First;

//${ this.props.expend ? "SearchPage" : "SearchPageBack" }