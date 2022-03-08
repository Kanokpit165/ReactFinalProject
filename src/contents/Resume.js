import React, { Component } from 'react';
import Widecard from '../components/Widecard';

class Resume extends Component {
    render() {
        return(
            <div className='condiv'>
              <h1 className='subtopic'>My Resume</h1>
              <Widecard title="ART|DESIGN Graphic Designer" where="Thai-Nichi Industry" from="2018" to="Present" />
              <Widecard title="ART|DESIGN Graphic Designer" where="Thai-Nichi Industry" from="2018" to="Present" />     
            </div>
        )
    }
}

export default Resume;