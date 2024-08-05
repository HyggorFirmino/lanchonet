import React, { useState } from 'react';
import { Button, Card, CardBody, CardTitle, Form } from 'react-bootstrap';


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
        style={{ color:"#ffffff", backgroundColor: "#db8e16", marginBottom: "50px" }}
        className="mx-auto mt-5"
      >
        <CardTitle className="mb-4">Login</CardTitle>
        <CardBody>
          <Form onSubmit={handleSubmit}>
            <Form.Group controlId="username" className="mb-4">
              <Form.Label lg>Email: </Form.Label>
              <Form.Control
                type="text"
                value={username}
                onChange={(event: React.ChangeEvent<HTMLInputElement>) =>
                  setUsername(event.target.value)
                }
              />
            </Form.Group>
            <Form.Group controlId="password" className="mb-4">
              <Form.Label>Senha: </Form.Label>
              <Form.Control
                type="password"
                value={password}
                onChange={(event: React.ChangeEvent<HTMLInputElement>) =>
                  setPassword(event.target.value)
                }
              />
            </Form.Group>
            {error && <p style={{ color: 'red' }}>{error}</p>}
            <Button type="submit" style={{backgroundColor: "rgba(66, 34, 11, 0.6)"}}>
              Login
            </Button>
          </Form>
        </CardBody>
      </Card>
    </>
  );
};

export default LoginPage;