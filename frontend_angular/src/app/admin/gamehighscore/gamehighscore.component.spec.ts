import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GamehighscoreComponent } from './gamehighscore.component';

describe('GamehighscoreComponent', () => {
  let component: GamehighscoreComponent;
  let fixture: ComponentFixture<GamehighscoreComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ GamehighscoreComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(GamehighscoreComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
