import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CreateEmploComponent } from './create-emplo.component';

describe('CreateEmploComponent', () => {
  let component: CreateEmploComponent;
  let fixture: ComponentFixture<CreateEmploComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CreateEmploComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CreateEmploComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
