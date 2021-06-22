import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-card-section',
  templateUrl: './card-section.component.html',
  styleUrls: ['./card-section.component.scss']
})
export class CardSectionComponent implements OnInit {
  cards: any = [
    {
      imagen : 'assets/images/hechizos-de-amor.jpg', titulo: 'HECHIZOS DE AMOR'
    },
    {
      imagen : 'assets/images/hechizos.jpg', titulo: 'AMARRES DE AMOR'
    },
    {
      imagen : 'assets/images/juegos-de-azar.jpg', titulo: 'JUEGOS DE AZAR'
    },
    {
      imagen : 'assets/images/maleficios.jpg', titulo: 'BRUJERÍA'
    },
    {
      imagen : 'assets/images/separar-personas.jpg', titulo: 'SEPARA PERSONAS'
    },
    {
      imagen : 'assets/images/brujeria.jpg', titulo: 'MALEFICIOS'
    }
  ]
  constructor() { }

  ngOnInit(): void {
  }

}
