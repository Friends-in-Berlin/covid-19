import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import './nav.css';
export class Nav extends Component {
    render() {
        return (
            <div className="navbar">
                <ul>
                    <div className="nav-item"><li><Link className="link" to='/'>Home</Link></li></div>
                    <div className="nav-item"><li><Link className="link" to='/news'>news</Link></li></div>
                    <div className="nav-item"><li><Link className="link" to='/protection'>protection</Link></li></div>
                    <div className="nav-item"><li><Link className="link" to='/warning'>warning</Link></li></div>
                    <div className="nav-item"><li><Link className="link" to='/support'>support</Link></li></div>
                </ul>
            </div>
        )
    }
}

export default Nav
