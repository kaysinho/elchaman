import { Component, OnInit } from '@angular/core';
import { PAGE_NAME } from 'src/environments/environment';

@Component({
  selector: 'app-banner',
  templateUrl: './banner.component.html',
  styleUrls: ['./banner.component.scss']
})
export class BannerComponent implements OnInit {
  PAGE_NAME = PAGE_NAME
  constructor() { }

  ngOnInit(): void {
  }

  isHome() : boolean{
    if (window.location.href.indexOf('inicio') > -1){
      return true;
    }
    return false;
  }

}
