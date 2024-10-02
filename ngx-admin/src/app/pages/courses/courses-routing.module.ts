
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CourseListComponent } from './course-list/course-list.component';
import { CoursesComponent } from './courses.component';
import { AddCourseComponent } from './add-course/add-course.component';
import { CourseCategoryComponent } from './course-category/course-category.component';
import { CourseTopicComponent } from './course-topic/course-topic.component'; 
import { AddCourseCategoryComponent } from './add-course-category/add-course-category.component';
import { AddCourseTopicComponent } from './add-course-topic/add-course-topic.component';
import { CourseSectionComponent } from './course-section/course-section.component';
import { AddCourseSectionComponent } from './add-course-section/add-course-section.component';


const routes: Routes = [{
  path: '',
  component: CoursesComponent,
  children: [
    {
      path: 'course-list/:course_category_id',
      component: CourseListComponent,
    },
    {
      path: 'add-course/:id',
      component: AddCourseComponent
    },
    {
      path: 'course-category',
      component: CourseCategoryComponent
    },
    {
      path: 'course-topics',
      component: CourseTopicComponent
    },
    {
      path: 'add-course-category',
      component: AddCourseCategoryComponent
    },
    {
      path: 'add-course-topics',
      component: AddCourseTopicComponent
    },
    {
      path: 'add-course-section',
      component: AddCourseSectionComponent
    },
    {
      path: 'course-section',
      component: CourseSectionComponent
    }
  ],
}];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class CoursesRoutingModule { }

export const routedComponents = [
  CourseListComponent,CoursesComponent,AddCourseComponent
  
];

