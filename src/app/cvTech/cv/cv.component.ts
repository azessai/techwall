import { Component, OnInit } from '@angular/core';
import { Personne } from './../Model/Personne';

@Component({
  selector: 'app-cv',
  templateUrl: './cv.component.html',
  styleUrls: ['./cv.component.scss']
})
export class CvComponent implements OnInit {
  personnes: Personne[] = [];
  selectedPersonne!: Personne;
  constructor() { }

  ngOnInit(): void {
    this.personnes = [
      new Personne(1, 'ES SAI', 'Azeddine', 50, 'azeddine.png', 2222, 'Dev'),
      new Personne(2, 'ZIDANE', 'Zinedine', 45, 'zidane.png', 3333, 'Footballer')
    ];
    this.selectedPersonne = this.personnes[0];
  }
  getSelectedPersonne(personne: Personne) {
    this.selectedPersonne = personne;
  }
}
