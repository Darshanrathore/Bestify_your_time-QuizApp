import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UsertpComponent } from './usertp.component';

describe('UsertpComponent', () => {
  let component: UsertpComponent;
  let fixture: ComponentFixture<UsertpComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UsertpComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(UsertpComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
