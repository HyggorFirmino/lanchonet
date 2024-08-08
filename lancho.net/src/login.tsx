import React, { useState } from 'react';
import { Button, Card, CardBody, CardTitle, Col, Form, Row } from 'react-bootstrap';


interface LoginPageProps {
  // Add any props you want to pass to the component here
}

const LoginPage: React.FC<LoginPageProps> = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState(null);

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    // Add your login logic here
    console.log(`Username: ${username}, Password: ${password}`);
  };

    

  return (
    <>
      <Card
        style={{ color:"#ffffff", backgroundColor: "#db8e16", marginBottom: "50px",height:"50vh", width: "70vw" }}
        className="mx-auto mt-5"
      >
        <CardTitle className="mb-4">Login</CardTitle>
        <CardBody style={{ backgroundColor: "rgba(0, 0, 0, 0.2)", backdropFilter: "blur(5px)" }}> 
          <Form onSubmit={handleSubmit}>
            <Form.Group as={Row} controlId="username" className="mb-4">
              <Form.Label column lg>Email: </Form.Label>
              <Col>
                <Form.Control
                  type="text"
                  value={username}
                  onChange={(event: React.ChangeEvent<HTMLInputElement>) =>
                    setUsername(event.target.value)
                  }
                />
              </Col>
            </Form.Group>
            <Form.Group as={Row} controlId="password" className="mb-4">
              <Form.Label column>Senha: </Form.Label>
              <Col>
                <Form.Control
                  style={{width: "35vw"}}
                  type="password"
                  value={password}

                  onChange={(event: React.ChangeEvent<HTMLInputElement>) =>
                    setPassword(event.target.value)
                  }
                />
              </Col>
            </Form.Group>
            {error && <p style={{ color: 'red' }}>{error}</p>}
            <Button type="submit" style={{backgroundColor: "rgba(66, 34, 11, 0.6)", width: "100%"}}>
              Login
            </Button>
          </Form>
        </CardBody>
      </Card>
    </>
  );
};

export default LoginPage;