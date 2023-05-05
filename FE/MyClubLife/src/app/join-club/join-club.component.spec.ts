import { ComponentFixture, TestBed } from '@angular/core/testing';

import { JoinClubComponent } from './join-club.component';

describe('JoinClubComponent', () => {
  let component: JoinClubComponent;
  let fixture: ComponentFixture<JoinClubComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ JoinClubComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(JoinClubComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
