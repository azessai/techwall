import {Component, Input, OnInit} from '@angular/core';

@Component({
  selector: 'app-style',
  templateUrl: './style.component.html',
  styleUrls: ['./style.component.scss']
})
export class StyleComponent implements OnInit {
  @Input() color = 'red';
  @Input() bgColor = 'yellow';
  size = "11px";
  constructor() { }

  ngOnInit(): void {
  }
  changeSize(elem: any) {
console.log(elem.value);
  this.size = elem.value + 'px';
  }
}
