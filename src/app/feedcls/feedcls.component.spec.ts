import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FeedclsComponent } from './feedcls.component';

describe('FeedclsComponent', () => {
  let component: FeedclsComponent;
  let fixture: ComponentFixture<FeedclsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FeedclsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FeedclsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
