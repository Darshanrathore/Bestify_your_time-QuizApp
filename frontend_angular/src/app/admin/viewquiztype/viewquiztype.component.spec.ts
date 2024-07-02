import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ViewquiztypeComponent } from './viewquiztype.component';

describe('ViewquiztypeComponent', () => {
  let component: ViewquiztypeComponent;
  let fixture: ComponentFixture<ViewquiztypeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ViewquiztypeComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ViewquiztypeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
