import { Component, OnInit } from '@angular/core';
import { ToastrService } from 'ngx-toastr';
import { CourseCategoriesService } from '../../../services/course-categories.service';
import { Router } from '@angular/router';

@Component({
  selector: 'ngx-add-course-category',
  templateUrl: './add-course-category.component.html',
  styleUrls: ['./add-course-category.component.scss']
})
export class AddCourseCategoryComponent implements OnInit {
  constructor(private router: Router, private courseCatergoryService: CourseCategoriesService, private toastrService: ToastrService) {}

  public addCategoryFormData = {
    course_category_name: '',
    status: '',
    CategoryDescription: '',
    level_type: 1,
    parent_id: 0
  }
  public allCats = [];
  public parentCats = [];
  public subCats1 = [];
  public subCats2 = [];

  ngOnInit() {
    this.getParentCategories();
   }

  getParentCategories() {
    this.courseCatergoryService.getCategories('0').subscribe((res) => {
      this.addCategoryFormData.parent_id = 0;
      this.allCats = res;
      this.parentCats = this.allCats.filter((cat) => { return cat.parent_id === 0 });
      this.subCats1 = this.subCats2 = [];
      // console.log('this.parentCats ->', this.parentCats);
    });
  }

  getSubCategories(parent_cat) {
    // console.log('par_cat', parent_cat);
    this.addCategoryFormData.parent_id = parent_cat;
    this.subCats1 = this.allCats.filter((cat) => { return cat.parent_id === parent_cat });
    this.subCats2 = [];
    // console.log('this.subCats1 ->', this.subCats1);
  }

  getSubCategory1(sub_cat1_id) {
    // console.log('sub_cat1_id', sub_cat1_id);
    this.addCategoryFormData.parent_id = sub_cat1_id;
    this.subCats2 = this.allCats.filter((cat) => { return cat.parent_id === sub_cat1_id });
    // console.log('this.subCats2 ->', this.subCats2);
  }

  getSubCategory2(sub_cat2_id) {
    this.addCategoryFormData.parent_id = sub_cat2_id;
  }

  clearAll() {
    this. addCategoryFormData = {
      course_category_name: '',
      status: '',
      CategoryDescription: '',
      level_type: 1,
      parent_id: 0
    };
    this.subCats1 = this.subCats2 = [];
  }

  addCategory(){
    this.courseCatergoryService.addCategory(this.addCategoryFormData).subscribe((res) => {
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
