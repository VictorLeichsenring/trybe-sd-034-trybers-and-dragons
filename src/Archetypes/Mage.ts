import Archetype from './Archetype';
import { EnergyType } from '../Energy';

class Mage extends Archetype {
  private static _mageInstances = 0;
  private _energyType: EnergyType;
  
  constructor(name: string) {
    super(name);
    Mage._mageInstances += 1;
    this._energyType = 'mana';
  }

  static createdArchetypeInstances(): number {
    return Mage._mageInstances;
  }

  get energyType(): EnergyType {
    return this._energyType;
  }
}

export default Mage;
