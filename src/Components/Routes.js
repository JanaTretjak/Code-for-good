
import React, { Component } from "react";
import { Router, Switch, Route } from "react-router-dom";
import TransitionGroup from "react-transition-group/TransitionGroup";
import history from './history';
import Umfrage from "./Umfrage";
import Second from "./Second";
import First from "./First";
import ContactForm from "./СontactForm";
import FAQ from "./FAQ"

const firstChild = props => {
    const childrenArray = React.Children.toArray(props.children);
    return childrenArray[0] || null;
};

export default class Routes extends Component {

    render() {
        return (
            <Router history={history}>

                <Switch>
                    <Route
                        exact
                        path="/"
                        children={({ match, ...rest }) => (
                            <TransitionGroup component={firstChild}>
                                {match && <Second {...rest} />}
                            </TransitionGroup>
                        )} />
                    <Route
                        path="/umfrage"
                        children={({ match, ...rest }) => (
                            <TransitionGroup component={firstChild}>
                                {match && <Umfrage {...rest} />}
                            </TransitionGroup>
                        )} />
                    {/* <Route path="/" exact component={Second} />
                    <Route path="/umfrage" component={Umfrage} /> */}
                    <Route path="/interesse" component={First} />
                    <Route path="/contact" component={ContactForm} />
                    <Route path="/faq" component={FAQ} />
                </Switch>
            </Router>
        )
    }
}
