import Battle from './Battle';
import Fighter from '../Fighter/Fighter';

class PVP extends Battle {
  constructor(private _player1: Fighter, private _player2: Fighter) {
    super(_player1);
  }

  fight(): number {
    while (this._player1.lifePoints > 0 && this._player2.lifePoints > 0) {
      this._player1.attack(this._player2);
      if (this._player2.lifePoints > 0) {
        this._player2.attack(this._player1);
      }
    }

    return this._player1.lifePoints === -1 ? -1 : 1;
  }
}

export default PVP;
