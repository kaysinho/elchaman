import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-card-section',
  templateUrl: './card-section.component.html',
  styleUrls: ['./card-section.component.scss']
})
export class CardSectionComponent implements OnInit {
  cards: any = [
    {
      imagen : 'assets/imagenes/Amarres (2).jpg', titulo: 'HECHIZOS DE AMOR'
    },
    {
      imagen : 'assets/imagenes/Alejamientos.jpg', titulo: 'ALEJAMIENTOS DE AMOR'
    },
    {
      imagen : 'assets/imagenes/Azar.jpg', titulo: 'JUEGOS DE AZAR'
    },
    {
      imagen : 'assets/imagenes/Brujeria.jpg', titulo: 'BRUJERÍA'
    },
    {
      imagen : 'assets/imagenes/Separarpersonas.jpg', titulo: 'SEPARA PERSONAS'
    },
    {
      imagen : 'assets/imagenes/Maleficios.jpg', titulo: 'MALEFICIOS'
    }
  ]
  constructor() { }

  ngOnInit(): void {
  }

}
