import { Injectable } from '@angular/core';
import {Personne} from "../Model/Personne";

@Injectable({
  providedIn: 'root'
})
export class CvService {
  private personnes: Personne[];

  constructor() {
    this.personnes = [
      new Personne(1, 'ES SAI', 'Azeddine', 50, 'azeddine.png', 2222, 'Dev'),
      new Personne(2, 'ZIDANE', 'Zinedine', 45, 'zidane.png', 3333, 'Footballer'),
      new Personne(3, 'TOTO', 'Titi', 45, '', 32233, 'Comédien')
    ];
  }
  getPersonnes(): Personne[] {
    return this.personnes;
  }
}
