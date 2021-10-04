import { Validation } from './Validation';

export class RequiredFieldValidation implements Validation {
  validate(): void {
    throw new Error('Method not implemented.');
  }
}
