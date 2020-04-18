//import React from 'react';
import React, { Component } from 'react';
import './First.css';
import "./umfrage.css"
import foto from "./foto.png"
import Footer from './Footer';

class First extends Component {
    state = {}
    render() {
        return (
            <section className={`Supercode-hilft ${this.props.expendRechts ? "SearchPageLinks" : "SearchPageBackLinks"}`}>
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
                                    <button className="btn striped-shadow violet ls" ><span>FRAGEN?</span></button>
                                    <button className="btn striped-shadow violet ls" onClick={this.props.vonUnten}><span>LOS GEHT'S</span></button>
                                </div>
                            </div>


                        </div>
                    </div>
                    <img src={foto} alt="" />
                </div>
                <footer>
                    <button className="untenLinks" onClick={this.props.vonRechts}>≪</button>
                    <Footer />
                </footer>

            </section>
        );
    }
}

export default First;

// function First(props) {

//     return (

//         <section id={`Supercode-hilft` ${props.expend ? "SearchPage" : "SearchPageBack"}`}>
//             <div className="main">
//                 <div className="text">
//                     <div className="text1">
//                         <h1><span>SuperCode </span> <br />hilft <br /></h1>
//                         <p>Tausende von Betrieben stehen in Düsseldorf vor dem Aus. Insbesondere viele kleinere Betrieben aus dem
//                         Bereich Einzelhandel und Gastronomie und Dienstleistungen sind von Corona besonders betroffen: Den
//                         Unternehmen sind in der aktuellen Lage die Umsätze weggebrochen und online werden noch nicht alle
//                         Register gezogen, ergänzende oder zusätzlich Umsätze zu erzielen oder den Kontakt zu Kunden zu halten
//                         bzw. auszubauen.

//                         Die Düsseldorfer Initiative „SuperCode hilft“ will diese Unternehmern dabei unterstützen, online ihre
//                         Wettbewerbsfähigkeit schnell aber vor allem, Nachhaltig zu verbessern. Das kann ein Online-Shop sein,
//                     eine Homepage, ein Social-Media-Auftritt oder ein Newsletter.</p>
//                     </div>

//                     <div className="text2">
//                         <h1>Interesse? <br /></h1>
//                         <p>Interessierte Unternehmen können sich online melden. Nach einem kurzem online Briefing
//                         Interview prüft eine unabhängige Jury die Möglichkeiten und schlägt dem Unternehmen
//                         Projektpartner für eine kostenfreie Beratung und Umsetzung von Möglichkeiten vor.</p>
//                         <div>
//                             <button className="btn striped-shadow violet ls"><span>ERFAHRE MEHR</span></button>
//                             <button className="btn striped-shadow violet ls"><span>LOS GEHT'S</span></button>
//                         </div>
//                     </div>


//                 </div>
//             </div>
//             <img src="https://www.unsplash.it/1000/1000" alt="" />

//         </section>




//     );
// }
// export default First;