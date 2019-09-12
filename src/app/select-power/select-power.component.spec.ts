import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SelectPowerComponent } from './select-power.component';

describe('SelectPowerComponent', () => {
  let component: SelectPowerComponent;
  let fixture: ComponentFixture<SelectPowerComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SelectPowerComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SelectPowerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
