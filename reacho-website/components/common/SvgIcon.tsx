// components/SvgIcon.tsx
import React from 'react';
import { icons } from '../util/icons';

interface SvgIconProps extends React.SVGProps<SVGSVGElement> {
    name: string;
    viewBox?: string;
    fill?: string

}

const SvgIcon: React.FC<SvgIconProps> = ({ name, viewBox = "0 0 45 45", fill = "currentColor", ...props }) => {
    const IconPath = icons[name];

    if (!IconPath) {
        console.warn(`Icon "${name}" does not exist.`);
        return null;
    }

    return (
        <svg
            viewBox={viewBox}
            xmlns="http://www.w3.org/2000/svg"
            fill={fill}
            aria-hidden="true"
            {...props}

        >
            {IconPath}
        </svg>
    );
};

export default SvgIcon;
