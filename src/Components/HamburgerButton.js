// import React from 'react'
import React, { Component } from 'react';
import "./burger.css"

class HamburgerButton extends Component {
    state = {
        menuOpen: false
    }

    menuBtn = () => {
        if (!this.state.menuOpen) {
            console.log("test")
            // this.setState({ menuOpen: !this.state.menuOpen });

        }
    }
    render() {
        return (
            <section>
                <button onClick={this.menuBtn} ></button>
            </section>
        );
    }
}

export default HamburgerButton;

// const menuBtn = document.querySelector('.menu-btn');
// let menuOpen = false;
// menuBtn.addEventListener('click', () => {
//     if (!menuOpen) {
//         menuBtn.classList.add('open');
//         menuOpen = true;
//     } else {
//         menuBtn.classList.remove('open');
//         menuOpen = false;
//     }
// // const menuBtn = document.querySelector('.menu-btn');
// // let menuOpen = false;
// // menuBtn.addEventListener('click', () => {
// //     if (!menuOpen) {
// //         menuBtn.classList.add('open');
// //         menuOpen = true;
// //     } else {
// //         menuBtn.classList.remove('open');
// //         menuOpen = false;
// //     }
// // });

// // export default Hambur 
