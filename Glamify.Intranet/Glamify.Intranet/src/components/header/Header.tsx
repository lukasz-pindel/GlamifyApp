import * as React from "react";
import { Button, Container, Form, InputGroup, Navbar } from "react-bootstrap";
import { BsSearch } from "react-icons/bs";
import { Link } from "react-router-dom";
import header from "../../assets/header.jpg";
import { AuthModal } from "./AuthModal";
import { useAuth } from "../../context/AuthContext";

export const Header: React.FC = () => {
  const [showModal, setShowModal] = React.useState(false);
  const [isLoginModal, setIsLoginModal] = React.useState(true);
  const { user } = useAuth();

  const handleLogin = () => {
    setIsLoginModal(true);
    setShowModal(true);
  };

  const handleSignUp = () => {
    setIsLoginModal(false);
    setShowModal(true);
  };

  return (
    <>
      <Navbar
        style={{
          height: "400px",
          backgroundImage: `url(${header})`,
          backgroundSize: "cover",
          backgroundRepeat: "no-repeat",
          zIndex: 1,
        }}
        expand="lg"
      >
        <Container
          style={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            justifyContent: "center",
            height: "100%",
          }}
        >
          <div style={{ position: "absolute", top: 15, left: 15 }}>
            <Link to="/" style={{ textDecoration: "none" }}>
              <h5 style={{ color: "white" }}>Glamify</h5>
            </Link>
          </div>
          <h1 style={{ marginBottom: "20px", color: "white" }}>Glamify</h1>
          <InputGroup style={{ width: "400px" }}>
            <InputGroup.Text>
              <BsSearch />
            </InputGroup.Text>
            <Form.Control type="text" placeholder="Search" />
          </InputGroup>
        </Container>
        {!user ? (
          <div style={{ position: "absolute", top: 15, right: 15 }}>
            <Button
              variant="outline-light"
              style={{ marginRight: "10px" }}
              onClick={handleLogin}
            >
              Login
            </Button>
            <Button variant="light" onClick={handleSignUp}>
              Sign Up
            </Button>
          </div>
        ): (
          <div style={{ position: "absolute", top: 15, right: 15 }}>
            <Button variant="outline-light" onClick={() => console.log("logout")}>
              Logout
            </Button>
          </div>
        )}
      </Navbar>
      <AuthModal
        show={showModal}
        onHide={() => setShowModal(false)}
        isLogin={isLoginModal}
      />
    </>
  );
};
