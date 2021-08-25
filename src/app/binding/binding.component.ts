import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-binding',
  templateUrl: './binding.component.html',
  styleUrls: ['./binding.component.scss']
})
export class BindingComponent implements OnInit {

  bgColor = "red";
  show = false;
  color = "yellow";
  constructor() { }

  ngOnInit(): void {
  }

  changeStatus() {
    this.show = ! this.show;
  }
  changeColor(input: any) {
    console.log(input);
     this.color = input.value;
     input.value = '';
  }
}
