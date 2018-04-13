import React, {Component} from 'react';
import {Link} from 'react-router-dom';
import '../components/navbar.css';


class NavBar extends Component {
    render() {
        return (
            <nav className="navbar navbar-expand-md">
                <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarCollapse" aria-controls="navbarCollapse" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className='container'>
                    <Link className="navbar-brand" to="/">Web-site</Link>
                    <div className="collapse navbar-collapse" id="navbarCollapse">
                        <ul className="navbar-nav ml-auto">
                            <li className="nav-item">
                                <Link className="nav-link" to="/">Home </Link>
                            </li>
                            <li className="nav-item">
                                <Link className="nav-link" to="/about">About </Link>
                            </li>
                            <li className="nav-item">
                                <Link className="nav-link" to="/contact">Contact </Link>
                            </li>
                        </ul>
                    </div>
                </div>
            </nav>
        );
    }
}


export default NavBar;