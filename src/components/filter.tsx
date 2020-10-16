import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Button, Card, CardBody, Col, Row, Modal, ModalHeader, ModalBody, ModalFooter } from 'reactstrap'
import { FaSlidersH } from 'react-icons/fa'
import Select from 'react-select'
import makeAnimated from 'react-select/animated'
import Tag from '../components/tag'
import { filterActionCreators } from '../store/actions/filter'
import { IRootState } from '../store/interfaces'
import { content } from '../utils/data'
import { FilterProps, LabelProps } from '../types'

export default function Filter({ page, tags }: FilterProps) {
    const dispatch = useDispatch();
    const filterSelector = (state: IRootState) => state.filter;
    const filter = useSelector(filterSelector);
    const selectedTags = filter.selectedTags[page].length > 0 ? filter.selectedTags[page] : tags;

    const [modal, setModal] = useState(false);
    function toggle() {
        setModal(!modal);
    }

    function setFilter(el: Array<LabelProps>) {
        dispatch(filterActionCreators.setTagsFilter(page, el))
    }

    function applyFilter() {
        toggle();
    }

    function resetFilter() {
        dispatch(filterActionCreators.setTagsFilter(page, tags));
    }

    const animatedComponents = makeAnimated();
    return (
        <section>
            <Row className='filter'>
                <Col className='mx-auto'>
                    <Card>
                        <CardBody>
                            <Row className='d-flex justify-content-between align-items-center'>
                                <Col className='align-items-center flex-wrap tags'>
                                    {selectedTags.map(tag => (
                                        <Tag key={tag.value} tag={tag} page={page} />
                                    ))}
                                </Col>
                                <Col xs='auto' className='mt-2 mt-sm-0 ml-auto'>
                                    <Button outline color='primary' onClick={toggle} aria-label='filter-button'>
                                        <FaSlidersH />
                                        <span className={'d-none d-sm-inline'}>{' '}{content.Filter}</span>
                                    </Button>
                                </Col>
                            </Row>
                        </CardBody>
                    </Card>
                </Col>
            </Row>
            <Modal isOpen={modal} toggle={toggle}>
                <ModalHeader toggle={toggle}>{content.FilterTags}</ModalHeader>
                <ModalBody>
                    <Select
                        closeMenuOnSelect={false}
                        components={animatedComponents}
                        value={selectedTags}
                        isClearable={false}
                        isMulti
                        name='tags'
                        options={tags}
                        onChange={setFilter}
                    />
                </ModalBody>
                <ModalFooter>
                    <Button outline color='primary' onClick={resetFilter}>{content.ShowAll}</Button>{' '}
                    <Button color='primary' onClick={applyFilter}>{content.Ok}</Button>{' '}
                </ModalFooter>
            </Modal>
        </section>
    );
}