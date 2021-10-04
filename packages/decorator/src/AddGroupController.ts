import { AddGroupValidationComposite } from './AddGroupValidationComposite';
import { PhoneValidation } from './PhoneValidation';
import { RequiredFieldValidation } from './RequiredFieldValidation';
import { Validation } from './Validation';

export class AddGroupController {
  constructor(private validation: Validation) {}
  add() {
    this.validation.validate();
  }
}

// Composiotion Root
// Dependecy Injection

const requiredFieldValidation = new RequiredFieldValidation();
const phoneValidation = new PhoneValidation();
const composite = new AddGroupValidationComposite(
  requiredFieldValidation,
  phoneValidation
);
const controller = new AddGroupController(composite);
