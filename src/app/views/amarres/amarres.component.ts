import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-amarres',
  templateUrl: './amarres.component.html',
  styleUrls: ['./amarres.component.scss']
})
export class AmarresComponent implements OnInit {

  constructor(private route:Router) { }

  ngOnInit(): void {
  }

  goToHome(){
    this.route.navigate(['/inicio/index'])
  }
}
