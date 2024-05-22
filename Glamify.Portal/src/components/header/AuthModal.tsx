import React, { useState } from "react";
import { Modal, Button, Form } from "react-bootstrap";
import { useAuth } from "../../context/AuthContext";
import { UserRequest } from "../../model/requests/UserRequest";

interface AuthModalProps {
  show: boolean;
  onHide: () => void;
  isLogin: boolean;
}

export const AuthModal: React.FC<AuthModalProps> = ({
  show,
  onHide,
  isLogin,
}) => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const { login, register } = useAuth();

  const handleSubmit = async () => {
    try {
      const user: UserRequest = {
        username: username,
        password: password,
      };

      if (isLogin) {
        await login(user);
      } else {
        await register(user);
      }
      console.log("Login successful");
      onHide();
    } catch (error) {
      console.error("Login or registration failed:", error);
    }
  };

  return (
    <Modal show={show} onHide={onHide} centered style={{zIndex: 6000}}>
      <Modal.Header closeButton>
        <Modal.Title>{isLogin ? "Login" : "Sign Up"}</Modal.Title>
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
        <Button variant="secondary" onClick={onHide}>
          Cancel
        </Button>
        <Button variant="primary" className="book-btn" onClick={handleSubmit}>
          {isLogin ? "Login" : "Register"}
        </Button>
      </Modal.Footer>
    </Modal>
  );
};
