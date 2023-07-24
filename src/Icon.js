import React from 'react';
import SVG from 'react-inlinesvg';

export default function ({ className, icon }) {
    return <SVG className={className} src={icon}></SVG>;
}
