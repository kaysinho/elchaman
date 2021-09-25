import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';

declare var Swal : any;
@Component({
  selector: 'app-contactanos',
  templateUrl: './contactanos.component.html',
  styleUrls: ['./contactanos.component.scss']
})
export class ContactanosComponent implements OnInit {

  email : string = "";
  name : string = "";
  cellPhone : string ="";
  text : string = "";

  constructor(private http: HttpClient, private route:Router) { }

  ngOnInit(): void {
  }

  goToHome(){
    this.route.navigate(['/inicio/index'])
  }


  sendMessage(){
    let body = {
      nombre : this.name,
      email : this.email,
      telefono : this.cellPhone,
      text: this.text
    }

    this.http.post('/php/enviar.php', JSON.stringify(body), {})
      .subscribe(data => {
        this.clearForm();
        Swal.fire(
          'Mensaje enviado!',
          'Pronto nos podremos en contacto con usted!',
          'success'
        )
      })
  }

  clearForm(){
    this.email = "";
    this.name = "";
    this.cellPhone ="";
    this.text = "";
  }

}
