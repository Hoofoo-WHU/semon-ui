import * as React from 'react';
import Icon from './Icon';
interface IButtonGroupContext {
    size?: IProps['size'];
    type?: IProps['type'];
    shape?: IProps['shape'];
    disabled?: boolean;
}
interface IProps {
    size?: 'small' | 'large';
    type?: 'primary' | 'dashed' | 'danger';
    shape?: 'round' | 'circle';
    icon?: Icon.Type;
    iconRight?: Icon.Type;
    disabled?: boolean;
    htmlType?: string;
    className?: string;
    onClick?: React.MouseEventHandler;
}
interface IState {
    clickAnimating: boolean;
}
declare class Button extends React.Component<IProps, IState> {
    static contextType: React.Context<IButtonGroupContext>;
    static displayName: string;
    private animatingTimer;
    context: IButtonGroupContext;
    readonly state: {
        clickAnimating: boolean;
    };
    private classes;
    onClick(e: React.MouseEvent): void;
    render(): JSX.Element;
}
interface IGroupProps {
    size?: IProps['size'];
    type?: IProps['type'];
    shape?: IProps['shape'];
    disabled?: boolean;
    className?: string;
}
declare namespace Button {
    class Group extends React.Component<IGroupProps> {
        static displayName: string;
        private classes;
        render(): JSX.Element;
    }
}
export default Button;
