import * as React from 'react';
export interface IMessageOptions {
    container?: Element;
    duration?: number;
}
export declare type NoticeFunction = {
    (content: React.ReactNode, onClose?: Function): Function;
    (content: React.ReactNode, duration: number, onClose?: Function): Function;
};
declare class Message {
    static readonly notice: NoticeFunction;
    static readonly success: NoticeFunction;
    static readonly info: NoticeFunction;
    static readonly warn: NoticeFunction;
    static readonly error: NoticeFunction;
    static readonly config: ({ container, duration }: IMessageOptions) => void;
    static readonly distroy: () => void;
}
export default Message;
