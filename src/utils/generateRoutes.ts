import {RouterState, RouterStore} from 'mobx-state-router';
import {IPageRoute} from "./interfaces";


function resolve(obj: any) {
    return obj && obj.__esModule ? obj.default : obj;
}

function generatePageOnEnter(route: IPageRoute) {
    let pagePromise: any;
    console.log("generatePageOnEnter")
    route.onPageEnter = (routerState: RouterState, routerStore: RouterStore) => {
        if (!pagePromise && route.page) {
            //API calls Promise resolve here
            pagePromise = Promise.resolve(route.page())
                .then(module => {
                    return resolve(module);
                })
                .catch(err => {
                    throw err;
                });
        }
        pagePromise.then((page: any) => {
            const {options: {rootStore, rootStore: {pageStore}}} = routerStore;
            pageStore.showPage(new page(rootStore, routerState.params, routerState.queryParams));
        });

        return pagePromise;
    };
}

export function generateRoutes(routes: IPageRoute[]) {
    const generatedRoutes = [];
    console.log("generateRoutes")
    for (const route of routes) {
        if (route.page) {
            generatePageOnEnter(route);
        }
        generatedRoutes.push(route);
    }
    return generatedRoutes;
}
