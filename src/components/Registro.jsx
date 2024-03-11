import React from 'react'
import SocialButton from './SocialButton'
import Formulario from './Formulario'
import Alert from './Alert'
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

function Registro(props) {
    return (
      <>
      
        <div className='socialMedia'>
       <Row>   
       <Col><SocialButton icono="facebook" /></Col>
       <Col><SocialButton icono="github" /></Col>
       <Col><SocialButton icono="linkedin" /></Col>
       </Row>
        </div>
        <p>o usa tu mail para registrarte</p>
        <Formulario info={props.info}
          nombre={props.nombre}
          setNombre={props.setNombre}
          email={props.email}
          setEmail={props.setEmail}
          contrasena={props.contrasena}
          setContrasena={props.setContrasena}
          confirm={props.confirm}
          setConfirm={props.setConfirm}
        />
        {props.errorllenado ? <Alert errormsg={props.errorllenadomsg} status="alert alert-danger" /> : null}
        {props.errorigualdadpass ? <Alert errormsg={props.errorigualdadpassmsg} status="alert alert-danger" /> : null}
        {props.errorpass ? <Alert errormsg={props.errorpassmsg} status="alert alert-danger" /> : null}
        {props.erroremail ? <Alert errormsg={props.erroremailmsg} status="alert alert-danger" /> : null}
        {props.noerror ? <Alert errormsg={props.noerrormsg} status="alert alert-success" /> : null}
      </>
    )
  }
  
  export default Registro