import { Component, OnInit, Input } from '@angular/core';
import { Personne } from '../Model/Personne';
import {EmbaucheService} from "../service/embauche.service";

@Component({
  selector: 'app-detail-cv',
  templateUrl: './detail-cv.component.html',
  styleUrls: ['./detail-cv.component.scss']
})
export class DetailCvComponent implements OnInit {
  @Input() selectedPersonne!: Personne;
  constructor(private embaucheService: EmbaucheService) { }

  ngOnInit(): void {
  }
  embaucher() {
    this.embaucheService.embaucher(this.selectedPersonne);
  }
}
