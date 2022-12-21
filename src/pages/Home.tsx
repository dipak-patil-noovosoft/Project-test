import React from "react";
import BasePageStore from "./BasePageStore";
import {RouterLink} from "mobx-state-router";

export class Home extends React.Component<any, any> {
    render() {
        console.log("Home component")
        return (
            <div>
                <h1>Home</h1>
                <RouterLink routeName={'test'}>Test Component</RouterLink>
                <br/>
                <RouterLink routeName={'products'}>Product Listing</RouterLink>
                <br/>
                <RouterLink routeName={'userDetail'}>User Details</RouterLink>
            </div>
        );
    }
}

export class HomePageStore extends BasePageStore {
    component = Home

    load(): any {
        console.log("BasePageStore load")
    }
}