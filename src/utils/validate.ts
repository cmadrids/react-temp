import { IFormElement } from "../shared/models/IFormElement.model";
import { IFormElements } from "../shared/models/IFormElements.model";
import { IFormState } from "../shared/models/IFormState.model";

/**
 * Determines the validity of the FormElement according to its validations.
 * @param {IFormElement} formElement - the FormElement to be validated.
 * @param {string | number} value - the value to validate.
 * @returns {boolean} - the validity of the FormElement.
 */
export const isFormElementValid = (formElement: IFormElement, value: string | number): boolean => {
    let isValid = true;
    formElement.touched = true;
    if(formElement.disabled) {
        return true;
    }
    formElement.validations?.forEach((validator) => {
        const validity = validator(value);
        isValid = isValid && validity.isValid;
        if(!isValid && formElement.errors && formElement.touched) {
            formElement.errors.push(validity.errorMessage)
        }
    });

    return isValid;
}

/**
 * Determines the validity of the FormState.
 * @param {IFormState} formState - the FormState object.
 */
export const isFormValid = (formState: IFormState): boolean => {
    formState.isValid = true;
    Object.keys(formState.formElements).forEach((key) => {
        if(key !== 'isValid') {
            formState.isValid = formState.isValid && formState.formElements[key as keyof IFormElements].isValid;
        }
    });
    return formState.isValid;
}

export default { isFormElementValid, isFormValid };
