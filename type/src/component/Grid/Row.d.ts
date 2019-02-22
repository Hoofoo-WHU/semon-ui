import * as React from 'react';
interface IRes {
    xs?: number;
    sm?: number;
    md?: number;
    lg?: number;
    xl?: number;
    default: number;
}
export interface IRowProps {
    className?: string;
    justify?: 'start' | 'end' | 'space-between' | 'space-around' | 'center';
    align?: 'top' | 'middle' | 'bottom';
    gutter?: number | IRes;
}
interface IRowState {
    screen: object;
}
declare class Row extends React.Component<IRowProps, IRowState> {
    static displayName: string;
    readonly state: {
        screen: {};
    };
    private classes;
    private getGutter;
    private style;
    componentDidMount(): void;
    componentWillUnmount(): void;
    render(): JSX.Element;
}
export default Row;
