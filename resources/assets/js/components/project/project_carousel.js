import React, { Component } from 'react';

class ProjectCarousel extends Component {
    render() {
        return (
            <div className="project-carousel">
                {this.props.children}
            </div>
        );
    }
}

export default ProjectCarousel;

