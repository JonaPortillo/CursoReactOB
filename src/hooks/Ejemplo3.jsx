/**
 * Ejemplo Hooks:
 * - useState()
 * - UseContext()
 */

import React, {useState, useContext} from 'react';

// Lo creamos null, y se lenará con los datos del padre
const miContexto = React.createContext(null)

/**
 * 
 * @returns Componenete 1
 * Dispone de un contexto que va a tener un valor
 * que recibe del padre
 */
const Component1 = () => {

    const state = useContext(miContexto)
    
    return (
        <div>
            <h1>
                El token es: {state.token}
            </h1>
            {/* Pintamos Componente 2 */}
            <Component2></Component2>
        </div>
    );
}

const Component2 = () => {

    const state = useContext(miContexto);

    return (
        <div>
            <h2>
                Las sesión es: {state.sesion}
            </h2>        
        </div>
    );
}

const MiComponenteConContexto = () => {

    const estadoInicial = {
        token:'123456',
        sesion: 1
    }

    // Creamos el estado de este componente
    const [sesionData, setSesionData] = useState(estadoInicial);

    function actulizarSesion() {
        setSesionData(
            {
                token: 'jlpjlpjlp',
                sesion: sesionData.sesion + 1
            }
        )
    }

    return (
        <miContexto.Provider value={sesionData}>
            {/* Todo lo que está aquí puede leer los datos de sesionDataa */}
            {/* Ademas si se actualizan estos componentes, también lo actualizar */}
            <h1>
                Ejemplo de useState() y useContext()
            </h1>
            <Component1></Component1>
            <button onClick={actulizarSesion}>Actualizar Sesion</button>
        </miContexto.Provider>
    );
}

export default MiComponenteConContexto;
