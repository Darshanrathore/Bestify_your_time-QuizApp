import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MousegameComponent } from './mousegame.component';

describe('MousegameComponent', () => {
  let component: MousegameComponent;
  let fixture: ComponentFixture<MousegameComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MousegameComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MousegameComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
