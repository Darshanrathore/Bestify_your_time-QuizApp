import { ComponentFixture, TestBed } from '@angular/core/testing';

import { QuizcategoryComponent } from './quizcategory.component';

describe('QuizcategoryComponent', () => {
  let component: QuizcategoryComponent;
  let fixture: ComponentFixture<QuizcategoryComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ QuizcategoryComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(QuizcategoryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
