import React from "react";
import BasePageStore from "./BasePageStore";
import {observer} from "mobx-react";

@observer
export class TestComponent extends React.Component<any, any> {
    render() {
        return (
            <div>
                <h1>Test Component</h1>
            </div>
        );
    }
}

export class TestComponentStore extends BasePageStore {
    component = TestComponent

    load(): any {
    }
}