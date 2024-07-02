import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HomezeroComponent } from './homezero.component';

describe('HomezeroComponent', () => {
  let component: HomezeroComponent;
  let fixture: ComponentFixture<HomezeroComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ HomezeroComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(HomezeroComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
