import React, { Component } from 'react';

class Section extends Component {
    render() {
        let heading;

        if (this.props.heading != null || this.props.underline != null) {
            heading = <h2>{this.props.heading} <span className="underline">{this.props.underline}</span></h2>
        }
        return (
            <section id={this.props.id} className={this.props.name}>
                <div className="container">
                    {heading}
                    {this.props.children}
                </div>
            </section>
        );
    }
}

export default Section;
