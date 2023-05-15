import React, { lazy, Suspense } from 'react';

const Component = lazy(() =>
    uniweb
        .getComponent('components', 'PopoverMenu')
        .then((module) => ({ default: module.SimpleMenu }))
        .catch(() => ({ default: () => null }))
);

const PopoverMenu = (props) => {
    return (
        <Suspense fallback={''}>
            <Component {...props} />
        </Suspense>
    );
};

export default PopoverMenu;
