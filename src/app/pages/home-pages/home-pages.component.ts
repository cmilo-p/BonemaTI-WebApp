import { Component } from '@angular/core';

var single = [
  {
    "name": "Enero",
    "value": 100
  },
  {
    "name": "Febrero",
    "value": 0
  },
  {
    "name": "Marzo",
    "value": 0
  },
  {
    "name": "Abril",
    "value": 0
  },
  {
    "name": "Mayo",
    "value": 0
  },
  {
    "name": "Junio",
    "value": 0
  },
  {
    "name": "Julio",
    "value": 0
  },
  {
    "name": "Agosto",
    "value": 0
  },
  {
    "name": "Septiembre",
    "value": 0
  },
  {
    "name": "Octubre",
    "value": 0
  },
  {
    "name": "Noviembre",
    "value": 0
  },
  {
    "name": "Diciembre",
    "value": 0
  }
];

@Component({
  selector: 'app-home-pages',
  templateUrl: './home-pages.component.html',
  styleUrls: ['./home-pages.component.scss']
})
export class HomePagesComponent {

  single =[]

  view: [number, number] = [800, 260];

  // options
  showXAxis = true;
  showYAxis = true;
  gradient = false;
  showLegend = true;
  showXAxisLabel = true;
  xAxisLabel = 'Mes de Mantenimiento';
  showYAxisLabel = true;
  yAxisLabel = '% de Satisfacción';

  constructor() {
    Object.assign(this, { single })
  }

  onSelect(event: any) {
    console.log(event);
  }

}
