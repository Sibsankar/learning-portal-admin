import { Component } from '@angular/core';
import { LocalDataSource } from 'ng2-smart-table';
import { SmartTableData } from '../../../@core/data/smart-table';
import { CourseCategoriesService } from '../../../services/course-categories.service';


@Component({
  selector: 'ngx-course-category',
  templateUrl: './course-category.component.html',
  styleUrls: ['./course-category.component.scss']
})

export class CourseCategoryComponent {
  public btnstatus = 'primary';
  settings = {
    actions: {
      add: false,
      position: 'right',
      mode: 'external',
      custom: [
        {
          name: 'Button',
          title: '<i class="nb-eye"></i> ',
        }
      ],
      },
    add: {
      addButtonContent: '<i class="nb-plus"></i>',
      createButtonContent: '<i class="nb-checkmark"></i>',
      cancelButtonContent: '<i class="nb-close"></i>',
    },
    edit: {
      editButtonContent: '<i class="nb-edit"></i>',
      saveButtonContent: '<i class="nb-checkmark"></i>',
      cancelButtonContent: '<i class="nb-close"></i>',
    },
    
    delete: {
      deleteButtonContent: '<i class="nb-trash"></i>',
      confirmDelete: true,
    },
    columns: {

      course_category_name: {
        title: 'Course Category Name',
        type: 'string',
      },
      CategoryDescription: {
        title: 'Course Category Description',
        type: 'string',
      },
      status: {
        title: 'Status',
        type: 'string',
      }

    },
  };

  source: LocalDataSource = new LocalDataSource();

  constructor(private courseCatergoryService: CourseCategoriesService) {
    //const data = this.service.getData();
    this.courseCatergoryService.getCategories().subscribe((res) => {
      this.source.load(res);
    });
  }

  onView(event): void {
    console.log(event)
    //this.router.navigateByUrl('/pages/courses/add-course/'+event.data.course_details_id);
  }


  onDeleteConfirm(event): void {
    if (window.confirm('Are you sure you want to delete?')) {
      event.confirm.resolve();
    } else {
      event.confirm.reject();
    }
  }
}


