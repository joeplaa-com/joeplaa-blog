import React from 'react'
import { Card, CardBody } from 'reactstrap'
import Filter from './filter'
import { FilterProps } from '../types'

export default function FilterCard({ back, pathname, tags }: FilterProps) {
    return (
        <section>
            <Card>
                <CardBody>
                    <Filter back={back} pathname={pathname} quantity={true} tags={tags} />
                </CardBody>
            </Card>
        </section>
    );
}