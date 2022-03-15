import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ExportsBtnComponent } from './exports-btn.component';

describe('ExportsBtnComponent', () => {
  let component: ExportsBtnComponent;
  let fixture: ComponentFixture<ExportsBtnComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ExportsBtnComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ExportsBtnComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
