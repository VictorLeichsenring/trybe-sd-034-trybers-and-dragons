// src/Races/Halfling.ts
import Race from './Race';

export default class Halfling extends Race {
  private static _raceInstances = 0;
  private _maxLifePoints = 60;

  constructor(name: string, dexterity: number) {
    super(name, dexterity);
    Halfling._raceInstances += 1;
  }

  static createdRacesInstances(): number {
    return Halfling._raceInstances;
  }

  get maxLifePoints(): number {
    return this._maxLifePoints;
  }
}
