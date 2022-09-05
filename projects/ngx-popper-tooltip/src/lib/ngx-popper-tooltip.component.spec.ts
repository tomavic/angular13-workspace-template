import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NgxPopperTooltipComponent } from './ngx-popper-tooltip.component';

describe('NgxPopperTooltipComponent', () => {
  let component: NgxPopperTooltipComponent;
  let fixture: ComponentFixture<NgxPopperTooltipComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NgxPopperTooltipComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(NgxPopperTooltipComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
