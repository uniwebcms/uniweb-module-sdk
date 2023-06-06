import React from 'react';

/**
 *
 * @param {Object} props - The component properties.
 * @param {string} props.color - The primary color of the badge.
 * @param {string} props.className - Additional tailwind class names.
 * @param {ReactNode|ReactNodeArray} props.children - The contents for the Badge container.
 * @returns {function} A react component.
 */
export default function Badge({ children, color = 'green', className = '' }) {
	return (
		<span
			className={`inline-flex max-w-full items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-${color}-200 text-${color}-800 ${className}`}
		>
			{children}
		</span>
	);
}
