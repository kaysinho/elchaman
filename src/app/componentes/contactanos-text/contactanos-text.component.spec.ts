import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ContactanosTextComponent } from './contactanos-text.component';

describe('ContactanosTextComponent', () => {
  let component: ContactanosTextComponent;
  let fixture: ComponentFixture<ContactanosTextComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ContactanosTextComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ContactanosTextComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
