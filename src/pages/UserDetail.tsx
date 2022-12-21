import React from "react";
import BasePageStore from "./BasePageStore";
import FormStore from "../stores/MyFormStore";
import FormComponent from "../components/formComponent/FormComponent";
import {toJS} from "mobx";
import Field from "../components/fieldComponent/Field";
import {Input} from "reactstrap";

interface IUserDetailProps {
    page: UserDetailsStore
}

class UserDetail extends React.Component<IUserDetailProps> {
    render() {

        const {formStore} = this.props.page;

        const onSubmit = (data: any) => console.log(toJS(data));

        return (
            <div>
                <h1>Form</h1>
                <FormComponent
                    formStore={formStore}
                    showSubmitButton={true}
                    buttonText={'Save'}
                    onSubmit={onSubmit}
                >
                    <Field
                        name='name'
                        label='Name'
                        required={true}
                        render={(onChange, value, required, isDisabled) =>
                            <Input
                                type='email'
                                onChange={(event) => onChange((event.target.value))}
                                value={value}
                                required={required}
                                disabled={isDisabled}
                            />
                        }/>

                    <Field
                        name='notRequire'
                        label='Not Require Field'
                        required={false}
                        render={(onChange, value, required, isDisabled) =>
                            <Input
                                type='text'
                                onChange={event => onChange(event.target.value)}
                                value={value}
                                required={required}
                                disabled={isDisabled}
                            />
                        }/>

                    <Field
                        name='gender'
                        label='Male'
                        required={false}
                        render={(onChange, value, required, isDisabled) =>
                            <Input
                                type='radio'
                                name='male'
                                onChange={event => onChange(event.target.name)}
                                checked={(value === 'male')}
                                required={required}
                                disabled={isDisabled}
                            />
                        }/>

                    <Field
                        name='gender'
                        label='Female'
                        required={false}
                        render={(onChange, value, required, isDisabled) =>
                            <Input
                                type='radio'
                                name='female'
                                onChange={event => onChange(event.target.name)}
                                checked={(value === 'female')}
                                required={required}
                                disabled={isDisabled}
                            />
                        }/>
                </FormComponent>
            </div>
        );
    }
}
a
export class UserDetailsStore extends BasePageStore {
    component = UserDetail;
    userFormData = {
        name: '',
        notRequire: '',
        gender: ''
    }
    formStore = new FormStore(this.userFormData);

    load() {
    }
}