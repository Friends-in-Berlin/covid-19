import React, { Component } from 'react';
import Nav from '../navbar/Nav';
import WorldMAp from './WolrdMap';


export class Home extends Component {
    render() {
        return (
            <div>
                <Nav />
                <WorldMAp />
            </div>
        )
    }
}

export default Home