import React, { ReactNode } from "react";

type FormProps = {
    onSubmit: () => void;
    classNames?: string;
    children: ReactNode;
}

/**
 * Represents an HTML form element.
 * @param {FormProps} props - the props of the component.
 * @returns {JSX.Element} the form element.
 */
const Form = (props: FormProps): JSX.Element => {

    /**
     * Handles the submit event.
     * @param {React.FormEvent<HTMLFormElement>} event - the native event of the form element.
     */
    const handleOnSubmit = (event: React.FormEvent<HTMLFormElement>) => {
        event.preventDefault();
        if(props.onSubmit) {
            props.onSubmit();
        }
    }

    return <form
        onSubmit={(event: React.FormEvent<HTMLFormElement>) => handleOnSubmit(event)}
        className={props.classNames}
    >
        {props.children}
    </form>
}

export default Form;