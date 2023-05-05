import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UpcomingCompComponent } from './upcoming-comp.component';

describe('UpcomingCompComponent', () => {
  let component: UpcomingCompComponent;
  let fixture: ComponentFixture<UpcomingCompComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UpcomingCompComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(UpcomingCompComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
