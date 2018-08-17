import React, { Component } from 'react';
import TypeIt from 'typeit';

class Type extends Component {
    constructor(props) {
        super(props);
    }

    componentDidMount() {
        new TypeIt(this.el, this.props);
    }

    render() {
        return <div ref={(el) => { this.el = el;}}>{this.props.children}</div>
    }
}

export default Type;
