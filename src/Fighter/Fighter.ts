import Energy from '../Energy';

interface Fighter {
  lifePoints: number;
  strength: number;
  defense: number;
  energy?: Energy; // Atributo opcional

  attack(enemy: Fighter): void;
  special?(enemy: Fighter): void; // Método opcional
  levelUp(): void;
  receiveDamage(attackPoints: number): number;
}

export default Fighter;
