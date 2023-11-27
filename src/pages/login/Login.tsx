import React, { ReactNode } from "react";
import { Form } from "../../components/form-elements";
import useForm from "../../hooks/form-hook";
import { IUserLogin } from "../../shared/models/IUserLogin.model";
import { IFormElement } from "../../shared/models/IFormElement.model";
import { InputTypes } from "../../shared/enums/InputTypes.enum";
import { IFormState } from "../../shared/models/IFormState.model";

/**
 * Represents the Login page.
 * @returns {ReactNode} - The Login JSX page.
 */
const Login = (): ReactNode => {
    
    const [ formState, handleInputChange ] = useForm({
        formElements: {
            email: {
                name: 'email',
                value: '',
                validations: [],
                isValid: true,
                type: InputTypes.EMAIL
            },
            password: {
                name: 'password',
                value: '',
                validations: [],
                isValid: true,
                type: InputTypes.PASSWORD
            }
        },
        isValid : false
    });

    /**
     * Submits the form to the server.
     */
    const submit = () => {
        const form: IFormState = formState;
        const userLogin: IUserLogin = {
            email: formState.formElements.email.value.toString(),
            password: formState.formElements.password.value.toString()
        }
    }

    return <div className="login__container">
        <Form 
            onSubmit={() => {}}
        >
            <h1>Login</h1>
            <label>Email:</label>
            <input />
            <label>Password:</label>
            <input />
            <button>Send</button>
        </Form>
    </div>

}

export default Login;