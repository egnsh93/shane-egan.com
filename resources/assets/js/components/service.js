import React, { Component } from 'react';

class Service extends Component {
    render() {
        return (
            <div className="col service-box">
                <i className={this.props.icon}></i>
                <h3>{this.props.heading}</h3>
                <p>{this.props.children}</p>
                <div className={this.props.name + " highlight"} ></div>
            </div>
        );
    }
}

export default Service;

