import {createRouterState} from "mobx-state-router";
import {IInitialState} from "../utils/interfaces";
import {RouterStore} from "./RouterStore";
import {generateRoutes} from "../utils/generateRoutes";
import {PageStore} from "./PageStore";

const notFound = createRouterState('notFound');

export class RootStore {
    routerStore
    pageStore

    constructor(routes: any, initialState: IInitialState) {
        console.log("RootStore Constructor")
        this.routerStore = new RouterStore(generateRoutes(routes), notFound, {rootStore: this});
        this.pageStore = new PageStore(this)
    }

}