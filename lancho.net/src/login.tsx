import React from 'react';
import {
  Form,
  Button,
  Row,
  Col,
  Container,
  InputGroup,
} from 'react-bootstrap';
import './login.css'

function Login() {
  return (
    <>
    
    <div className="App">
      <Container>
        <Row className="mt-5 title">
          <Col xs={12}>
            <h2 className="text-center">Criar conta ou Entrar</h2>
            <p className="text-center">
              Faça login ou crie sua conta abaixo
            </p>
          </Col>
        </Row>
        <Row className="mt-5">
          <Col xs={12} md={6}>
            <Form className='cadastro'>
              <h4 className="mb-3">Faça seu Cadastro</h4>
              <p className="mb-3">
                Se você ainda não tem conta, preencha o formulário abaixo:
              </p>
              <Form.Group className="mb-3" controlId="formBasicName">
                <Form.Label className='label'>Seu nome</Form.Label>
                <Form.Control type="text" placeholder="Seu nome" />
              </Form.Group>
              <Form.Group className="mb-3" controlId="formBasicBirthday">
                <Form.Label className='label'>Sua data de nascimento</Form.Label>
                <InputGroup>
                  <Form.Control type="date" placeholder="dd/mm/aaaa" />
                </InputGroup>
              </Form.Group>
              <Form.Group className="mb-3" controlId="formBasicEmail">
                <Form.Label className='label'>Seu e-mail</Form.Label>
                <Form.Control type="email" placeholder="Seu e-mail" />
              </Form.Group>
              <Form.Group className="mb-3" controlId="formBasicPassword">
                <Form.Label className='label'>Sua senha</Form.Label>
                <Form.Control type="password" placeholder="Sua senha" />
              </Form.Group>
              <button className='section__form-button' type="submit">
                Criar conta
              </button>
            </Form>
          </Col>
          <Col xs={12} md={6}>
            <Form className='login'>
              <h4 className="mb-3">Faça login</h4>
              <p className="mb-3">
                Se você tem conta, preencha o formulário abaixo:
              </p>
              <Form.Group className="mb-3" controlId="formBasicEmail">
                <Form.Label className='label'>Seu e-mail</Form.Label>
                <Form.Control type="email" placeholder="Seu e-mail" />
              </Form.Group>
              <Form.Group className="mb-3" controlId="formBasicPassword">
                <Form.Label className='label'>Sua senha</Form.Label>
                <Form.Control type="password" placeholder="Sua senha" />
              </Form.Group>
              <button className='section__form-button mx-2' type="submit">
                Entrar
              </button>
              <button className='section__form-button' type="submit">
                Redefinir Senha
              </button>
            </Form>
          </Col>
        </Row>
      </Container>
    </div>
    </>
  );
}

export default Login;