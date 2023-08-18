import React, { useEffect, useState } from 'react';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

const Home = () => {
    return (
        <Container>
            <Row>
                <Col>1 of 2</Col>
                <Col>2 of 2</Col>
            </Row>
        </Container>
    );
};
export default Home;