import * as React from 'react';
export interface IMessageOptions {
    container?: Element;
    duration?: number;
}
declare type NoticeType = 'info' | 'error' | 'warn' | 'success';
declare function _distroy(): void;
export declare type NoticeFunction = {
    (content: React.ReactNode, onClose?: Function): Function;
    (content: React.ReactNode, duration: number, onClose?: Function): Function;
};
declare class Message {
    static notice: NoticeFunction;
    static success: NoticeFunction;
    static info: NoticeFunction;
    static warn: NoticeFunction;
    static error: NoticeFunction;
    static config: ({ container, duration }: IMessageOptions) => void;
    static readonly distroy: typeof _distroy;
}
declare namespace Message {
    type Type = NoticeType;
}
export default Message;
