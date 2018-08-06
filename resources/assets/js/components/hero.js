import React, { Component } from 'react';

class Hero extends Component {
    render() {
        return (
            <div id="about" className="hero profile">
                <div className="inner">
                    <div className="row">
                        <div className="profile-img"></div>
                        <h1 className="profile-title">Nice to meet you!</h1>
                        <p className="profile-blurb">Hi, my name is <span className="highlight-tertiary">Shane Egan</span> and I am a </p>
                        <p className="profile-blurb"><span className="highlight-tertiary">Software Developer</span> based out of <span className="highlight-tertiary">Ottawa, Canada.</span><span className="cursor">|</span></p>
                        <a href="/contact/" className="button medium secondary">Contact me</a>
                    </div>
                </div>
            </div>
        );
    }
}

export default Hero;