import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import Header from './header';
import Hero from './hero';
import Section from './section';
import Service from './service';
import ProjectCarousel from './project/project_carousel';
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
                        <div className="row">
                            <ProjectCarousel src="">
                                <ProjectItem name="Castlefrank Co-operative Homes" link="http://shane-egan.com" detailUrl="http://shane-egan.com">
                                    Castlefrank Co-operative Homes wanted a website that would engage and educate their audience. What they received was a fully responsive and optimized website built using HTML, XML, and PHP. Check out the details or view their website live via the links below.
                                </ProjectItem>
                            </ProjectCarousel>
                        </div>
                    </Section>
                    <Section name="callout" id="contact">
                        <Callout link="/contact/" buttonText="Get in touch">Interested in working together?</Callout>
                    </Section>
                    <Section name="testimonials" id="testimonials" heading="What my clients are" underline="saying">
                        <Testimonials />
                    </Section>
                </div>
                <Footer />
            </div>
        );
    }
}

ReactDOM.render(<App />, document.getElementById('app'))
