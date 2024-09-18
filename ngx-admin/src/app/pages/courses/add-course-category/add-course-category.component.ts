import { Component } from '@angular/core';
import { ToastrService } from 'ngx-toastr';
import { CourseCategoriesService } from '../../../services/course-categories.service';

@Component({
  selector: 'ngx-add-course-category',
  templateUrl: './add-course-category.component.html',
  styleUrls: ['./add-course-category.component.scss']
})
export class AddCourseCategoryComponent {
  constructor(private courseCatergoryService: CourseCategoriesService, private toastrService: ToastrService) {}

  public addCategoryFormData = {
    course_category_name: '',
    status: '',
    CategoryDescription: '',
    level_type: 1,
    parent_id: 0
  }

  addCategory(){
    this.courseCatergoryService.addCategory(this.addCategoryFormData).subscribe((res) => {
      if (res.resCode == 1) {
        this.toastrService.success(res.resMessage);
      } else {
        this.toastrService.error(res.resMessage);
      }
      this.toastrService.error('Something went wrong');
    });
  }


}
