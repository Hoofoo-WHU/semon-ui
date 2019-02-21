import * as React from 'react';
import { IRowContext } from './RowContext';
declare type GridNumber = '1' | '2' | '3' | '4' | '5' | '6' | '7' | '8' | '9' | '10' | '11' | '12' | '13' | '14' | '15' | '16' | '17' | '18' | '19' | '20' | '21' | '22' | '23' | '24';
interface IRes {
    span?: GridNumber;
    offset?: GridNumber;
    order?: GridNumber;
}
export interface IColProps {
    span: GridNumber;
    className?: string;
    offset?: GridNumber;
    order?: GridNumber;
    xs?: IRes | GridNumber;
    sm?: IRes | GridNumber;
    md?: IRes | GridNumber;
    lg?: IRes | GridNumber;
    xl?: IRes | GridNumber;
}
interface IColState {
}
declare class Col extends React.Component<IColProps, IColState> {
    static contextType: React.Context<IRowContext>;
    readonly context: IRowContext;
    private classes;
    private style;
    render(): JSX.Element;
}
export default Col;
