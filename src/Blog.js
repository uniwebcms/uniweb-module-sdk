import React, { lazy, Suspense } from 'react';

const Component = lazy(() => uniweb.getComponent('widgets', 'Blogs').catch(() => ({ default: () => null })));

const Blog = (props) => {
    return (
        <Suspense fallback={''}>
            <Component {...props} />
        </Suspense>
    );
};

export default Blog;
