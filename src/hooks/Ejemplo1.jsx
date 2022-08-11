/* Ejemplo de uso del Hook useState */
//Crear componenete de tipo gfuncion y acceder a su estado privado a traves de un hook, y poder modificarlo

import React, {useState} from 'react';

const Ejemplo1 = () => {

    //Valor inicial para un contador
    const valorInical = 0;

    //Valor inicial para una persona
    const personaInicial = {
        nombre : 'Joni',
        email: 'joni@gmail.com'
    }

    /*  Queremos que el Valor inicial y PERSONA INICIAL sean 
        parte del estado dell componenete, paar así gestionar su cambio 
        y que éste se vea reflejado en la vista del componenete
        const [nombreVariable, funciionParaCambiar] = useState(valorInicial)    
    */
    const [contador, setContador] = useState(valorInical);
    const [persona, setPersona] = useState(personaInicial);

    /**
     *Funcion para actualizar el estado privado que contiene el contador 
    */
    function incrementarContador(){
        // ? funcionParaCambiar(nuevoValor)
        setContador(contador + 1)
    }
    
    /**
     * Funcion para actualizar el estado de persona en el componente
      */
    function actualizarPersona() {
        setPersona(
            {
                nombre: 'Pepe',
                email: 'pepe@gmail.com'
            }
        )
    }

    return (
        <div>
            <h1>Ejemplo de Use state()</h1>
            <h2>CONTADOR: {contador}</h2>
            <h2>PERSONA:</h2>
            <h3>NOMBRE: {persona.nombre}</h3>
            <h3>EMAIL: {persona.email}</h3>
            {/* Bloque de botones para actualizar el estado */}
            <button onClick={incrementarContador}>Incrementar contador</button>
            <button onClick={actualizarPersona}>Actualizar persona</button>
        </div>
    );
}

export default Ejemplo1;
