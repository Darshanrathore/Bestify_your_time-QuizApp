import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AttemptedusersComponent } from './attemptedusers.component';

describe('AttemptedusersComponent', () => {
  let component: AttemptedusersComponent;
  let fixture: ComponentFixture<AttemptedusersComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AttemptedusersComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AttemptedusersComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
