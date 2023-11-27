import { IFormElement } from "./IFormElement.model";
import { IFormElements } from "./IFormElements.model";

export interface IFormState {
    formElements: IFormElements,
    isValid: boolean
}