import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NewsByTopicComponent } from './news-by-topic.component';

describe('NewsByTopicComponent', () => {
  let component: NewsByTopicComponent;
  let fixture: ComponentFixture<NewsByTopicComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NewsByTopicComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(NewsByTopicComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
