import { Component, Input, OnInit, Output, EventEmitter } from '@angular/core';
import { Personne } from './../Model/Personne';

@Component({
  selector: 'app-liste-cv',
  templateUrl: './liste-cv.component.html',
  styleUrls: ['./liste-cv.component.scss']
})
export class ListeCvComponent implements OnInit {
  @Input() personnes: Personne[] = [];
  @Output() sendSelectedPersonne = new EventEmitter<Personne>()
  constructor() { }

  ngOnInit(): void {
  }
  getSelectedPersonne(personne: Personne) {
    this.sendSelectedPersonne.emit(personne);
  }
}
