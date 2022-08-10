import React, {useState} from 'react';
import PropTypes from 'prop-types';


const Greetingf = (props) => {

    // Breve intro a useState
    //const [VARIABLE, METODO PARA ACTUALIZAR] = useState(VALOR INICIAL);
    const [age, setage] = useState(23);

    const birthday = () =>{
        // actualizamos el state
        setage(age + 1)
    }
    
    return (
        <div>
            <h1>
                Hola {props.name} desde la Función!!
            </h1>
            <h2>
                    Tu edad es de: {age} años !!!
                </h2>
                <div>
                    <buttom onClick={birthday}> {/* Se llama a la función, Sin paréntesis */}
                        Cumplir años
                    </buttom>
                </div>
        </div>
    );
};


Greetingf.propTypes = {
    name:PropTypes.string
};


export default Greetingf;
