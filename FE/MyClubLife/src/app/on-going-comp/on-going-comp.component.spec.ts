import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OnGoingCompComponent } from './on-going-comp.component';

describe('OnGoingCompComponent', () => {
  let component: OnGoingCompComponent;
  let fixture: ComponentFixture<OnGoingCompComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ OnGoingCompComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(OnGoingCompComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
