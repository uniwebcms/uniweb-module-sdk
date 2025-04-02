import React, { useState, useEffect, useMemo } from 'react';

// SVG Icon component that can accept either a URL or direct SVG content
const UniwebIcon = ({
    // Source URL to fetch SVG from
    url,
    // Direct SVG content as string
    svg,
    name,
    // Tailwind classes for styling
    className = '',
    size,
    color,
    // Whether to preserve original SVG colors
    preserveColors = true,
    // Content to display while loading
    loadingComponent = null,
    // Content to display on error
    errorComponent = null,
    // Additional props
    ...props
}) => {
    let parsedName = '';

    if (typeof name === 'string') {
        parsedName = name;
    } else if (typeof name === 'object') {
        parsedName = name.filename;
    }

    // States
    const [svgContent, setSvgContent] = useState(svg || '');
    const [isLoading, setIsLoading] = useState((!parsedName || !svg) && !url);
    const [error, setError] = useState(null);

    const isNormalImg = !!url;

    // Demo built-in icons
    const DEMO_ICONS = useMemo(
        () => ({
            check: `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><polyline points="20 6 9 17 4 12"></polyline></svg>`,
            alert: `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="10"></circle><line x1="12" y1="8" x2="12" y2="12"></line><line x1="12" y1="16" x2="12.01" y2="16"></line></svg>`,
            user: `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2"></path><circle cx="12" cy="7" r="4"></circle></svg>`,
            heart: `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z"></path></svg>`,
            settings: `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="3"></circle><path d="M19.4 15a1.65 1.65 0 0 0 .33 1.82l.06.06a2 2 0 0 1 0 2.83 2 2 0 0 1-2.83 0l-.06-.06a1.65 1.65 0 0 0-1.82-.33 1.65 1.65 0 0 0-1 1.51V21a2 2 0 0 1-2 2 2 2 0 0 1-2-2v-.09A1.65 1.65 0 0 0 9 19.4a1.65 1.65 0 0 0-1.82.33l-.06.06a2 2 0 0 1-2.83 0 2 2 0 0 1 0-2.83l.06-.06a1.65 1.65 0 0 0 .33-1.82 1.65 1.65 0 0 0-1.51-1H3a2 2 0 0 1-2-2 2 2 0 0 1 2-2h.09A1.65 1.65 0 0 0 4.6 9a1.65 1.65 0 0 0-.33-1.82l-.06-.06a2 2 0 0 1 0-2.83 2 2 0 0 1 2.83 0l.06.06a1.65 1.65 0 0 0 1.82.33H9a1.65 1.65 0 0 0 1-1.51V3a2 2 0 0 1 2-2 2 2 0 0 1 2 2v.09a1.65 1.65 0 0 0 1 1.51 1.65 1.65 0 0 0 1.82-.33l.06-.06a2 2 0 0 1 2.83 0 2 2 0 0 1 0 2.83l-.06.06a1.65 1.65 0 0 0-.33 1.82V9a1.65 1.65 0 0 0 1.51 1H21a2 2 0 0 1 2 2 2 2 0 0 1-2 2h-.09a1.65 1.65 0 0 0-1.51 1z"></path></svg>`,
            star: `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"></polygon></svg>`
        }),
        []
    );

    // Effect to handle URL-based SVG loading
    useEffect(() => {
        if (isNormalImg) {
            setIsLoading(false);
            return;
        }

        // If SVG content is directly provided, use it
        if (svg) {
            setSvgContent(svg);
            setIsLoading(false);
            return;
        }

        // If name is provided and exists in demo icons
        if (parsedName && DEMO_ICONS[parsedName]) {
            setSvgContent(DEMO_ICONS[parsedName]);
            setIsLoading(false);
            return;
        }

        // If no URL is provided, nothing to load
        if (!url) {
            setError('No SVG source provided');
            setIsLoading(false);
            return;
        }

        // Fetch SVG from URL
        const fetchSVG = async () => {
            try {
                setIsLoading(true);
                setError(null);

                const response = await fetch(url);

                if (!response.ok) {
                    throw new Error(
                        `Failed to load SVG: ${response.status} ${response.statusText}`
                    );
                }

                const text = await response.text();

                setSvgContent(text);
            } catch (err) {
                console.error('Error loading SVG:', err);
                setError(err.message || 'Failed to load SVG');
            } finally {
                setIsLoading(false);
            }
        };

        fetchSVG();
    }, [url, svg, parsedName, isNormalImg]);

    // Process SVG content to prepare for rendering
    const processedSvg = useMemo(() => {
        if (!svgContent) return null;

        try {
            // Parse the SVG string
            const parser = new DOMParser();
            const doc = parser.parseFromString(svgContent, 'image/svg+xml');

            // Check for parsing errors
            const parserError = doc.querySelector('parsererror');
            if (parserError) {
                throw new Error('Invalid SVG content');
            }

            const svg = doc.querySelector('svg');
            if (!svg) {
                throw new Error('No SVG element found');
            }

            // Add accessibility attributes
            svg.setAttribute('role', 'img');
            svg.setAttribute('aria-hidden', 'true');

            // Remove size attributes to allow CSS control
            svg.removeAttribute('width');
            svg.removeAttribute('height');

            // Apply color styling if not preserving original colors
            if (!preserveColors) {
                const rootFill = svg.getAttribute('fill');
                const rootStroke = svg.getAttribute('stroke');

                if (color) {
                    svg.style.color = 'inherit';
                }

                const elements = svg.querySelectorAll(
                    'path, circle, rect, line, polyline, polygon, ellipse'
                );
                elements.forEach((el) => {
                    if (rootFill !== 'none') {
                        if (el.hasAttribute('fill') && el.getAttribute('fill') !== 'none') {
                            el.setAttribute('fill', 'currentColor');
                        } else if (!el.hasAttribute('fill')) {
                            el.setAttribute('fill', 'currentColor');
                        }
                    }

                    if (rootStroke !== 'none') {
                        if (el.hasAttribute('stroke') && el.getAttribute('stroke') !== 'none') {
                            el.setAttribute('stroke', 'currentColor');
                        } else if (!el.hasAttribute('stroke')) {
                            el.setAttribute('stroke', 'currentColor');
                        }
                    }
                });
            }

            return svg.outerHTML;
        } catch (err) {
            console.error('Error processing SVG:', err);
            setError(err.message || 'Failed to process SVG');
            return null;
        }
    }, [svgContent, preserveColors]);

    // Loading state
    if (isLoading) {
        return (
            loadingComponent || (
                <div className={`inline-block ${className}`}>
                    <div className={`animate-pulse bg-gray-200 w-full h-full rounded-sm`}></div>
                </div>
            )
        );
    }

    // Error state

    if (error || (!processedSvg && !isNormalImg)) return null;

    let iconStyle = {};

    if (size) {
        iconStyle = {
            width: size,
            height: size
        };
    }

    if (color) {
        if (isNormalImg) {
            iconStyle = {
                ...iconStyle,
                backgroundColor: color
            };
        } else {
            iconStyle = {
                ...iconStyle,
                color: color
            };
        }
    }

    if (!isNormalImg) {
        // Success - render the processed SVG
        return (
            <div
                className={`${className}`}
                style={iconStyle}
                dangerouslySetInnerHTML={{ __html: processedSvg }}
                {...props}
            />
        );
    } else {
        return (
            <div className={`${className}`} style={iconStyle} {...props}>
                <img
                    src={url}
                    alt={parsedName}
                    className={`w-full h-full block`}
                    style={{ backgroundColor: 'inherit' }}
                    draggable={false}
                />
            </div>
        );
    }
};

export default UniwebIcon;
