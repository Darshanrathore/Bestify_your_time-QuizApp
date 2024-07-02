import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PlayedgameslistComponent } from './playedgameslist.component';

describe('PlayedgameslistComponent', () => {
  let component: PlayedgameslistComponent;
  let fixture: ComponentFixture<PlayedgameslistComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PlayedgameslistComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PlayedgameslistComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
