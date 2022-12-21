import React from "react";
import Networking from "../Networking/Networking";
import {IPaginator, ListTableStore} from "../stores/ListTableStore";
import {Columns, IPost} from "../utils/interfaces";
import {observer} from "mobx-react";
import TableComponent from "../Table/TableComponent";
import BasePageStore from "./BasePageStore";

const column: Columns<IPost>[] = [
    {
        heading: "Title",
        selector: (data) => data.title
    },
    {
        heading: "User Id",
        selector: (data) => data.userId
    },
]

@observer
export class ProductListingPage extends React.Component<any, any> {
    render() {
        const {productList} = this.props.page;
        if (!productList.paginationData) return <div>Loading</div>
        const postData = productList.paginationData.posts;
        return (
            <div className='w-100 d-flex flex-column justify-content-center align-items-center'>
                <h1>Product Listing</h1>
                <div className='w-75'>
                    <TableComponent<IPost> tableCol={column} tableContent={postData}/>
                </div>
            </div>
        );
    }
}

export class ProductListingPageStore extends BasePageStore {
    component = ProductListingPage
    fetchProducts = () => Networking.getData<IPaginator>(`posts`);
    public productList = new ListTableStore(this.fetchProducts, 1, '')

    load() {
        this.productList.load();
    }
}