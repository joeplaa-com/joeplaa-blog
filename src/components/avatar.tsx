import Img from 'react-optimized-image'
import { images } from '../lib/images'
import { AuthorProps } from '../types'

export default function Avatar({ name, picture }: AuthorProps) {
    return (
        <div className='d-flex flex-row align-items-center'>
            <img
                src={images[picture]}
                alt={name}
                className='img-fluid mr-2 rounded-circle' 
                width='50px' />
            <div>{name}</div>
        </div>
    );
}
