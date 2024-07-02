import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ViewquizuserComponent } from './viewquizuser.component';

describe('ViewquizuserComponent', () => {
  let component: ViewquizuserComponent;
  let fixture: ComponentFixture<ViewquizuserComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ViewquizuserComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ViewquizuserComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
