import { Component } from '@angular/core';

@Component({
  selector: 'ngx-add-course-category',
  templateUrl: './add-course-category.component.html',
  styleUrls: ['./add-course-category.component.scss']
})
export class AddCourseCategoryComponent {
//addCategoryFormData: any;


public addCategoryFormData = {
  course_category_name: 'fgfdgdfgfdgdfgf',
  status: '',
  CategoryDescription: 'rrrrrrrrrrrrrrrggggggggggggggggggggggggggggggggggggggggg'
}



getCategoryData(){
  console.log('Test.....................');
}


}
