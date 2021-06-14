import { Component, HostListener } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'elchaman';
  constructor(){}

  @HostListener('window:scroll', ['$event'])
  scrolling($event){
    let menu: any = document.getElementById("menu");
    if (document.body.scrollTop > 50 || document.documentElement.scrollTop > 50) {
      menu.style.backgroundColor =  "white";
      menu.style.color = "black";
      menu.style.height = "105px";
    } else {
      menu.style.backgroundColor =  'transparent';
      menu.style.height = "130px";    }
  }
}
