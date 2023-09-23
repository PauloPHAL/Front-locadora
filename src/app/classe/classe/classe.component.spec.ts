import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ClasseComponent } from './classe.component';

describe('ClasseComponent', () => {
  let component: ClasseComponent;
  let fixture: ComponentFixture<ClasseComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ClasseComponent]
    });
    fixture = TestBed.createComponent(ClasseComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
