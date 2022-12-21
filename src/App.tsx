import React from 'react';
import {observer, Provider} from "mobx-react";
import {RootStore} from "./stores/RootStore";
import {RouterContext} from "mobx-state-router";

interface IAppProps {
    rootStore: RootStore;
}

@observer
class AppContainer extends React.Component<IAppProps, any> {
    render() {
        console.log('AppContainer')
        const {rootStore} = this.props;
        const page = rootStore.pageStore.currentPage;
        if (!page) {
            return <h1>App container no page</h1>;
        }
        const pageComponent = React.createElement(page.component, {
            page,
            rootStore,
        });
        return (
            <div>
                {pageComponent}
            </div>
        );
    }
}

export default class App extends React.Component<any, any> {
    render() {
        console.log('App')
        return (
            <div>
                <Provider rootStore={this.props.rootStore}>
                    <RouterContext.Provider value={this.props.rootStore.routerStore}>
                        <AppContainer rootStore={this.props.rootStore}/>
                    </RouterContext.Provider>
                </Provider>

            </div>
        );
    }
}
