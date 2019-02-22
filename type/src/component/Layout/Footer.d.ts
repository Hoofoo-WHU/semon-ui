import * as React from 'react';
export interface IFooterProps {
    className?: string;
    style?: React.CSSProperties;
}
declare class Footer extends React.Component<IFooterProps> {
    static displayName: string;
    classes(): string;
    private parentValidate;
    componentWillMount(): void;
    render(): JSX.Element;
}
export default Footer;
