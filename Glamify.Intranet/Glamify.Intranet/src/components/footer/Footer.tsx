import * as React from "react";
import { Container } from "react-bootstrap";

export const Footer: React.FC = () => {
  return (
    <footer className="bg-dark text-white p-3" style={{ height: "200px" }}>
      <hr style={{ width: "100%" }} />
      <Container>© 2024 Glamify</Container>
    </footer>
  );
};
