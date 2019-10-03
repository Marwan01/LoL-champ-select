import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ChampProfileComponent } from './champ-profile.component';

describe('ChampProfileComponent', () => {
  let component: ChampProfileComponent;
  let fixture: ComponentFixture<ChampProfileComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ChampProfileComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ChampProfileComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
