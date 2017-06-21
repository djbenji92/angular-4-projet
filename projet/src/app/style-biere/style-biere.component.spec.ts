import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { StyleBiereComponent } from './style-biere.component';

describe('StyleBiereComponent', () => {
  let component: StyleBiereComponent;
  let fixture: ComponentFixture<StyleBiereComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ StyleBiereComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(StyleBiereComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
