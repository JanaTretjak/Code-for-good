import React, { Component } from 'react';
import data from "./data"


class Form extends Component {
    state = {
        data: data,
    }
    render() {
        return (
            <form>
                <div className={this.props.action ? "moveUp" : "up"} >
                    <label name={this.props.name}>{this.props.frage}</label>
                    <input type={this.props.i === 11 ? "file" : "text"} onChange={this.props.handleChange} name={this.state.data[this.props.i].titel} value={this.props.i === 11 ? "" : this.props.value} placeholder="schreibe hier deine Antwort..."></input>
                </div>
                <div className="bottom">
                    <div>
                        <button onClick={this.props.before}><i class="fas fa-angle-left"></i></button>
                        <button onClick={this.props.next}> <i class="fas fa-angle-right"></i> </button>
                    </div>

                    <label>Sag uns wer du bist <span>und wir sagen dir was zu dir passt.</span></label>
                </div>
            </form >
        );
    }
}

export default Form;