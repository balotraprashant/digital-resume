import React, { Component } from 'react'
import ResumeWrapper from './ResumeWrapper'
import Header from '../components/Header/Header'
import Footer from '../components/Footer/Footer'

export default class MainContainer extends Component {

    render() {
        return (
            <><Header></Header>
            <ResumeWrapper></ResumeWrapper>
            <Footer></Footer></>
        )
    }
}