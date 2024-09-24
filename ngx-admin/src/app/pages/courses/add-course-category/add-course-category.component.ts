import { Component, OnInit } from '@angular/core';
import { ToastrService } from 'ngx-toastr';
import { CourseCategoriesService } from '../../../services/course-categories.service';

@Component({
  selector: 'ngx-add-course-category',
  templateUrl: './add-course-category.component.html',
  styleUrls: ['./add-course-category.component.scss']
})
export class AddCourseCategoryComponent implements OnInit {
  constructor(private courseCatergoryService: CourseCategoriesService, private toastrService: ToastrService) {}

  public addCategoryFormData = {
    course_category_name: '',
    status: '',
    CategoryDescription: '',
    level_type: 1,
    parent_id: 0
  }

  public parentCats = '';
  public subCats = '';

  ngOnInit() {
    this.getParentCategories();
   }

  getParentCategories() {
    this.courseCatergoryService.getCategories('0').subscribe((res) => {
      this.parentCats = res;
      console.log('this.parentCats ->', this.parentCats);
    });
  }

  setSubCategory(cat_id) {
    this.addCategoryFormData.parent_id = cat_id;
  }

  getSubCategories(parent_cat) {
    console.log('par_cat', parent_cat);
    this.addCategoryFormData.parent_id = parent_cat;
    this.courseCatergoryService.getCategories(parent_cat).subscribe((res) => {
      this.subCats = res;
    });
  }

  addCategory(){
    this.courseCatergoryService.addCategory(this.addCategoryFormData).subscribe((res) => {
      if (res.resCode == 1) {
        this.toastrService.success(res.resMessage);
      } else {
        this.toastrService.error(res.resMessage);
      }
    });
  }


}
