import { Component, Input, OnInit, Output, EventEmitter } from '@angular/core';
import { Personne } from '../Model/Personne';

@Component({
  selector: 'app-item-cv',
  templateUrl: './item-cv.component.html',
  styleUrls: ['./item-cv.component.scss']
})
export class ItemCvComponent implements OnInit {
  @Input() personne!: Personne;
  @Output() sendSelectedPersonne = new EventEmitter<Personne>()

  constructor() { }

  ngOnInit(): void {
    // console.log(this.personne)
  }
  selectItem() {
    this.sendSelectedPersonne.emit( this.personne);
  }
}
