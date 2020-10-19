
import React from 'react'
import { Link } from 'gatsby'
import { Button } from 'reactstrap'
import { PaginationProps } from '../types'

const Pagination = ({ currentPage, numPages, path }: PaginationProps) => {
    const prevPage = currentPage - 1 === 1 ? path : (currentPage - 1).toString();
    const nextPage = (currentPage + 1).toString();
    const isFirst = currentPage === 1;
    const isLast = currentPage === numPages;
    return (
        <>
            <hr />
            <div className='d-flex justify-content-between'>
                {!isFirst && (
                    <Link to={prevPage} rel="prev">
                        <Button outline color='primary'>← Previous Page</Button>
                    </Link>
                )}
                {Array.from({ length: numPages }, (_, i) => (
                    <Link key={`pagination-number${i + 1}`} to={`${path}/${i === 0 ? "" : i + 1}`}>
                        <Button active={i + 1 === currentPage} outline color='primary'>{i + 1}</Button>
                    </Link>
                ))}
                {!isLast && (
                    <Link to={nextPage} rel="next">
                        <Button outline color='primary'>Next Page →</Button>
                    </Link>
                )}
            </div>
        </>
    )
}

export default Pagination;