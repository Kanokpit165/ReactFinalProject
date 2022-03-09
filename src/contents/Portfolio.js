import React, { Component } from 'react'
import YouTubePlayer from '../components/Youtube';
import Social from '../components/Social';

class Portfolio extends Component {
    render() {
        return(
            <div className="condiv_portfolio">
                <YouTubePlayer videoId='IkaFKMF8'/>
                <h1 className='subtopic_youtube1'> Horny Boys </h1>
                <Social />
            </div>
        );
    }
}

export default Portfolio;