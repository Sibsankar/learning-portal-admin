


import { Component } from '@angular/core';



import { LocalDataSource } from 'ng2-smart-table';

import { SmartTableData } from '../../../@core/data/smart-table';

@Component({
  selector: 'ngx-course-topic',
  templateUrl: './course-topic.component.html',
  styleUrls: ['./course-topic.component.scss']
})
export class CourseTopicComponent {
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
      
      CategoryName: {
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

  constructor(private service: SmartTableData) {
    //const data = this.service.getData();

    const data = [{
      id: 1,
      CategoryName: 'Software Developer',
      CategoryDescription: 'Test fdlgjldfhghdfghdfghdflhg',
      status: 'Active'
    }, {
      id: 2,
      CategoryName: 'Python',
      CategoryDescription: 'Test fdlgjldfhghdfghdfghdflhg',
      status: 'Active'
    }, {
      id: 3,
      CategoryName: 'Devops',
      CategoryDescription: 'Test fdlgjldfhghdfghdfghdflhg',
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



