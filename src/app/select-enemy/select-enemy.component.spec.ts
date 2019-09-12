import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SelectEnemyComponent } from './select-enemy.component';

describe('SelectEnemyComponent', () => {
  let component: SelectEnemyComponent;
  let fixture: ComponentFixture<SelectEnemyComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SelectEnemyComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SelectEnemyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
