import { Component, HostListener } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'elchaman';
  videoTextSection: string = "busco tu sagrado consuelo, quite de mi camino cualquier obstáculo que afecte a mi tranquilidad, sé que mi problema está en camino de solución, usted escuchará mi voz desesperada, pues sabe lo mucho que estoy sufriendo. Poderosa Santa Muerte, dame fuerza y voluntad, ya no soporto más, en usted deposito mis últimas esperanzas. Señora mía, venga a mi tu fuerza y sabiduría, concédeme con tu poder la solución de este problema. Amén.";
  imageTextSection: string ="Este Amarre de amor podría perdurar por largo tiempo, contribuyendo en el pensamiento de tu pareja, recapacitando sobre sus actos y decisiones, esta magia podría ser muy fuerte y poderosa."
  textImageSection: string ="Maestros en Magia, Magia Roja, ayudas espirituales. ¿Si tu intensión es encontrar el amor, trabajo o felicidad? Sin importar el tiempo, la distancia, la persona, el idioma o religión."
  text2 : string = "Rompemos salaciones, hechizos, maleficios y encantamientos a larga y corta distancia con trabajos de alta telepatía para poder liberarte de la oscuridad en la cual te encuentras, donde el dinero no te rinde, donde en el trabajo te va mal, donde el amor nunca llega y se va en cuestión de horas."
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
