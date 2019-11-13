import { debug, readOnly } from './decorators';

@debug
export class Porridge {
  constructor(viscosity = 10) {
    this.viscosity = viscosity;
  }

  stir() {
    if (this.viscosity > 10) {
      console.log('This is some thick stuff');
    } else {
      console.log('Spoon goes round and round');
    }
  }
}

@debug
export class Oatmeal extends Porridge {
  @readOnly viscosity = 20;

  constructor(flavor) {
    super();
    this.flavor = flavor;
  }
}
