import React from "react";
import logo from '../../assets/logo-dio.png'
import {BuscarInputContainer, Container,Input,Menu,Row,Wrapper} from './styles'
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
        <Button />
      </Container>
      </Wrapper>
  )
}

export {Header}