import React from 'react';
// import SVG from 'react-inlinesvg';
import UniwebIcon from './UniwebIcon';

export default function (props) {
    // return <SVG className={className} src={icon} aria-hidden='true'></SVG>;

    let iconProps = { ...props };

    if (props.icon) {
        let icon = props.icon;
        //Convert old icon prop to new UniwebIcon props
        if (typeof icon === 'string') {
            iconProps.svg = props.icon;
        } else {
            iconProps = { ...iconProps, ...icon };
        }

        delete iconProps.icon;
    }

    return <UniwebIcon {...iconProps} />;
}
