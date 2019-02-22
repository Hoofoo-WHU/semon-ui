import * as React from 'react';
export interface ISideBarProps {
    className?: string;
    style?: React.CSSProperties;
}
declare class Sider extends React.Component<ISideBarProps> {
    static displayName: string;
    private classes;
    private parentValidate;
    componentWillMount(): void;
    render(): JSX.Element;
}
export default Sider;
