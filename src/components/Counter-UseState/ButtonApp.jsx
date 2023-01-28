import React from 'react'

export const ButtonApp = ({children, onClick}) => {
  return (
    <>
      <button className="Boton" onClick={onClick}>{children}</button>
    </>
  )
}
