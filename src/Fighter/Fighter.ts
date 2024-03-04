import Energy from '../Energy';
import SimpleFighter from './SimpleFighter';

// interface Fighter {
//   lifePoints: number;
//   strength: number;
//   defense: number;
//   energy?: Energy; // Atributo opcional

//   attack(enemy: Fighter): void;
//   special?(enemy: Fighter): void; // Método opcional
//   levelUp(): void;
//   receiveDamage(attackPoints: number): number;
// }

interface Fighter extends SimpleFighter {
  defense: number;
  energy?: Energy;
  special?(enemy: Fighter | SimpleFighter): void;
  levelUp(): void;
}

export default Fighter;
