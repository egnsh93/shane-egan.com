import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class MenuItem extends Component {
    render() {
        return (
            <li>
                {
                    this.props.to ? <Link {...this.props} /> : <a {...this.props} />
                }
            </li>
        );
    }
}

export default MenuItem;
