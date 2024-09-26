import { Component } from '@angular/core';
import { CourseCategoriesService } from '../../../services/course-categories.service';
@Component({
  selector: 'ngx-add-course',
  templateUrl: './add-course.component.html',
  styleUrls: ['./add-course.component.scss']
})
export class AddCourseComponent {

  public addCourseFormData = {
    course_category_id : 0,
    course_owner : 1,
    course_title_name : "",
    type : 1,
    rating : "",
    students_enrolled : 1500,
    course_tags : "",
    course_introduction: "mnvmvmvbmnbmnbmnbmnbmbmb",
    course_preview_video_link : ""

  }

  public allCategories:any;
  constructor(private courseCatergoryService: CourseCategoriesService) {
  
  }
  ngOnInit() {
    this.getCourseCategories();
  }

  getCourseCategories(){
    this.courseCatergoryService.getCategories().subscribe((res) => {
      this.allCategories=res;
      console.log(res);
      //this.source.load(res);
    });
  }

  addCourses(){
    console.log(this.addCourseFormData);
    this.courseCatergoryService.saveCourses(this.addCourseFormData).subscribe((res) => {
      console.log(res)
      //this.source.load(res);
    });
  }






}
