// src/Energy.ts

// Definição do tipo EnergyType
export type EnergyType = 'mana' | 'stamina';

// Definição da interface Energy
interface Energy {
  type_: EnergyType;
  amount: number;
}

// Exportação padrão da interface Energy
export default Energy;
