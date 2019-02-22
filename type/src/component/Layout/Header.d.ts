import * as React from 'react';
export interface IHeaderProps {
    className?: string;
    style?: React.CSSProperties;
}
declare class Header extends React.Component<IHeaderProps> {
    static displayName: string;
    classes(): string;
    private parentValidate;
    componentWillMount(): void;
    render(): JSX.Element;
}
export default Header;
