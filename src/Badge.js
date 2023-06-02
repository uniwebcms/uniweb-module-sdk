import React from 'react';

const Badge = ({ children, color = 'green', className = '' }) => {
    return (
        <span
            className={`inline-flex max-w-full items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-${color}-200 text-${color}-800 ${className}`}
        >
            {children}
        </span>
    );
};

export default Badge;
