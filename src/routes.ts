import {IPageRoute} from "./utils/interfaces";
import {HomePageStore} from "./pages/Home";
import {TestComponentStore} from "./pages/TestComponent";
import {ProductListingPageStore} from "./pages/ProductListingPage";
import {UserDetailsStore} from "./pages/UserDetail";

export const routes: IPageRoute[] = [
    {
        name: 'home',
        pattern: "/",
        page: () => HomePageStore
    },
    {
        name: 'test',
        pattern: "/test",
        page: () => TestComponentStore
    },
    {
        name: 'products',
        pattern: "/products",
        page: () => ProductListingPageStore
    },
    {
        name: 'userDetail',
        pattern: "/userDetails",
        page: () => UserDetailsStore
    }
];