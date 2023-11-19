import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LocadoraFormComponent } from './locadora-form.component';

describe('LocadoraFormComponent', () => {
  let component: LocadoraFormComponent;
  let fixture: ComponentFixture<LocadoraFormComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [LocadoraFormComponent]
    });
    fixture = TestBed.createComponent(LocadoraFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
