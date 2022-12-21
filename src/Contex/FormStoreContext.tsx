import React from "react";
import FormStore from "../stores/MyFormStore";

const formStore = new FormStore<any>({})
export const FormStoreContext = React.createContext(formStore)