import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EmploListComponent } from './emplo-list.component';

describe('EmploListComponent', () => {
  let component: EmploListComponent;
  let fixture: ComponentFixture<EmploListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EmploListComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EmploListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
