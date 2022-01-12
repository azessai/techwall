import { Injectable } from '@angular/core';
import {Personne} from "../Model/Personne";

@Injectable({
  providedIn: 'root'
})
export class EmbaucheService {
  private personnes: Personne[];
  constructor() {
    this.personnes = [];
  }
  getEmbauchees(): Personne[] {
    return this.personnes;
  }
  embaucher(personne: Personne): void {
    if(this.personnes.indexOf(personne) < 0) {
      this.personnes.push(personne);
    } else {
      alert(`${personne.name} est déjà embauchée!`);
    }
  }

  debaucher(personne: Personne) {
    const index = this.personnes.push(personne);

    if(index < 0) {
      alert(`${personne.name} n'est pas embauchée!`);
    } else {
      this.personnes.splice(index, 1);
    }
  }
}
