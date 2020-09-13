import { PostBodyProps } from '../types'

export default function PostBody({ content }: PostBodyProps) {
    return (
        <div className='mx-auto'>
            <div className='markdown' dangerouslySetInnerHTML={{ __html: content }} />
        </div>
    );
}
