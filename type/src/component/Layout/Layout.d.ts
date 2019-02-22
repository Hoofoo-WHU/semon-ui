import * as React from 'react';
import Content from './Content';
import Footer from './Footer';
import Header from './Header';
import Sider from './Sider';
export interface ILayoutProps {
    className?: string;
    hasSider?: boolean;
    style?: React.CSSProperties;
}
declare class Layout extends React.Component<ILayoutProps> {
    static displayName: string;
    static Content: typeof Content;
    static Footer: typeof Footer;
    static Header: typeof Header;
    static Sider: typeof Sider;
    private hasSider;
    private childrenValidate;
    componentDidMount(): void;
    renderChildren(): any[];
    private classes;
    render(): JSX.Element;
}
export default Layout;
