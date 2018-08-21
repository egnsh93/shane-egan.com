import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import Header from './header';
import Hero from './hero';
import Section from './section';
import Service from './service';
import ProjectItem from './project/project_item';
import Callout from './callout';
import Testimonials from './testimonials';
import Footer from './footer';

class App extends Component {
    render() {
        return (
            <div>
                <Header />
                <Hero />
                <div className="wrap">
                    <Section name="services" id="services" heading="What I do" underline="best">
                        <div className="row">
                            <Service name="design" heading="Design" icon="fa fa-paint-brush">Full-service, multiple mockups and revisions. Stand out from the crowd.</Service>
                            <Service name="development" heading="Development" icon="fa fa-mobile">From blogs, to online stores, to engaging data displays.</Service>
                            <Service name="cms" heading="Content Management" icon="fa fa-folder-open">Level up your existing website with a custom or off the shelf content management system.</Service>
                        </div>
                    </Section>
                    <Section name="featured" id="projects" heading="Some of my" underline="projects">
                        <div className="row gallery">
                            <div id="featured-1" className="control-operator"></div>
                            <div id="featured-2" className="control-operator"></div>
                            <figure className="item">
                                <ProjectItem name="Castlefrank Co-operative Homes" link="http://shane-egan.com">
                                    Castlefrank Co-operative Homes wanted a website that would engage and educate their audience. What they received was a fully responsive and optimized website built using HTML, XML, and PHP. Check out the details or view their website live via the links below.
                                </ProjectItem>
                            </figure>
                            <figure className="item">
                                <ProjectItem name="TBD" link="http://shane-egan.com">
                                    Up and coming personal project
                                </ProjectItem>
                            </figure>
                            <div className="controls">
                                <a href="#featured-1" class="control-button">•</a>
                                <a href="#featured-2" class="control-button">•</a>
                            </div>
                        </div>
                    </Section>
                    <Section name="callout" id="contact">
                        <Callout link="/contact/" buttonText="Get in touch">Interested in working together?</Callout>
                    </Section>
                    <Section name="testimonials" id="testimonials" heading="What my clients are" underline="saying">
                        <div className="row gallery">
                            <div id="testimonial-1" className="control-operator"></div>
                            <div id="testimonial-2" className="control-operator"></div>
                            <figure className="item">
                                <Testimonials />
                            </figure>
                            <figure className="item">
                                <Testimonials />
                            </figure>
                            <div className="controls">
                                <a href="#testimonial-1" class="control-button">•</a>
                                <a href="#testimonial-2" class="control-button">•</a>
                            </div>
                        </div>
                    </Section>
                </div>
                <Footer />
            </div>
        );
    }
}

ReactDOM.render(<App />, document.getElementById('app'))
