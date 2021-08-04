import { Component, HostListener } from '@angular/core';
import { CELLPHONE } from 'src/environments/environment';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  constructor() { }

  @HostListener('window:scroll', ['$event'])
  scrolling($event) {
    let menu: any = document.getElementById("menu");
    if (document.body.scrollTop > 50 || document.documentElement.scrollTop > 50) {
      menu.style.backgroundColor = "white";
      menu.style.color = "#696969";
      menu.style.height = "130px";
      menu.style.boxShadow = '0px 10px 1px -10px rgba(176,170,176,1)';
    } else if (document.body.scrollTop > 50 || document.documentElement.scrollTop > 50) {
      menu.style.backgroundColor = "white";
      menu.style.color = "#696969";
      menu.style.height = "130px";
      menu.style.boxShadow = '0px 10px 1px -10px rgba(176,170,176,1)';
    } else {
      menu.style.backgroundColor = 'transparent';
      menu.style.height = "160px";
      menu.style.color = "#DCDCDC";
      menu.style.boxShadow = 'none'
    }
  }
}
