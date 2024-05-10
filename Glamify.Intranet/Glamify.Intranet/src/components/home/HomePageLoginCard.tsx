import React, { useState } from 'react';
import { Button, Form } from 'react-bootstrap';
import { useAuth } from '../../context/AuthContext';

export const HomePageLoginCard: React.FC = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const { login, register } = useAuth();

  const handleSubmit = async (isLogin: boolean) => {
    try {
      const user = { username, password };

      if (isLogin) {
        await login(user);
      } else {
        await register(user);
      }
      console.log("Authentication successful");
    } catch (error) {
      console.error("Authentication failed:", error);
    }
  };

  return (
    <div className="auth-container" style={{ minHeight: "800px", maxWidth: '400px', margin: 'auto' }}>
      <h2 className="mt-5">{"Login or sign up"}</h2>
      <Form>
        <Form.Group controlId="username">
          <Form.Label>Username</Form.Label>
          <Form.Control
            type="text"
            placeholder="Enter username"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
          />
        </Form.Group>
        <Form.Group controlId="password">
          <Form.Label>Password</Form.Label>
          <Form.Control
            type="password"
            placeholder="Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
        </Form.Group>
        <div className="mt-3 mb-3">

        <Button variant="primary" className="book-btn me-3" onClick={() => handleSubmit(true)}>
          {"Login"}
        </Button>
        <Button variant="primary" className="book-btn" onClick={() => handleSubmit(false)}>
          {"Register"}
        </Button>
        </div>
      </Form>
    </div>
  );
};
