import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Hover } from './hover';

describe('Hover', () => {
  let component: Hover;
  let fixture: ComponentFixture<Hover>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Hover]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Hover);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
