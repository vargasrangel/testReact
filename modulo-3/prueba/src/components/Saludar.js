function Saludar(props){ //PROPS es un bojeto obj.llave 
  //CHILDREN es una propieda especial donde viene el contenido del componente
  const {nombre, residencia, estilo, children} = props //Se puede hacer con DESTRUCTURACION
    return(
      <div>
         <h2 className={estilo}> Holi! - {nombre} te voy a visitar en {residencia}</h2>
         {children}
      </div>
    )
}

export default Saludar;