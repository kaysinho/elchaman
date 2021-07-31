import { Component, OnInit } from '@angular/core';
import { CELLPHONE, PAGE_NAME} from '../../../environments/environment'
@Component({
  selector: 'app-white-section',
  templateUrl: './white-section.component.html',
  styleUrls: ['./white-section.component.scss']
})
export class WhiteSectionComponent implements OnInit {

  PAGE_NAME = PAGE_NAME;
  CELLPHONE = CELLPHONE
  constructor() { }

  ngOnInit(): void {
  }

}
