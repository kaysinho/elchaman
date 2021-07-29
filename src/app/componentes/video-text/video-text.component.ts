import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-video-text',
  templateUrl: './video-text.component.html',
  styleUrls: ['./video-text.component.scss']
})
export class VideoTextComponent implements OnInit {

  @Input('YouTubeVideo') youtubeVideo : string ="";
  @Input('title') title :string = "";
  @Input('text') text : string = "";
  constructor() { }

  ngOnInit(): void {
  }

}
