import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ListPorjectComponent } from './list-porject.component';

describe('ListPorjectComponent', () => {
  let component: ListPorjectComponent;
  let fixture: ComponentFixture<ListPorjectComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ListPorjectComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ListPorjectComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
