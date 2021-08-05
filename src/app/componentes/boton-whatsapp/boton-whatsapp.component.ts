import { Component, OnInit } from '@angular/core';
import { CELLPHONE } from 'src/environments/environment';

@Component({
  selector: 'app-boton-whatsapp',
  templateUrl: './boton-whatsapp.component.html',
  styleUrls: ['./boton-whatsapp.component.scss']
})
export class BotonWhatsappComponent implements OnInit {
  text: string = ""
  CELLPHONE : string = CELLPHONE
  showBtn : boolean = false
  constructor() { }

  ngOnInit(): void {
  }

  showChat(){
    this.showBtn = !this.showBtn
  }

}
