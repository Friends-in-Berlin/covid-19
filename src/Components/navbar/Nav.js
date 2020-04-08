import React, { Component } from 'react';
import { Link } from 'react-router-dom';

export class Nav extends Component {
    render() {
        return (
            <div>
                <ul>
                    <li><Link to='/'>Home</Link></li>
                    <li><Link to='/news'>news</Link></li>
                    <li><Link to='/protection'>protection</Link></li>
                    <li><Link to='/warning'>warning</Link></li>
                    <li><Link to='/support'>support</Link></li>
                </ul>
            </div>
        )
    }
}

export default Nav
