import React from "react";
import logo from '../../assets/logo-dio.png'
import {BuscarInputContainer, Column,Container,Input,Menu,MenuRight,Row,UserPicture,Wrapper} from './styles'
import {Button} from '../Button'

const Header = () => 
{
  return(
    <Wrapper>
      <Container>
        <Row>
          <img src={logo} alt="Logo da Dio"/>
          <BuscarInputContainer>
            <Input placeholder="Buscar..."/>
          </BuscarInputContainer>
      <Menu>Live Code</Menu>
      <Menu>Global</Menu>
        </Row>
      </Container>
      </Wrapper>
  )
}

export {Header}