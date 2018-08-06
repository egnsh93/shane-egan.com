import React, { Component } from 'react';

class ProjectItem extends Component {
    render() {
        return (
            <div className="project-item">
                <div className="col featured-preview">
                    <img src="/assets/images/featured_project_hd.png" alt="Castlefrank Co-operative Homes" />
                </div>
                <div className="col featured-details">
                    <h3>{this.props.name}</h3>
                    <p>{this.props.children}</p>
                    <div className="featured-buttons">
                        <a href={this.props.link} className="button small primary">View Live</a>
                        <a href={this.props.detaulUrl} className="button small tertiary">Details</a>
                    </div>
                </div>
            </div>
        );
    }
}

export default ProjectItem;

