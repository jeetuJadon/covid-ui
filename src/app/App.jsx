import React, { Component } from 'react';
import Header from './header/Header.jsx';
import Footer from './footer/Footer.jsx';
import Body from './body/Body.jsx';

export default class App extends Component {
    constructor(props) {
        super(props)

        this.state = {
                 
        }

        this.handleEvent = this.handleEvent.bind(this)
    }

    componentDidMount() {
        
    }

    componentDidUpdate(prevProps, prevState, snapshot) { if (prevState.name !== this.state.name) { this.handler() } }

    componentWillUnmount() {
        
    }

    // Prototype methods, Bind in Constructor (ES2015)
    handleEvent() {}

    // Class Properties (Stage 3 Proposal)
    handler = () => { this.setState() }

    render() {
        return (
            <div>
                <Header></Header>
                <Body>

                </Body>
                <Footer></Footer>
            </div>
        )
    }
}
