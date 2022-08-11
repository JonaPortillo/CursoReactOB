/**
 * Ejemplo de uso de:
 * - useState()
 * - useRef()
 * - userEfect()
 */

import React, { useState, useRef, useEffect  } from 'react';

const Ejemplo2 = () => {

    // Vamos a crear 2 contadores distintos
    //Cada uno en un estado diferente
    const [contador1, setContador1] = useState(0);
    const [contador2, setContador2] = useState(0);

    // Vamos a crear una referencia con useRed para asociar una variable
    // con un elemento de DOM del componente (vista)
    const miRef = useRef();

    function incrementar1(params) {
        setContador1(contador1 + 1)        
    }

    function incrementar2(params) {
        setContador2(contador2 + 1) 
    }

    /**
     * Trabajando con UseEfect
     */

    /**
     * ? Caso 1: Ejecutar SIEMPRE un snippet de código
     * Cada vez que hay un cambio en el estado del componenet
     * se ejecuta aquello que estñe dentro del useEffect()
     */

 /*    useEffect(() => {
        console.log('Cambio en el estado del componente');
        console.log('Mostrando referencia a elemento del DOM:');
        console.log(miRef)
    }); */

    /**
     * ? Caso 2: Ejecutar solo cuando cambia el Contador 1
     */

/*     useEffect(() => {
        console.log('Cambio en el estado del Contador q');
        console.log('Mostrando referencia a elemento del DOM:');
        console.log(miRef)
    }, [contador1]); */

    /**
     * ? Caso 3: Ejecutar solo cuando cambia el Contador 1 o 2
     * Hay que listar los componenetes
     */

     useEffect(() => {
        console.log('Cambio en el estado del Contador q');
        console.log('Mostrando referencia a elemento del DOM:');
        console.log(miRef)
    }, [contador1, contador2]);


    return (
        <div>
            <h1>Ejemplo de Use state(), useRef() y useEfect()</h1>
            <h2>CONTADOR 1: {contador1}</h2>
            <h2>CONTADOR 2: {contador2}</h2>
            {/* Elemento referenciado */}
            <h4 ref={miRef}>
                Ejemplo de elemento referenciado
            </h4>
            {/* Botones para cambiar los contadorres */}
            <div>
                <button onClick={incrementar1}>Contador 1 +</button>
                <button onClick={incrementar2}>Contador 2 +</button>
            </div>
        </div>
    );
}

export default Ejemplo2;
