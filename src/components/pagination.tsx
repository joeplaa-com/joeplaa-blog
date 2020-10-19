
import React from 'react'
import { Link } from 'gatsby'
import { Button } from 'reactstrap'
import { PaginationProps } from '../types'
import { IconContext } from 'react-icons'
import { MdArrowBack, MdArrowForward } from 'react-icons/md'

const Pagination = ({ currentPage, numPages, path }: PaginationProps) => {
    const prevPage = currentPage - 1 === 1 ? path :  `${path}/${(currentPage - 1).toString()}`;
    const nextPage = `${path}/${(currentPage + 1).toString()}`;
    const isFirst = currentPage === 1;
    const isLast = currentPage === numPages;
    return (
        <>
            <hr />
            <div className='d-flex justify-content-between'>
                {!isFirst && (
                    <Link to={prevPage} rel="prev">
                        <Button outline color='primary' className="d-inline-flex justify-content-center align-items-center">
                            <IconContext.Provider value={{ size: '1.25rem' }}><MdArrowBack /></IconContext.Provider>
                            <span>Previous Page</span>
                        </Button>
                    </Link>
                )}
                {Array.from({ length: numPages }, (_, i) => (
                    <span className='d-none d-md-inline'>
                        <Link key={`pagination-number${i + 1}`} to={`${path}/${i === 0 ? "" : i + 1}`}>
                            <Button active={i + 1 === currentPage} outline color='primary'>{i + 1}</Button>
                        </Link>
                    </span>
                ))}
                {!isLast && (
                    <Link to={nextPage} rel="next">
                        <Button outline color='primary' className="d-inline-flex justify-content-center align-items-center">
                            <span>Next Page</span>
                            <IconContext.Provider value={{ size: '1.25rem' }}><MdArrowForward /></IconContext.Provider>
                        </Button>
                    </Link>
                )}
            </div>
        </>
    )
}

export default Pagination;