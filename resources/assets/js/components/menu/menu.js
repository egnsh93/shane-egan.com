import React, { Component, PropTypes } from 'react';
import MenuItem  from './menu_item';

class Menu extends Component {
    render() {
        return (
            <nav id="menu" className="panel" role="navigation">
                <ul>
                    <MenuItem href="#about"><i className="fa fa-user fa-fw"></i> About</MenuItem>
                    <MenuItem href="#services"><i className="fa fa-cogs fa-fw"></i> Services</MenuItem>
                    <MenuItem href="#projects"><i className="fa fa-folder-open fa-fw"></i> Projects</MenuItem>
                    <MenuItem href="#contact"><i className="fa fa-paper-plane fa-fw"></i> Contact</MenuItem>
                    <MenuItem href="#testimonials"><i className="fa fa-quote-left fa-fw"></i> Testimonials</MenuItem>
                </ul>
                <ul className="login">
                    <MenuItem href="/login"><i className="fa fa-lock fa-fw"></i> Login</MenuItem>
                </ul>
            </nav>
        );
    }
}

export default Menu;
