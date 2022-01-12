import { Component, OnInit } from '@angular/core';
import { Personne } from '../Model/Personne';
import {CvService} from "../service/cv.service";

@Component({
  selector: 'app-cv',
  templateUrl: './cv.component.html',
  styleUrls: ['./cv.component.scss']
})
export class CvComponent implements OnInit {
  personnes: Personne[] = [];
  selectedPersonne!: Personne;
  constructor(private cvService: CvService) {
    this.personnes = this.cvService.getPersonnes();
  }

  ngOnInit(): void {

  }
  getSelectedPersonne(personne: Personne) {
    this.selectedPersonne = personne;
  }
}
