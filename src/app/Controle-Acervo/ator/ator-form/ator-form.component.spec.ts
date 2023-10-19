import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AtorFormComponent } from './ator-form.component';

describe('AtorFormComponent', () => {
  let component: AtorFormComponent;
  let fixture: ComponentFixture<AtorFormComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [AtorFormComponent]
    });
    fixture = TestBed.createComponent(AtorFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
