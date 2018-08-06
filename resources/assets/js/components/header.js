import React, { Component } from 'react';
import Menu from './menu/menu';
import Social from './social';

class Header extends Component {
    render() {
        return (
            <header className="header push">
                <Menu />
                <div className="container">
                    <div className="row">
                        <div className="col">
                            <Social />
                        </div>
                        <div className="col">
                            <a href="/"><img className="logo" src="/assets/images/logo_light.png" alt="Shane Egan Logo" /></a>
                        </div>
                        <div className="col">
                            <a href="#menu" className="toggle"><i className="fa fa-bars"></i></a>
                        </div>
                    </div>
                </div>
            </header>
        );
    }
}

export default Header;
