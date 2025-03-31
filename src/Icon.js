import React from 'react';
// import SVG from 'react-inlinesvg';
import UniwebIcon from './UniwebIcon';

export default function (props) {
    // return <SVG className={className} src={icon} aria-hidden='true'></SVG>;
    //Convert old IconBlock props to new UniwebIcon props
    if (props.src) {
        props.svg = props.src;
        delete props.src;
    }

    return <UniwebIcon {...props} />;
}
