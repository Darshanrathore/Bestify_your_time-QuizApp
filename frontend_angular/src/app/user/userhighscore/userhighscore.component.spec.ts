import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UserhighscoreComponent } from './userhighscore.component';

describe('UserhighscoreComponent', () => {
  let component: UserhighscoreComponent;
  let fixture: ComponentFixture<UserhighscoreComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UserhighscoreComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(UserhighscoreComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
