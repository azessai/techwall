import { Component, OnInit } from '@angular/core';
import {Router} from "@angular/router";

@Component({
  selector: 'app-pere',
  templateUrl: './pere.component.html',
  styleUrls: ['./pere.component.scss']
})
export class PereComponent implements OnInit {

  pereProperty = "Je suis ton père";
  constructor(private router:Router) { }

  ngOnInit(): void {
  }
  processReq(req: any) {
    alert(req);
  }
  goToCv() {
    this.router.navigate(['cv']);
  }
}
