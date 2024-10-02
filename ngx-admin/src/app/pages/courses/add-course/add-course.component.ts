import { Component, inject } from '@angular/core';
import { CourseCategoriesService } from '../../../services/course-categories.service';
import { ToastrService } from 'ngx-toastr';
import { Router,ActivatedRoute } from '@angular/router';

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
  private route = inject(ActivatedRoute);
  productId!: string;
  public allCategories:any;
  constructor(private courseCatergoryService: CourseCategoriesService, private toastrService: ToastrService, private router: Router,route:ActivatedRoute) {
  
  }

  ngOnInit() {
    this.route.paramMap.subscribe((params) => {
      this.productId = params.get('id')!;
      console.log('ID------------',this.productId);
    });
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

      if (res.resCode == 1) {
        this.toastrService.success(res.resMessage);       
        //this.router.navigate(['/course-list']);
        this.router.navigateByUrl('/pages/courses/course-list');
      } else {
        this.toastrService.error(res.resMessage);
      }
      console.log(res)
      //this.source.load(res);
    });
  }






}
