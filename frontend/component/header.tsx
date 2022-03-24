import React from 'react';
import { Button, Modal, ModalBody, ModalFooter, Container, Col, Row, Alert, Card, Navbar, Nav, NavDropdown, Form, FormControl } from 'react-bootstrap';
import Head from "next/head";

export default function Header() {
    return <>
        <Head>
            <meta name="viewport" content="width=device-width, initial-scale=1" />
        </Head>
        <Navbar bg="light" expand="lg">
            <Container fluid>
                <Navbar.Collapse id="navbarScroll">
                    <Nav
                        className="me-auto my-2 my-lg-0"

                        navbarScroll
                    >
                        <Nav.Link href="/ball">Ball</Nav.Link>
                        <Nav.Link href="/cat">Cat</Nav.Link>
                        <Nav.Link href="/dog">Dog</Nav.Link>
                        <Nav.Link href="/goat">Goat</Nav.Link>
                    </Nav>

                </Navbar.Collapse>
            </Container>
        </Navbar>
    </>
}
