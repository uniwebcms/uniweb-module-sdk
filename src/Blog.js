import React, { Suspense } from 'react';
import { getComponent } from './helper';

const Component = getComponent('widgets', 'Blogs');

export default function Blog(props) {
    return (
        <Suspense fallback={''}>
            <Component {...props} />
        </Suspense>
    );
}
