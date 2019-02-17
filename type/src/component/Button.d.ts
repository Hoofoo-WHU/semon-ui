import * as React from 'react';
import Icon from './Icon';
interface IProps {
    size?: 'small' | 'large';
    type?: 'primary' | 'dashed' | 'danger';
    shape?: 'round' | 'circle';
    icon?: Icon.types;
    iconRight?: Icon.types;
    disabled?: boolean;
    htmlType?: string;
    onClick?: React.MouseEventHandler;
}
declare class Button extends React.Component<IProps> {
    constructor(props: IProps);
    private classes;
    onClick(e: React.MouseEvent): void;
    render(): JSX.Element;
}
interface IGroupProps {
    size?: IProps['size'];
}
declare namespace Button {
    class Group extends React.Component<IGroupProps> {
        private classes;
        render(): JSX.Element;
    }
}
export default Button;
