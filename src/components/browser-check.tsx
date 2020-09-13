import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Button, Col, Modal, ModalHeader, ModalBody, ModalFooter, Row } from 'reactstrap';
import { browserName } from 'react-device-detect';
import { differenceInDays } from 'date-fns';
import { data } from '../lib/data';
import { urls } from '../lib/constants';
import { applicationActionCreators } from '../store/actions/application';

const BrowserCheck = () => {
    const dispatch = useDispatch();
    const application = useSelector((state) => state.application);

    const toggleHideModal = () => dispatch(applicationActionCreators.hideBrowserModal());
    const toggleShowModal = () => dispatch(applicationActionCreators.showBrowserModal());

    useEffect(() => {
        dispatch(applicationActionCreators.setBrowser(browserName));
    }, []);

    if (!application.isSupported) {
        // Browser unsupported: warn user and show download links for supported browsers, but allow them to continue.
        // Keep this state for one day. After one day the visitor gets the modal again.
        return (
            <section className='top-banner'>
                <Modal isOpen={application.showModal && (application.setModal === undefined || differenceInDays(new Date(), new Date(application.setModal)) > 1)} toggle={toggleHideModal}>
                    <ModalHeader toggle={toggleHideModal}>{data.UnsupportedTitle}</ModalHeader>
                    <ModalBody>
                        {data.UnsupportedMessage}
                        <p></p>
                        <div className='d-flex justify-content-around'>
                            <Button color='success' href={urls.chrome}>Google Chrome</Button>{' '}
                            <Button color='warning' href={urls.firefox}>Mozilla Firefox</Button>{' '}
                            <Button color='primary' href={urls.edge}>Microsoft Edge</Button>{' '}
                        </div>
                        <p></p>
                        {data.UnsupportedContinue}
                    </ModalBody>
                    <ModalFooter>
                        <Button outline color='primary' href={urls.browserInfo}>{data.Info}</Button>
                        <Button outline color='primary' onClick={toggleHideModal}>{data.Continue}</Button>
                    </ModalFooter>
                </Modal>
                <Row>
                    <Col className='top-banner-col'>
                        <div className='mr-2'>{data.ShowModalMessage}</div>
                        <Button outline color='dark' size='sm' onClick={toggleShowModal}>{data.ShowModal}</Button>
                    </Col>
                </Row>
            </section>
        );
    } else {
        return null;
    }
};

export default BrowserCheck;
