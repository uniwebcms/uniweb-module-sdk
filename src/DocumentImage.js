import React, { lazy, Suspense } from 'react';

const Component = lazy(() => uniweb.getComponent('widgets', 'DocumentImage').catch(() => ({ default: () => null })));

const DocumentImage = (props) => {
    return (
        <Suspense fallback={''}>
            <Component {...props} />
        </Suspense>
    );
};

export default DocumentImage;
