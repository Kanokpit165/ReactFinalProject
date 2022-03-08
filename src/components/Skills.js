import React, { Component } from "react";

class Skills extends Component {

    constructor(props) {
        super(props);

        this.state = {
            'mysdkills': ['Photoshop', 'Illustrator', 'Procreate', 'Affinity']
        }

    }

    render() {
        return(
            <div className="condiv skills">
                <h1 className="subtopic">My Skills</h1>
                <ul>
                    {this.state.mysdkills.map((value) => {
                        return <li>value</li>
                    })}
                </ul>
            </div>

        );
    }
}

export default Skills;