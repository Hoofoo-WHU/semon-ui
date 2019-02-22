import * as React from 'react';
import Content from './Content';
import Footer from './Footer';
import Header from './Header';
import Sidebar from './Sidebar';
export interface ILayoutProps {
    className?: string;
    hasSidebar?: boolean;
    style?: React.CSSProperties;
}
declare class Layout extends React.Component<ILayoutProps> {
    static displayName: string;
    static Content: typeof Content;
    static Footer: typeof Footer;
    static Header: typeof Header;
    static Sidebar: typeof Sidebar;
    private hasSidebar;
    private childrenValidate;
    componentDidMount(): void;
    private classes;
    render(): JSX.Element;
}
export default Layout;
