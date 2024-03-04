import Race from './Races/Race';
import Archetype from './Archetypes/Archetype';
import { EnergyType } from './Energy';
import Fighter from './Fighter/Fighter';
import getRandomInt from './utils';
import Elf from './Races/Elf';
import Mage from './Archetypes/Mage';

class Character implements Fighter {
  private _race: Race;
  private _archetype: Archetype;
  private _maxLifePoints: number;
  private _lifePoints: number;
  private _strength: number;
  private _defense: number;
  private _dexterity: number;
  private _energy: { type_: EnergyType, amount: number };

  constructor(name: string) {
    this._race = new Elf(name, getRandomInt(1, 10));
    this._archetype = new Mage(name);
    this._dexterity = this._race.dexterity;
    this._maxLifePoints = this._race.maxLifePoints / 2;
    this._lifePoints = this._maxLifePoints;
    this._strength = getRandomInt(1, 10);
    this._defense = getRandomInt(1, 10);
    this._energy = {
      type_: this._archetype.energyType,
      amount: getRandomInt(1, 10),
    };
  }

  get race(): Race { return this._race; }
  get archetype(): Archetype { return this._archetype; }
  get lifePoints(): number { return this._lifePoints; }
  get strength(): number { return this._strength; }
  get defense(): number { return this._defense; }
  get dexterity(): number { return this._dexterity; }
  get energy(): { type_: EnergyType, amount: number } {
    return { ...this._energy };
  }

  attack(enemy: Fighter): void {
    enemy.receiveDamage(this._strength);
  }

  special(enemy: Fighter): void {
    if (this._energy.amount > 1) {
      const specialAttackStrength = this._strength * 1.5; // 50% mais forte que o ataque normal
      this._energy.amount -= 1; // Consome um ponto adicional de energia
      enemy.receiveDamage(specialAttackStrength);
    }
  }
  
  levelUp(): void {
    this._maxLifePoints = Math.min(
      this._race.maxLifePoints,
      this._maxLifePoints + getRandomInt(1, 10),
    );
    this._strength += getRandomInt(1, 10);
    this._dexterity += getRandomInt(1, 10);
    this._defense += getRandomInt(1, 10);
    this._energy.amount = 10;
    this._lifePoints = this._maxLifePoints;
  }

  receiveDamage(attackPoints: number): number {
    const damage = attackPoints - this._defense;
    if (damage > 0) this._lifePoints -= damage;
    else this._lifePoints -= 1;

    if (this._lifePoints < 0) this._lifePoints = -1;

    return this._lifePoints;
  }
}

export default Character;
