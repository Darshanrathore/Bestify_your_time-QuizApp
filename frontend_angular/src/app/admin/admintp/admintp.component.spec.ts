import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AdmintpComponent } from './admintp.component';

describe('AdmintpComponent', () => {
  let component: AdmintpComponent;
  let fixture: ComponentFixture<AdmintpComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AdmintpComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AdmintpComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
