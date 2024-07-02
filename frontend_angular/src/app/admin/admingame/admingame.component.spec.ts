import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AdmingameComponent } from './admingame.component';

describe('AdmingameComponent', () => {
  let component: AdmingameComponent;
  let fixture: ComponentFixture<AdmingameComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AdmingameComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AdmingameComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
