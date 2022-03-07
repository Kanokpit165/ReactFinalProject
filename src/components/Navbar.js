import React, { Component } from 'react'
import Navitems from './Navitems'

class Navbar extends Component {
    constructor(props) {
        super(props);
        this.state = {
            'NavItemActive': ''
        }
    }

    render() {
        return (
            <nav>
                <ul>
                    <Navitems item="Home" tolink="/"></Navitems>
                    <Navitems item="About" tolink="/about"></Navitems>
                    <Navitems item="Resume" tolink="/resume"></Navitems>
                    <Navitems item="Product" tolink="/product"></Navitems>
                    <Navitems item="Cart" tolink="/cart"></Navitems>
                    <Navitems item="Contact" tolink="/contact"></Navitems>
                </ul>
            </nav>
        )
    }

    newMethod() {
        return <Navitems item="Home" tolink="/"></Navitems>;
    }
}

export default Navbar