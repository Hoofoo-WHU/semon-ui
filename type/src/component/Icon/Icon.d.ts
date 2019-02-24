import * as React from 'react';
import { IconType } from './SVG';
import * as PropTypes from 'prop-types';
import * as AirbnbPropTypes from 'airbnb-prop-types';
export interface IProps extends React.Props<{}> {
    className?: string;
    style?: React.CSSProperties;
    type: IconType;
    children?: undefined | null;
}
declare class Icon extends React.Component<IProps> {
    static displayName: string;
    static propsType: {
        className: PropTypes.Requireable<string>;
        style: PropTypes.Requireable<object>;
        type: PropTypes.Requireable<string>;
        children: typeof AirbnbPropTypes.explicitNull;
    };
    render(): JSX.Element;
}
declare namespace Icon {
    type Type = IconType;
}
export default Icon;
