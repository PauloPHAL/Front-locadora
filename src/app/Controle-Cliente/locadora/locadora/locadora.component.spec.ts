import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LocadoraComponent } from './locadora.component';

describe('LocadoraComponent', () => {
  let component: LocadoraComponent;
  let fixture: ComponentFixture<LocadoraComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [LocadoraComponent]
    });
    fixture = TestBed.createComponent(LocadoraComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
