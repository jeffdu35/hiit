import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GainageComponent } from './gainage.component';

describe('GainageComponent', () => {
  let component: GainageComponent;
  let fixture: ComponentFixture<GainageComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GainageComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GainageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
