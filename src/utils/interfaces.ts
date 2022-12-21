import {Route, RouterState, RouterStore} from "mobx-state-router";

export interface IInitialState {
    session: {
        user: any,
    };
    csrf_token: string;
}

export interface IWindow extends Window {
    siteAddress: string;
    initialState: IInitialState;
    onunhandledrejection: any;
}

export interface IPost {
    id: number,
    title: string,
    body: string,
    userId: number,
    tags: string[],
    reactions: number
    userName?: string
}

export interface IPostResponse {
    posts: IPost[],
    total: number,
    skip: number,
    limit: number
}

export  type Columns<T> = {
    heading: string,
    selector: (data: T) => React.ReactNode
}

export interface IPageRoute extends Route {
    page?(): any;

    middleware?: any[];
    onPageEnter?(routerState: RouterState, routerStore: RouterStore): void;
}