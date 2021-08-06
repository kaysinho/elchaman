import { Component, OnInit } from '@angular/core';
import { PAGE_NAME } from 'src/environments/environment';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.scss']
})
export class MenuComponent implements OnInit {
  PAGE_NAME : string = PAGE_NAME
  showMobileList : boolean = false;
  constructor() { }

  ngOnInit(): void {
  }

  showList(){
    this.showMobileList = !this.showMobileList;
  }

}
