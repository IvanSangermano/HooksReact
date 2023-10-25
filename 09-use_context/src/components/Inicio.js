import React, {useContext} from 'react'
import { PruebaContext } from '../context/PruebaContext'

export const Inicio = () => {

  const {user} = useContext(PruebaContext)

  return (
    <div>
      <h1>Inicio</h1>
      <p>Valor de compartida: {user.nombre} / {user.web}</p>

      {/* <p>Valor de compartida: {JSON.stringify(compartida)}</p> */}
    </div>
  )
}
