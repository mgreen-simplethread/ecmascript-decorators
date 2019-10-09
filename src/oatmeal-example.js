import { readOnly } from './decorators';

export class Porridge {
  constructor(viscosity = 10) {
    this.viscosity = viscosity;
  }
}

export class Oatmeal extends Porridge {
  @readOnly viscosity = 20;
}
