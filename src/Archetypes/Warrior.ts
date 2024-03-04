import Archetype from './Archetype';
import { EnergyType } from '../Energy';

class Warrior extends Archetype {
  private static _warriorInstances = 0;
  private _energyType: EnergyType;
  
  constructor(name: string) {
    super(name);
    Warrior._warriorInstances += 1;
    this._energyType = 'stamina';
  }

  static createdArchetypeInstances(): number {
    return Warrior._warriorInstances;
  }

  get energyType(): EnergyType {
    return this._energyType;
  }
}

export default Warrior;
