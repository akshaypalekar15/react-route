import React, {Component} from 'react';
import {Link} from 'react-router-dom';
import '../components/footer.css';


class Footer extends Component {
    render() {
        return (
            <footer className="footer">
                <div className="container">
                    <span className="text-muted">Demo Website &#169; {new Date().getFullYear()}</span>
                </div>
            </footer>
        );
    }
}


export default Footer;