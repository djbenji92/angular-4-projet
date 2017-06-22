import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CategorieFormAddComponent } from './categorie-form-add.component';

describe('CategorieFormAddComponent', () => {
  let component: CategorieFormAddComponent;
  let fixture: ComponentFixture<CategorieFormAddComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CategorieFormAddComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CategorieFormAddComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
