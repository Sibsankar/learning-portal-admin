
import { Component } from '@angular/core';
import { LocalDataSource } from 'ng2-smart-table';
import { SmartTableData } from '../../../@core/data/smart-table';
import { CourseCategoriesService } from '../../../services/course-categories.service';

@Component({
  selector: 'ngx-course-section',
  templateUrl: './course-section.component.html',
  styleUrls: ['./course-section.component.scss']
})
export class CourseSectionComponent {
public btnstatus = 'primary';
  settings = {
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
      
      section_title: {
        title: 'Section Title',
        type: 'string',
      },
      sequence_number: {
        title: 'Sequence Number',
        type: 'string',
      },
      status: {
        title: 'Status',
        type: 'string',
      }
      
    },
  };

  source: LocalDataSource = new LocalDataSource();

  constructor(private courseCatergoryService: CourseCategoriesService) {}

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

  getSections(course_code) {
    this.courseCatergoryService.getSections(course_code).subscribe((res) => {
      this.source.load(res);
    });
  }

  onDeleteConfirm(event): void {
    if (window.confirm('Are you sure you want to delete?')) {
      event.confirm.resolve();
    } else {
      event.confirm.reject();
    }
  }
}



