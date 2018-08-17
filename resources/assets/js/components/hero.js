import React, { Component } from 'react';
import Type from './type';

class Hero extends Component {
    render() {
        return (
            <div id="about" className="hero profile">
                <div className="inner container">
                    <div className="row">
                        <div className="profile-img"></div>
                        <h1 className="profile-title">Nice to meet you!</h1>
                        <div className="profile-blurb">
                            <Type
                                strings={['Hi, my name is <span class="highlight-tertiary">Shane Egan</span> and I am a', '<span class="highlight-tertiary">Software Developer</span> based out of <span class="highlight-tertiary">Ottawa, Canada</span>.']}
                                breakLines={true}
                                speed={75}
                                nextStringDelay={0}
                            />
                        </div>
                        <a href="#contact" className="button medium secondary">Contact me</a>
                    </div>
                </div>
            </div>
        );
    }
}

export default Hero;
