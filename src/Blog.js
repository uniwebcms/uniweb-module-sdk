import React, { lazy, Suspense } from 'react';
import { website } from './index';

const Component = lazy(() =>
    website.getComponent('widgets', 'Blogs').catch(() => ({ default: () => null }))
);

const Blog = (props) => {
    return (
        <Suspense fallback={''}>
            <Component {...props} />
        </Suspense>
    );
};

export default Blog;
