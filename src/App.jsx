import './App.css'
import 'bootstrap/dist/css/bootstrap.min.css';
import Registro from './components/Registro';
import { useState } from 'react'

function App() {
  const [nombre, setNombre] = useState("")
  const [email, setEmail] = useState("")
  const [contrasena, setContrasena] = useState("")
  const [confirm, setConfirm] = useState("")
  const [errorllenado, setErrorllenado] = useState(false)
  const [errorigualdadpass, setErrorigualdadpass] = useState(false)
  const [errorpass, setErrorpass] = useState(false)
  const [erroremail, setErroremail] = useState(false)
  const [errorllenadomsg, setErrorllenadomsg] = useState(false)
  const [errorigualdadpassmsg, setIgualdadpassmsg] = useState(false)
  const [errorpassmsg, setErrorpassmsg] = useState(false)
  const [erroremailmsg, setErroremailmsg] = useState(false)
  const [noerror, setNoerror] = useState(false)
  const [noerrormsg, setNoerrormsg] = useState("")

  function contrasenaSegura(clave) {
    const longitudValida = clave.length >= 8;
    const contieneNumero = /\d/.test(clave);

    return longitudValida &&  contieneNumero;
  }

  const validarLlenadoCampos = (e) => {
    e.preventDefault()
    if (nombre == '' || email == '' || contrasena== '' || confirm == '') {
      setErrorllenado(true)
      setNoerror(false)
      setErrorllenadomsg("Completa todos los campos!")
      return
    } else {
      setErrorllenado(false)
      validarPass(e)
    }
  }

  const validarIgualdadPass = (e) => {
    e.preventDefault()
    if (contrasena !== confirm) {
      setErrorigualdadpass(true)
      setErrorpass(false)
      setNoerror(false)
      setIgualdadpassmsg("Los contraseñas no coinciden!")
      return
    } else {
      setErrorllenado(false)
      setErroremail(false)
      setErrorpass(false)
      setErrorigualdadpass(false)
      setNoerror(true)
      setNoerrormsg("Registro exitoso!")
      setNombre("")
      setEmail("")
      setContrasena("")
      setConfirm("")
    }
  }

  const validarPass = (e) => {
    e.preventDefault()
    if (contrasenaSegura(clave)) {
      validarIgualdadPass(e)
    } else {
      setErrorpass(true)
      setNoerror(false)
      setErrorpassmsg("La contraseña elegida no cumple con los requisitos de seguridad necesarios. Asegúrate de que tu contraseña tenga al menos 8 caracteres y contenga al menos una letra mayúscula, una letra minúscula, un número y un carácter especial (como !@#$%^&*). Intenta crear una contraseña que sea difícil de adivinar para otros, combinando estos elementos de manera única.")
      return
    }
  }

  const validarEmail = (e) => {
    e.preventDefault()
    const regex = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]\.[0-9]\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    if (!regex.test(email)) {
      setErroremail(true)
      setNoerror(false)
      setErroremailmsg("El email debe ser valido!")
      return
    }
    setErroremail(false)
  }

  const info= (e) => {
    e.preventDefault()
    validarLlenadoCampos(e)
    validarEmail(e)

  }
  return (
    <div>
    <div className='card'>
      <div className='formContainer'>
        <h1>Crea tu cuenta</h1>
        <Registro errorllenado={errorllenado}
          errorllenadomsg={errorllenadomsg}
          info={info}
          nombre={nombre}
          setNombre={setNombre}
          email={email}
          setEmail={setEmail}
          contrasena={contrasena}
          setContrasena={setContrasena}
          confirm={confirm}
          setConfirm={setConfirm}
          erroremail={erroremail}
          erroremailmsg={erroremailmsg}
          errorigualdadpass={errorigualdadpass}
          errorigualdadpassmsg={errorigualdadpassmsg}
          errorpass={errorpass}
          errorpassmsg={errorpassmsg}
          noerror={noerror}
          noerrormsg={noerrormsg}
        />
      </div>
    </div>
    </div>
  )
}

export default App