import React, { Suspense } from 'react';
import { getComponent } from './helper.js';

const SimpleLink = getComponent('SimpleLink');

export default function Link(props) {
    return (
        <Suspense fallback={''}>
            <SimpleLink {...props} />
        </Suspense>
    );
}
