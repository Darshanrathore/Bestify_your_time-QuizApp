import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AdminstartComponent } from './adminstart.component';

describe('AdminstartComponent', () => {
  let component: AdminstartComponent;
  let fixture: ComponentFixture<AdminstartComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AdminstartComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AdminstartComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
