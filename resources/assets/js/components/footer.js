import React, { Component } from 'react';
import Social from './social';

class Footer extends Component {
    render() {
        return (
            <footer className="footer">
                <div className="container">
                    <div className="row">
                        <div className="col">
                            <p>Copyright 2018</p>
                        </div>
                        <div className="col">
                            <Social />
                        </div>
                    </div>
                </div>
            </footer>
        );
    }
}

export default Footer;
