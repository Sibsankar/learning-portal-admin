import { Component, OnInit, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { CourseCategoriesService } from '../../../services/course-categories.service';
import { FormsModule, ReactiveFormsModule }   from '@angular/forms';

@Component({
  selector: 'ngx-add-course-category',
  templateUrl: './add-course-category.component.html',
  styleUrls: ['./add-course-category.component.scss']
})

export class AddCourseCategoryComponent implements OnInit {
  addCategoryForm: categoryForm = new categoryForm();

  @ViewChild("categoryForm")
  categoryForm!: NgForm;
  isSubmitted: boolean = false;
  constructor(private router: Router, private courseCategoriesService: CourseCategoriesService) { }

  ngOnInit(): void {  }

  AddEmployee(isValid: any) {
    this.isSubmitted = true;
    if (isValid) {
      this.courseCategoriesService.addCategory(this.addCategoryForm).subscribe(async data => {
        if (data != null && data.body != null) {
          if (data != null && data.body != null) {
            var resultData = data.body;
            if (resultData != null && resultData.isSuccess) {
              // this.toastr.success(resultData.message);
              setTimeout(() => {
                this.router.navigate(['/Home']);
              }, 500);
            }
          }
        }
      },
        async error => {
          this.router.navigate(['/Home']);
          // this.toastr.error(error.message);
          // setTimeout(() => {
          //   this.router.navigate(['/Home']);
          // }, 500);
        });
    }
  }

}

export class categoryForm {
  course_category_name: string = "";
}
