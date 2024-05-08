import React, { useState } from 'react';
import { Modal, Button, Form } from 'react-bootstrap';
import UserService from '../../services/UserService';

interface AuthModalProps {
  show: boolean;
  onHide: () => void;
  isLogin: boolean;
}

export const AuthModal: React.FC<AuthModalProps> = ({ show, onHide, isLogin }) => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const userService = new UserService("https://localhost:44360");

  const handleSubmit = () => {
    if (isLogin) {
        userService.login(username, password)
            .then(user => {
                console.log('Login successful', user);
                onHide();
            })
            .catch(error => {
                console.error('Login failed:', error.response?.data || error.message);
            });
    } else {
        userService.register(username, password)
            .then(user => {
                console.log('Registration successful', user);
                onHide(); 
            })
            .catch(error => {
                console.error('Registration failed:', error.response?.data || error.message);
            });
    }
};

  return (
    <Modal show={show} onHide={onHide} centered>
      <Modal.Header closeButton>
        <Modal.Title>{isLogin ? 'Login' : 'Sign Up'}</Modal.Title>
      </Modal.Header>
      <Modal.Body>
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
        </Form>
      </Modal.Body>
      <Modal.Footer>
        <Button variant="secondary" onClick={onHide}>Cancel</Button>
        <Button variant="primary" className="book-btn" onClick={handleSubmit}>
          {isLogin ? 'Login' : 'Register'}
        </Button>
      </Modal.Footer>
    </Modal>
  );
};
