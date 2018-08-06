import React, { Component } from 'react';

class Callout extends Component {
    render() {
        return (
            <div className="row">
                <div className="col callout-left">
                    <p>{this.props.children}</p>
                </div>
                <div className="col callout-right">
                    <a href={this.props.link} className="button small secondary">{this.props.buttonText}</a>
                </div>
            </div>
        );
    }
}

export default Callout;
