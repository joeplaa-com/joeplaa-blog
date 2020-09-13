import { useRouter } from 'next/router'
import { Button, Col, Row } from 'reactstrap'
import { FaTimes } from 'react-icons/fa'
import DateFormater from './date-formater'
import CoverImage from './cover-image'
import { data } from '../lib/data'
import { PostHeaderProps } from '../types'

export default function PortfolioHeader({ title, coverImage, date, slug, page }: PostHeaderProps) {
    const router = useRouter();
    return (
        <>
            <Row>
                <Col>
                    <h1>{title}</h1>
                </Col>
                <Col xs='auto' className='float-right'>
                    <Button outline color='dark' onClick={() => router.back()}>
                        <FaTimes />
                        <span>{' '}{data.Backto}</span>
                    </Button>
                </Col>
            </Row>
            <div className='mb-2 mt-2 mb-sm-3 mt-sm-3 mb-sm-4 mt-sm-4'>
                <CoverImage title={title} picture={coverImage} slug={slug} rounded={true} page={page} />
            </div>
            <div className='mx-auto mb-2 mt-2 mb-sm-3 mt-sm-3 mb-sm-4 mt-sm-4'>
                <em><DateFormater dateString={date} /></em>
            </div>
        </>
    );
}
