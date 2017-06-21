import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { StylesBiereComponent } from './styles-biere.component';

describe('StylesBiereComponent', () => {
  let component: StylesBiereComponent;
  let fixture: ComponentFixture<StylesBiereComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ StylesBiereComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(StylesBiereComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
