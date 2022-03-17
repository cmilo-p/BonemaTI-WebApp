import { Component, OnInit } from '@angular/core';
import { Global } from 'src/app/services/global';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.scss']
})
export class SidebarComponent implements OnInit {

  public company: string;

  constructor() {
    this.company = Global.company;
   }

  ngOnInit(): void {
  }

}
