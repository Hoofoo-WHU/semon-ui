import * as React from 'react';
export interface IRowProps {
    className?: string;
    justify?: 'start' | 'end' | 'space-between' | 'space-around' | 'center';
    align?: 'top' | 'middle' | 'bottom';
    gutter?: number;
}
declare class Row extends React.Component<IRowProps> {
    private classes;
    private style;
    render(): JSX.Element;
}
export default Row;
