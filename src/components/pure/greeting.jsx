import React, { Component } from "react";
import PropTypes from "prop-types";

class Greeting extends Component {
    
    constructor(props) {
        super(props);
        this.state = {
            age : 23
        };
    }

    render() {
        return (
            <div>
                <h1>
                    Hola {this.props.name}!!
                </h1>
                <h2>
                    Tu edad es de: {this.state.age} años !!!
                </h2>
                <div>
                    <buttom onClick={this.birthday}> {/* Se llama a la función, Sin paréntesis */}
                        Cumplir años
                    </buttom>
                </div>
            </div>
        );
    }

    birthday = () =>{
        this.setState(
            (prevState) => (
                {
                    age: prevState.age + 1
                }
            )
        )
    }
}

Greeting.propTypes = {
    name:PropTypes.string
};

export default Greeting;
