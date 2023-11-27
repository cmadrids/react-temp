import { useCallback, useReducer } from "react";
import { IFormElement } from "../shared/models/IFormElement.model";
import { IFormState } from "../shared/models/IFormState.model";
import { isFormValid } from "../utils/validate";

enum FormActionType {
    HANDLE_INPUT_CHANGE = 'HANDLE_INPUT_CHANGE',
    HANDLE_DISABLING = 'HANDLE_DISABLING'
}

interface FormAction {
    type: FormActionType;
    payload: {
        formElement: IFormElement,
        isValid?: boolean,
        value: string | number;
        disabled?: boolean;
    },
    formState?: IFormState
}

type FormHookAction = (formElement: IFormElement, value: string | number) => void;

/**
 * Controls the form actions.
 * @param {FormState} state - the state object.
 * @param {FormAction} actions - the actions object.
 * @returns {FormState} the new state of the object.
 */
const formReducer = (state: IFormState, actions: FormAction): IFormState => {

    const { type, payload } = actions;

    switch(type) {
        case FormActionType.HANDLE_INPUT_CHANGE: {
            if(payload) {
                const { formElement } = payload;
                formElement.value = payload.value;
                formElement.errors = [];
                formElement.touched = true;
                formElement.isValid = isFormValid(state);
            }
            return { ...state };
        }
        default:
            return state;
    }
}

/**
 * Hook to control the actions of the form.
 * @param {IFormState} initialFormState - the initial state of the form.
 * @returns {Array<IFormState | IValidationFunction>} - the form state and the functions to change it.
 */
const useForm = (initialFormState: IFormState): [IFormState, FormHookAction] => {

    const [ formState, dispatch ] = useReducer(formReducer, initialFormState);

    /**
     * Handles the changes of the FormElement values
     * and updates the state formState though it's dispatcher
     * according to the result of the reducer.
     * @param {IFormElement} formElement - the FormElement object.
     * @param {string | number} value - the new value of the FormElement.
     */
    const handleInputChange = useCallback((formElement: IFormElement, value: string | number) => {
        dispatch({
            type: FormActionType.HANDLE_INPUT_CHANGE,
            payload: {
                formElement,
                value
            }
        });
    }, []);

    return [
        formState,
        handleInputChange
    ];

}

export default useForm;