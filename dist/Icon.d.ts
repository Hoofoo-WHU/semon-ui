import * as React from 'react';
import { types as iconTypes } from './SVG';
interface IProps {
    style?: React.CSSProperties;
    type: iconTypes;
}
declare class Icon extends React.Component<IProps> {
    render(): JSX.Element;
}
declare namespace Icon {
    type types = iconTypes;
}
export default Icon;
