import React, {useContext} from 'react'
import { PruebaContext } from '../context/PruebaContext'

export const Contacto = () => {

  const datoDesdeElContexto = useContext(PruebaContext);

  return (
    <div>
      <h1>Contacto</h1>
      {/* <p>Valor de compartida: {datoDesdeElContexto.contenido}</p> */}
    </div>
  )
}
