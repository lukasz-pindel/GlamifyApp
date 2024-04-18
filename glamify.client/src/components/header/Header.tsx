import * as React from 'react';
import {  Container, Form,  InputGroup, Navbar } from 'react-bootstrap';
import { BsSearch } from 'react-icons/bs';
import { Link } from 'react-router-dom';

export const Header: React.FC = () => {
    return (
        <Navbar style={{ height: '400px', backgroundColor: '#4E5166' }} expand="lg">
            <Container style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', height: '100%' }}>
                <Navbar.Brand  style={{ position: 'absolute', top: 15, left: 15 }}>
                    <Link to="/" style={{textDecoration: 'none'}}>
                        <h4 style={{color: 'white'}}>Home</h4>
                    </Link>
                </Navbar.Brand>
                <h1 style={{ marginBottom: '20px', color: 'white' }}>Glamify</h1>
                <InputGroup style={{width: '400px'}}>
                    <InputGroup.Text>
                            <BsSearch />        
                    </InputGroup.Text>
                    <Form.Control type="text" placeholder="Search" />
                </InputGroup>
            </Container>
        </Navbar>
    );
}