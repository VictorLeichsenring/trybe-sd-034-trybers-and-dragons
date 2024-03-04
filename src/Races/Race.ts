// src/Races/Race.ts

abstract class Race {
  private static _createdRacesInstances = 0;
  private _name: string;
  private _dexterity: number;

  constructor(name: string, dexterity: number) {
    this._name = name;
    this._dexterity = dexterity;
    Race._createdRacesInstances += 1;
  }

  static get createdRacesInstances(): never {
    throw new Error('Not implemented');
  }

  get name(): string {
    return this._name;
  }

  get dexterity(): number {
    return this._dexterity;
  }

  abstract get maxLifePoints(): number;
}

export default Race;
