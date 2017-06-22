import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CategorieFormDeleteComponent } from './categorie-form-delete.component';

describe('CategorieFormDeleteComponent', () => {
  let component: CategorieFormDeleteComponent;
  let fixture: ComponentFixture<CategorieFormDeleteComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CategorieFormDeleteComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CategorieFormDeleteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
