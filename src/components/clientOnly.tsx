import { ReactElement } from 'react';
import useHasMounted from '../hooks/useHasMounted'

export default function ClientOnly({ children, ...delegated }: { children: ReactElement | Array<ReactElement> }) {
    const hasMounted = useHasMounted();
    if (!hasMounted) {
        return null;
    }

    return (
        <div {...delegated}>
            {children}
        </div>
    );
}