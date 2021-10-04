import { PhoneValidation } from './PhoneValidation';
import { RequiredFieldValidation } from './RequiredFieldValidation';
import { Validation } from './Validation';

export class AddGroupValidationComposite implements Validation {
  constructor(
    private requiredFieldValidation: RequiredFieldValidation,
    private phoneValidation: PhoneValidation
  ) {}
  validate(): void {}
}
