import React, { ReactElement } from 'react';
import { FaHashtag } from 'react-icons/fa';

export default function TagIcon(tag: string): ReactElement {
    switch (tag) {
        default: return <FaHashtag />;
    }
}
