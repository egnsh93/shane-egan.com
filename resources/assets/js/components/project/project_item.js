import React, { Component } from 'react';

class ProjectItem extends Component {
    constructor(props) {
        super(props);
        this.state = {
            isFlipped: false
        };

        this.onClick = this.onClick.bind(this);
    }

    onClick() {
        let currentlyFlipped = this.state.isFlipped;

        if (currentlyFlipped) {
            this.setState({
                isFlipped: false
            });
        } else {
            this.setState({
                isFlipped: true
            });
        }
    }

    render() {

        let classes = [];

        if (this.state.isFlipped) {
            classes.push('flip');
        } else {
            classes.pop('flip');
        }

        return (
            <div className={ `project-item flip-container ${ classes.join(' ') }` }>
                <div className="flipper">
                    <div className="front">
                        <div className="col featured-preview">
                            <img src="/assets/images/featured_project_hd.png" alt="Castlefrank Co-operative Homes" />
                        </div>
                        <div className="col featured-details">
                            <h3>{this.props.name}</h3>
                            <p>{this.props.children}</p>
                            <div className="featured-buttons">
                                <a href={this.props.link} className="button small primary">View Live</a>
                                <div className="button small tertiary" onClick={ this.onClick }>Details</div>
                            </div>
                        </div>
                    </div>
                    <div className="back">
                        <div className="close-details" onClick={ this.onClick }><i className="fa fa-times" aria-hidden="true"></i></div>
                        <div className="featured-title">
                            <h3>Castlefrank Co-operative Homes</h3>
                        </div>
                        <div className="featured-meta">
                            <h4>Client: Jocelyn Livingstone</h4>
                            <h4>Type: Website</h4>
                            <ul>
                                <li><span className="label label-design">Design</span></li>
                                <li><span className="label label-development">Development</span></li>
                                <li><span className="label label-cms">CMS</span></li>
                            </ul>
                        </div>
                        <div className="featured-body">
                            <p>Shane built the website for the Housing Coop I manage and did an excellent job. He was knowledgeable, patient and offered suggestions that were helpful while paying attention to detail. I would use Shane's services again and would be pleased to recommend him to others.</p>
                        </div>
                        {/* <div className="featured-gallery">
                            <ul>
                                <li><img src="https://image.freepik.com/free-icon/placeholder-on-map-paper-in-perspective_318-61698.jpg" alt="" class="img-thumbnail" /></li>
                                <li><img src="https://image.freepik.com/free-icon/placeholder-on-map-paper-in-perspective_318-61698.jpg" alt="" class="img-thumbnail" /></li>
                                <li><img src="https://image.freepik.com/free-icon/placeholder-on-map-paper-in-perspective_318-61698.jpg" alt="" class="img-thumbnail" /></li>
                            </ul>
                        </div> */}
                    </div>
                </div>
            </div>
        );
    }
}

export default ProjectItem;

