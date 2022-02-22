import { Component } from '@angular/core';

var single = [
  {
    "name": "Camilo Pinzón",
    "value": 25
  },
  {
    "name": "Mauricio ospina",
    "value": 30
  },
  {
    "name": "Sebastian Rojas",
    "value": 17
  }
];

@Component({
  selector: 'app-home-pages',
  templateUrl: './home-pages.component.html',
  styleUrls: ['./home-pages.component.scss']
})
export class HomePagesComponent {

  single =[]

  view: [number, number] = [800, 215];

  // options
  showXAxis = true;
  showYAxis = true;
  gradient = false;
  showLegend = true;
  showXAxisLabel = true;
  xAxisLabel = 'Agentes';
  showYAxisLabel = true;
  yAxisLabel = 'Cant. Tickets';

  constructor() {
    Object.assign(this, { single })
  }

  onSelect(event: any) {
    console.log(event);
  }

}
