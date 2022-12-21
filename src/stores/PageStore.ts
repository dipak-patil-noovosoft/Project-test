import {Route, RouterState, RouterStore} from "mobx-state-router";
import {RootStore} from "./RootStore";
import {action, makeObservable, observable, reaction} from "mobx";

export interface IPageRoute extends Route {
    page?(): any;

    middleware?: any[];

    onPageEnter?(routerState: RouterState, routerStore: RouterStore): void;
}

export class PageStore {
    rootStore: RootStore;
    currentPageLoadPromise: any;
    @observable currentPage: any;

    constructor(rootStore: RootStore) {
        console.log("Page Store Constructor")
        makeObservable(this);
        this.rootStore = rootStore;
        this.observeRouterStateChanges();
    }

    @action
    showPage(page: any) {
        this.currentPage = page;
        this.currentPageLoadPromise = Promise.resolve(page.load());
    }

    observeRouterStateChanges = () => {

        console.log('page store observeRouterStateChanges')
        reaction(
            () => this.rootStore.routerStore.routerState,
            (routerState) => {
                console.log('page store observeRouterStateChanges inside Reaction')
                const route: IPageRoute | undefined = this.rootStore.routerStore.getRoute(routerState.routeName);
                if (route?.page && route.onPageEnter) {
                    route.onPageEnter(routerState, this.rootStore.routerStore);
                }
            },
            {
                onError: (e) => {
                    throw new Error(e);
                },
            }
        );
    };

}