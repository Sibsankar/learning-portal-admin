
import { Component } from '@angular/core';
import { LocalDataSource } from 'ng2-smart-table';

import { SmartTableData } from '../../../@core/data/smart-table';

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
      
      SectionName: {
        title: 'Course Section Name',
        type: 'string',
      },
      CourseName: {
        title: 'Course Name',
        type: 'string',
      },
      status: {
        title: 'Status',
        type: 'string',
      }
      
    },
  };

  source: LocalDataSource = new LocalDataSource();

  constructor(private service: SmartTableData) {
    //const data = this.service.getData();

    const data = [{
      id: 1,
      CourseName: 'Software Developer',
      SectionName: 'Test fdlgjldfhghdfghdfghdflhg',
      status: 'Active'
    }, {
      id: 2,
      CourseName: 'Python',
      SectionName: 'Test fdlgjldfhghdfghdfghdflhg',
      status: 'Active'
    }, {
      id: 3,
      CourseName: 'Devops',
      SectionName: 'Test fdlgjldfhghdfghdfghdflhg',
      status: 'Active'
    }];

    console.log(data);
    this.source.load(data);
  }

  onDeleteConfirm(event): void {
    if (window.confirm('Are you sure you want to delete?')) {
      event.confirm.resolve();
    } else {
      event.confirm.reject();
    }
  }
}



