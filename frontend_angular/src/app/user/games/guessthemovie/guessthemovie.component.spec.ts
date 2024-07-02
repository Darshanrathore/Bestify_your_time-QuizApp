import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GuessthemovieComponent } from './guessthemovie.component';

describe('GuessthemovieComponent', () => {
  let component: GuessthemovieComponent;
  let fixture: ComponentFixture<GuessthemovieComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ GuessthemovieComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(GuessthemovieComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
