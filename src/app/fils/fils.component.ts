import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-fils',
  templateUrl: './fils.component.html',
  styleUrls: ['./fils.component.scss']
})
export class FilsComponent implements OnInit {

  @Input() filsProperty: any;
  @Output() sendRequestToData = new EventEmitter();

  constructor() { }

  ngOnInit(): void {
  }

  sendEvent() {
    this.sendRequestToData.emit(
      `Please send me some money ;-)`
    )
  }

}
