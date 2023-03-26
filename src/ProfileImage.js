import React, { lazy, Suspense } from 'react';

const Component = lazy(() => uniweb.getComponent('profileComponents', 'ProfileImage').catch(() => ({ default: () => null })));

const ProfileImage = (props) => {
    return (
        <Suspense fallback={''}>
            <Component {...props} />
        </Suspense>
    );
};

export default ProfileImage;
