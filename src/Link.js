import React, { lazy, Suspense } from 'react';

const Component = lazy(() =>
    uniweb.getComponent('components', 'SimpleLink').catch(() => ({ default: () => null }))
);

export default function Link(props) {
    return (
        <Suspense fallback={''}>
            <Component {...props} />
        </Suspense>
    );
}
