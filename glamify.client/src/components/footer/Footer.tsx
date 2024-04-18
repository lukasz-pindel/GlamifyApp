import * as React from 'react';
import { Container } from 'react-bootstrap';
import { Link } from 'react-router-dom';

export const Footer: React.FC = () => {
    return (
        <footer className="bg-dark text-white p-3" style={{height: "200px"}}>
            <div style={{display: "flex", justifyContent: "start", gap: "20px"}} className='mt-4'>
                <Link to="/about" style={{ color: "white" }}>About us</Link>
                <Link to="/faq"style={{ color: "white" }}>FAQ</Link>
                <Link to="/contact"style={{ color: "white" }}>Contact</Link>
            </div>
                <hr style={{ width: "100%"}} />
            <Container>
                © 2024 Glamify
            </Container>
        </footer>
    );
}
