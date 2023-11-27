import { IValidationFunction } from "./IValidationFunction.model";
import { IValidationResult } from "./IValidationResult.model";

export interface IFormElement {
    name: string;
    value: string | number;
    validations?: Array<IValidationFunction>;
    isValid: boolean;
    touched?: boolean;
    errors?: string[];
    disabled?: boolean;
    type?: string;
}