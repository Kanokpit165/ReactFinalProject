import React, { Component } from 'react';
import Widecard from '../components/Widecard';
import Skills from '../components/Skills'

class Resume extends Component {
    render() {
        return(
            <div className='condiv'>
              <h1 className='subtopic_Resume'>My Resume</h1>
              <Widecard title="Information Technology" where="Thai-Nichi Industry" from="2018" to="2022" />
              <Widecard title="Founder Art Design Service of Graphic Design" where="ART Design Store" from="2019" to="Present" />
              <Widecard title="My Music Band" where="Horny Boys Band" from="2019" to="Present" />
              <Widecard title="Bassist" where="My Self" from="2012" to="Present" />
              <Skills />    
            </div>
        )
    }
}

export default Resume;