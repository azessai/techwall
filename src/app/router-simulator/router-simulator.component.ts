import { Component, OnInit } from '@angular/core';
import {Router} from "@angular/router";

@Component({
  selector: 'app-router-simulator',
  templateUrl: './router-simulator.component.html',
  styleUrls: ['./router-simulator.component.scss']
})
export class RouterSimulatorComponent implements OnInit {

  constructor(private router: Router) { }

  ngOnInit(): void {
  }
  goToComponent(link: string) {
    this.router.navigate([link])
  }
}
