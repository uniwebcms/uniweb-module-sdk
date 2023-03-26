import React, { lazy, Suspense } from 'react';

const Component = lazy(() => uniweb.getComponent('components', 'SmartLink').catch(() => ({ default: () => null })));

const SmartLink = (props) => {
    return (
        <Suspense fallback={''}>
            <Component {...props} />
        </Suspense>
    );
};

export default SmartLink;
