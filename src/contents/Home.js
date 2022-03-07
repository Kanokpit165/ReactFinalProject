import React, { Component } from 'react'
import Social from '../components/Social'
import profilepic from '../img/profile.jpg'


class Home extends Component {
    render() {
        return(
            <div className="condiv home">
                <img src={profilepic} alt="profile" className="profilepic" />
                <p className="typingeffect">I'm a Graphic Designer</p>
                <Social />
            </div>
        );
    }
}

export default Home;