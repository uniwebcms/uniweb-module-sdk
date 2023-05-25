import React, { lazy, Suspense } from 'react';

const Component = lazy(() => uniweb.getComponent('components', 'Badge').catch(() => ({ default: () => null })));

const Badge = (props) => {
    return (
        <Suspense fallback={''}>
            <Component {...props} />
        </Suspense>
    );
};

export default Badge;
