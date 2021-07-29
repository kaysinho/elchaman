import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TextVideoComponent } from './text-video.component';

describe('TextVideoComponent', () => {
  let component: TextVideoComponent;
  let fixture: ComponentFixture<TextVideoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TextVideoComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TextVideoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
