import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AdminClubListComponent } from './admin-club-list.component';

describe('AdminClubListComponent', () => {
  let component: AdminClubListComponent;
  let fixture: ComponentFixture<AdminClubListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AdminClubListComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AdminClubListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
