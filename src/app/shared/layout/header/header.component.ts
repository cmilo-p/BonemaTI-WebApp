import { Component, OnInit } from '@angular/core';
import { Global } from 'src/app/services/global';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

  public company: string;

  constructor() {
    this.company = Global.company;
   }

  ngOnInit(): void {
  }

}
