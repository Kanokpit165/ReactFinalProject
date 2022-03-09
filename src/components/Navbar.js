import React, { Component } from 'react'
import Navitems from './Navitems'

class Navbar extends Component {
    constructor(props) {
        super(props);
        this.state = {
            'NavItemActive': ''
        }
    }

    /*activeitem = (item) => {
        if (this.state,NavItemActive,length > 0) {
            document.getElementById(this.state.NavItemActive).classList.remove('active');
        }
        this.setState({ 'NavItemActive': item }, () => {
            document.getElementById(this.state.NavItemActive).classList.add('active');
        })
    }
     activenav={this.activeitem}></Navitems>*/

    render() {
        return (
            <nav>
                <ul>
                    <Navitems item="Home" tolink="/" ></Navitems>
                    <Navitems item="About" tolink="/about" ></Navitems>
                    <Navitems item="Resume" tolink="/resume" ></Navitems>
                    <Navitems item="Portfolio" tolink="/potfolio" ></Navitems>
                    <Navitems item="Product" tolink="/product" ></Navitems>
                    <Navitems item="Cart" tolink="/cart" ></Navitems>
                    <Navitems item="Contact" tolink="/contact"></Navitems>
                </ul>
            </nav>
        )
    }

    newMethod() {
        return <Navitems item="Home" tolink="/"></Navitems>;
    }
}

export default Navbar;