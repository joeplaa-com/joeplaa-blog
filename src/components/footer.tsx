import React from 'react'
import { Container, Col, Row } from 'reactstrap'
import Copyright from './copyright'
import Social from './social'
import { SectionProps } from '../types'

export default function Footer({ className }: SectionProps) {
    return (
        <footer className={className + ' ' + 'footer'}>
            <Container>
                <Row>
                    <Col xs='12' md='auto' className='mx-auto text-center'>
                        <Copyright color='light' />
                    </Col>
                </Row>
                <Social color='light' size='2rem' />
            </Container>
        </footer>
    );
}