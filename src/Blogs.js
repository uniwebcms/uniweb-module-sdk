import React, { lazy, Suspense } from 'react';

const Component = lazy(() => uniweb.getComponent('widgets', 'Blogs').catch(() => ({ default: () => null })));

const Blogs = (props) => {
    return (
        <Suspense fallback={''}>
            <Component {...props} />
        </Suspense>
    );
};

export default Blogs;
