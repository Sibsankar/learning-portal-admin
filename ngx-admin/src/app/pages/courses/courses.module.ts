
import { CommonModule } from '@angular/common';


import { CourseListComponent } from './course-list/course-list.component';
import { CoursesComponent } from './courses.component';

import { NgModule } from '@angular/core';


import {
  NbActionsModule,
  NbButtonModule,
  NbCardModule,
  NbCheckboxModule,
  NbDatepickerModule, NbIconModule,
  NbInputModule,
  NbRadioModule,
  NbSelectModule,
  NbUserModule,
  NbTreeGridModule
} from '@nebular/theme';


import { Ng2SmartTableModule } from 'ng2-smart-table';

import { ThemeModule } from '../../@theme/theme.module';
import { CoursesRoutingModule, routedComponents } from './courses-routing.module';
import { FsIconComponent } from '../tables/tree-grid/tree-grid.component';
import { AddCourseComponent } from './add-course/add-course.component';
import { CourseCategoryComponent } from './course-category/course-category.component';
import { CourseTopicComponent } from './course-topic/course-topic.component';
import { AddCourseCategoryComponent } from './add-course-category/add-course-category.component';
import { AddCourseTopicComponent } from './add-course-topic/add-course-topic.component';
import { CourseSectionComponent } from './course-section/course-section.component';
import { AddCourseSectionComponent } from './add-course-section/add-course-section.component';

@NgModule({
  imports: [
    NbCardModule,
    NbTreeGridModule,
    NbIconModule,
    NbInputModule,
    ThemeModule,
    CoursesRoutingModule,
    Ng2SmartTableModule,
    CommonModule,
    NbButtonModule,
    NbActionsModule,
    NbUserModule,
    NbCheckboxModule,
    NbRadioModule,
    NbDatepickerModule,
    NbSelectModule,

  ],
  declarations: [
    ...routedComponents,
    CourseListComponent,
    CoursesComponent,
    AddCourseComponent,
    CourseCategoryComponent,
    CourseTopicComponent,
    AddCourseCategoryComponent,
    AddCourseTopicComponent,
    CourseSectionComponent,
    AddCourseSectionComponent
  ],
})
export class CoursesModule { }

