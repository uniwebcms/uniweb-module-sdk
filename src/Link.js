import React, { Suspense } from 'react';
import { getComponent } from './helper';

const SimpleLink = getComponent(null, 'SimpleLink');

export default function Link(props) {
    return (
        <Suspense fallback={''}>
            <SimpleLink {...props} />
        </Suspense>
    );
}
