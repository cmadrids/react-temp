import { IValidationResult } from "./IValidationResult.model";

export type IValidationFunction = (value: string | number) => IValidationResult;