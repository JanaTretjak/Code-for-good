<<<<<<< HEAD
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
=======
// // import React from 'react'

// class HamburgerButton extends Component {
//     state = {
//         menuOpen: false
//     }

//     menuBtn = () => {
//         if (!this.state.menuOpen) {
//             console.log("test")
//             // this.setState({ menuOpen: !this.state.menuOpen });
//         }
>>>>>>> 300188491f63eae9b9e9f72daa41665ae83f1cc8
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
