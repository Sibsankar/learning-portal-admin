import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CourseTopicComponent } from './course-topic.component';

describe('CourseTopicComponent', () => {
  let component: CourseTopicComponent;
  let fixture: ComponentFixture<CourseTopicComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CourseTopicComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CourseTopicComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
