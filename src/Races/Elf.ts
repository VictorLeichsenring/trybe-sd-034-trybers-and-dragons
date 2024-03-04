// src/Races/Elf.ts
import Race from './Race';

export default class Elf extends Race {
  private static _raceInstances = 0;
  private _maxLifePoints = 99;

  constructor(name: string, dexterity: number) {
    super(name, dexterity);
    Elf._raceInstances += 1;
  }

  static createdRacesInstances(): number {
    return Elf._raceInstances;
  }

  get maxLifePoints(): number {
    return this._maxLifePoints;
  }
}
