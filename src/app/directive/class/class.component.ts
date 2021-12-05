import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-class',
  templateUrl: './class.component.html',
  styleUrls: ['./class.component.scss']
})
export class ClassComponent implements OnInit {

  est = false;
  barca = false;
  milan = true;

  team: string = "MILAN";

  constructor() { }

  ngOnInit(): void {
  }

  getRandomInt(max: number) {
    return Math.floor(Math.random() * max);
  }
  changeTeam() {
    let eq = this.getRandomInt(3);

    switch (eq) {
      case 0: {
        this.est = true;
        this.barca = false;
        this.milan = false;
        this.team = "EST";
        break;
      }
      case 1: {
        this.est = false;
        this.barca = true;
        this.milan = false;
        this.team = "BARCA";
        break;
      }
      case 2: {
        this.est = false;
        this.barca = false;
        this.milan = true;
        this.team = "MILAN";
        break;
      }
    }
  }
}
