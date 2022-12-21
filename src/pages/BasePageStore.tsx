import {RootStore} from "../stores/RootStore";


export default abstract class BasePageStore {
    public rootStore: RootStore;
    public params: any;
    public queryParams: any;

    constructor(rootStore: RootStore, params: any, queryParams: any) {
        console.log("BasePageStore")
        this.rootStore = rootStore;
        this.params = params;
        this.queryParams = queryParams;
    }

    abstract load(): any;

    //TODO
    // setPageTitle(title: string) {
    //     this.rootStore.pageStore.setPageTitle(title);
    // }
}
