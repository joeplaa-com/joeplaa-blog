import React, { ReactElement } from 'react';
import { Container, Col, Row } from 'reactstrap';
import Copyright from './copyright';
import Social from './social';
import useSiteSettings from '../hooks/useSiteSettings';
import { SectionProps } from '../types';

export default function Footer({ className }: SectionProps): ReactElement {
    const { breakpoint } = useSiteSettings();
    return (
        <footer className={className + ' ' + 'footer'}>
            <Container>
                <Row>
                    <Col xs='12' className={`col-${breakpoint}-auto mx-auto text-center`}>
                        <Copyright color='light' />
                    </Col>
                </Row>
                <Social color='light' key='Footer' size='2rem' />
            </Container>
        </footer>
    );
}
