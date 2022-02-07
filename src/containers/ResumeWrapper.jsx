import React, { Component } from 'react'
import Heading from '../components/Heading/Heading'
import About from '../components/About/about'
import Skills from '../components/Skills/skills'
import Experience from '../components/Experience/Experience'
import Education from '../components/Education/Education'
import Contact from '../components/Contact/Contact'
import '../App.css'

export default class ResumeWrapper extends Component {

    render() {
        return (
            <div className="page-content">
                <div className="container">
                    <div className="cover shadow-lg bg-white">
                        <Heading></Heading>
                        <About></About>
                        <hr className="d-print-none" />
                        <Skills></Skills>
                        <hr className="d-print-none" />
                        <Experience></Experience>
                        <hr className="d-print-none" />
                        <div className="page-break"></div>
                        <Education></Education>
                        <hr className="d-print-none" />
                        <Contact></Contact>
                    </div>
                </div>
            </div>
        )
    }
}