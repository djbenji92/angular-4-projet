import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CategorieFormUpdateComponent } from './categorie-form-update.component';

describe('CategorieFormUpdateComponent', () => {
  let component: CategorieFormUpdateComponent;
  let fixture: ComponentFixture<CategorieFormUpdateComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CategorieFormUpdateComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CategorieFormUpdateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
