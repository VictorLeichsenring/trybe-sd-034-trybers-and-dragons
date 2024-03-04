import Archetype from './Archetype';
import { EnergyType } from '../Energy';

class Ranger extends Archetype {
  private static _rangerInstances = 0;
  private _energyType: EnergyType;
  
  constructor(name: string) {
    super(name);
    Ranger._rangerInstances += 1;
    this._energyType = 'stamina';
  }

  static createdArchetypeInstances(): number {
    return Ranger._rangerInstances;
  }

  get energyType(): EnergyType {
    return this._energyType;
  }
}

export default Ranger;
