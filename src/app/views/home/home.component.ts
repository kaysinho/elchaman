import { Component, OnInit } from '@angular/core';
import { CELLPHONE } from 'src/environments/environment';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  CELLPHONE : string = CELLPHONE
  videoTextSection: string = "Busco tu sagrado consuelo, quite de mi camino cualquier obstáculo que afecte a mi tranquilidad, sé que mi problema está en camino de solución, usted escuchará mi voz desesperada, pues sabe lo mucho que estoy sufriendo. Poderosa Santa Muerte, dame fuerza y voluntad, ya no soporto más, en usted deposito mis últimas esperanzas. Señora mía, venga a mi tu fuerza y sabiduría, concédeme con tu poder la solución de este problema. Amén.";
  imageTextSection: string ="Los amarres de amor son duraderos y muy poderosos, se hacen con el único fin de que el vínculo entre la pareja, los sentimientos de amor y el deseo sexual se fortalezcan y aviven nuevamente; incluso mas fuertes que al principio de la relación."
  textImageSection: string ="Magia Blanca, Budú, Magia Roja, ayudas espirituales. ¿Si tu intensión es encontrar el amor, trabajo o felicidad? Sin importar el tiempo, la distancia, la persona, el idioma o religión."
  text2 : string = "Rompemos salaciones, hechizos, maleficios y encantamientos. Con trabajos de alto poder y de esta manera liberarte de la oscuridad en la cual te encuentras, donde el dinero no te rinde, en el trabajo te va mal y el amor nunca llega."
  
  constructor() { }

  ngOnInit(): void {
  }

}
