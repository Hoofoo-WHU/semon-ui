import * as React from 'react';
interface IProps {
    size?: 'small' | 'large';
    disabled?: boolean;
    defaultValue?: string;
    value?: string;
    placeholder?: string;
    prefix?: React.ReactNode;
    suffix?: React.ReactNode;
    className?: string;
    readOnly?: boolean;
    onFocus?: React.FocusEventHandler<HTMLInputElement>;
    onBlur?: React.FocusEventHandler<HTMLInputElement>;
    onChange?: React.ChangeEventHandler<HTMLInputElement>;
    onPressEnter?: React.KeyboardEventHandler<HTMLInputElement>;
    onKeyPress?: React.KeyboardEventHandler<HTMLInputElement>;
}
declare class Input extends React.Component<IProps> {
    static displayName: string;
    private classes;
    private wrapperClasses;
    private focusHandle;
    private blurHandle;
    private changeHandle;
    private keyPressHandle;
    render(): JSX.Element;
}
export default Input;
