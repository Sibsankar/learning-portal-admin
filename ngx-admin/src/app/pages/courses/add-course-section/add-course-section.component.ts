import { Component } from '@angular/core';
import { ToastrService } from 'ngx-toastr';
import { CourseCategoriesService } from '../../../services/course-categories.service';
import { Router } from '@angular/router';

@Component({
  selector: 'ngx-add-course-section',
  templateUrl: './add-course-section.component.html',
  styleUrls: ['./add-course-section.component.scss']
})
export class AddCourseSectionComponent {
  constructor(private router: Router, private courseCatergoryService:CourseCategoriesService, private toastrService: ToastrService) {}

  public addSectionFormData = {
    course_code: '',
    sequence_number: 0,
    section_title: ''
  }
  public categories = [];
  public courses = [];
  public topics = [];

  ngOnInit() {
    this.getCategories();
  }

  getCategories() {
    this.courseCatergoryService.getCategories('0').subscribe((res) => {
      this.categories = res;
    });
  }

  getCourses(category_id) {
    this.courseCatergoryService.getCourses(category_id).subscribe((res) => {
      this.courses = res;
    });
  }

  // getTopics(course_id) {
  //   let selectedCourse = this.courses.filter((c) => { return c.course_details_id === course_id });
  //   let courseCode = selectedCourse[0].course_code;
  //   let sectionId = selectedCourse[0].
  //   this.courseCatergoryService.getTopics(course_id).subscribe((res) => {
  //     this.topics = res;
  //   });
  // }

  clearAll() {
    this. addSectionFormData = {
      course_code: '',
      sequence_number: 0,
      section_title: ''
    };
    this.courses = [];
  }

  addSection() {
    this.courseCatergoryService.addCategory(this.addSectionFormData).subscribe((res) => {
      if (res.resCode == 1) {
        this.toastrService.success(res.resMessage);
        this.clearAll();
        // this.router.navigate(['course-category']);
      } else {
        this.toastrService.error(res.resMessage);
      }
    });
  }

}
