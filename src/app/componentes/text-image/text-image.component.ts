import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-text-image',
  templateUrl: './text-image.component.html',
  styleUrls: ['./text-image.component.scss']
})
export class TextImageComponent implements OnInit {
  @Input('image') image : string ="";
  @Input('title') title :string = "";
  @Input('text') text : string = "";
  constructor() { }

  ngOnInit(): void {
  }

}
