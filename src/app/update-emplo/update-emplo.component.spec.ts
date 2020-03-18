import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { UpdateEmploComponent } from './update-emplo.component';

describe('UpdateEmploComponent', () => {
  let component: UpdateEmploComponent;
  let fixture: ComponentFixture<UpdateEmploComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UpdateEmploComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UpdateEmploComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
