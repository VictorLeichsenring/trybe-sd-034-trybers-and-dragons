// src/Races/Orc.ts
import Race from './Race';

export default class Orc extends Race {
  private static _raceInstances = 0;
  private _maxLifePoints = 74;

  constructor(name: string, dexterity: number) {
    super(name, dexterity);
    Orc._raceInstances += 1;
  }

  static createdRacesInstances(): number {
    return Orc._raceInstances;
  }

  get maxLifePoints(): number {
    return this._maxLifePoints;
  }
}
