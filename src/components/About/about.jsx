import React, { Component } from 'react'

export default class About extends Component {

    render() {
        return (
            <div>
                <div className="about-section pt-4 px-3 px-lg-4 mt-1">
                    <div className="row">
                        <div className="col-md-6">
                            <h2 className="h3 mb-3">About Me</h2>
                            <p>Hello! I’m Joyce Harrison. I am passionate about UI/UX design and Web Design. I am a skilled Front-end
                                Developer and master of Graphic Design tools such as Photoshop and Sketch.</p>
                        </div>
                        <div className="col-md-5 offset-md-1">
                            <div className="row mt-2">
                                <div className="col-sm-4">
                                    <div className="pb-1">Age</div>
                                </div>
                                <div className="col-sm-8">
                                    <div className="pb-1 text-secondary">25</div>
                                </div>
                                <div className="col-sm-4">
                                    <div className="pb-1">Email</div>
                                </div>
                                <div className="col-sm-8">
                                    <div className="pb-1 text-secondary">balotra.prashant@gmail.com</div>
                                </div>
                                <div className="col-sm-4">
                                    <div className="pb-1">Phone</div>
                                </div>
                                <div className="col-sm-8">
                                    <div className="pb-1 text-secondary">+91 700-659-3003</div>
                                </div>
                                <div className="col-sm-4">
                                    <div className="pb-1">Address</div>
                                </div>
                                <div className="col-sm-8">
                                    <div className="pb-1 text-secondary">Gurgaon, Haryana, India</div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}