import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AmarresComponent } from './amarres.component';

describe('AmarresComponent', () => {
  let component: AmarresComponent;
  let fixture: ComponentFixture<AmarresComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AmarresComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AmarresComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
