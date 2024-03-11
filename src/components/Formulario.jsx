import React from 'react'


function Formulario(props) {

    return (
        <>
            <form className="formulario" onSubmit={props.info}>
                <div className="form-group">
                    <input
                        type="text" 
                        value={props.nombre} 
                        name="nombre" 
                        className="form-control"
                        placeholder='Nombre' 
                        onChange={(e) => props.setNombre(e.target.value)}
                    />
                </div>
                <div className="form-group">
                    <input
                        type="text" value={props.email} 
                        className="form-control"
                        placeholder='tuemail@ejemplo.com'
                        name="email"
                          onChange={(e) => props.setEmail(e.target.value)}
                    />
                </div>
                <div className="form-group">
                    <input
                        type="text" value={props.contrasena} 
                        className="form-control"
                        placeholder='Contraseña' 
                        name="contrasena" 
                         onChange={(e) => props.setContrasena(e.target.value)}
                    />
                </div>
                <div className="form-group">
                    <input
                        type="text" value={props.confirm} 
                        className="form-control" 
                        placeholder='Confirma tu contraseña'
                         name="confirm" 
                         onChange={(e) => props.setConfirm(e.target.value)}
                    />
                </div>
                <button type="submit" className="btn btn-danger" >Registrarse</button>
            </form>
        </>
    )
}

export default Formulario;