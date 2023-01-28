import React from 'react'

export const ButtonReset = ({children, onClick, initialValue}) => {
  return (
    <>
      <button className="Boton" onClick={ () => onClick (initialValue)}>{children}</button>
    </>
  )
}
