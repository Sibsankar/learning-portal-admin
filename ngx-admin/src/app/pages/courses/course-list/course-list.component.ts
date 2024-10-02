import { Component, inject } from '@angular/core';
import { LocalDataSource } from 'ng2-smart-table';
import { SmartTableData } from '../../../@core/data/smart-table';
import { CourseCategoriesService } from '../../../services/course-categories.service';
import { Router, ActivatedRoute } from '@angular/router';
@Component({
  selector: 'ngx-course-list',
  templateUrl: './course-list.component.html',
  styleUrls: ['./course-list.component.scss']
})




export class CourseListComponent {
public btnstatus = 'primary';

  // settings = {
  //   add: {
  //     addButtonContent: '<i class="nb-plus"></i>',
  //     createButtonContent: '<i class="nb-checkmark"></i>',
  //     cancelButtonContent: '<i class="nb-close"></i>',
  //   },
  //   edit: {
  //     editButtonContent: '<a routerLink="/home routerLinkActive="active"><i class="nb-edit"></i></a>',
  //     saveButtonContent: '<i class="nb-checkmark"></i>',
  //     cancelButtonContent: '<i class="nb-close"></i>',
  //   },
  //   delete: {
  //     deleteButtonContent: '<i class="nb-trash"></i>',
  //     confirmDelete: true,
  //   },
  //   columns: {
  //     id: {
  //       title: 'ID',
  //       type: 'number',
  //     },
  //     course_title_name: {
  //       title: 'Course Name',
  //       type: 'string',
  //     },
  //     lastName: {
  //       title: 'Category Name',
  //       type: 'string',
  //     },
  //     students_enrolled: {
  //       title: 'Students Enrolled',
  //       type: 'string',
  //     },
  //     email: {
  //       title: 'Auther',
  //       type: 'string',
  //     }
  //   },
  // };


  settings = {
    actions: {
      add: false,
      position: 'right',
      
      },
      
    mode: 'external',
    
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
      id: {
        title: 'ID',
        type: 'number',
      },
      course_title_name: {
        title: 'Course Name',
        type: 'string',
      },
      lastName: {
        title: 'Category Name',
        type: 'string',
      },
      students_enrolled: {
        title: 'Students Enrolled',
        type: 'string',
      },
      email: {
        title: 'Auther',
        type: 'string',
      }
    },
   
    };


  source: LocalDataSource = new LocalDataSource();

  // constructor(private service: SmartTableData) {
  //   const data = this.service.getData();
  //   this.source.load(data);
  // }


  //public course_category_id=7;
  private route = inject(ActivatedRoute);
  course_category_id!: string;

  constructor(private courseCatergoryService: CourseCategoriesService, private router: Router) {
    //const data = this.service.getData();
    this.route.paramMap.subscribe((params) => {
      this.course_category_id = params.get('course_category_id')!;
      console.log('course_category_id------------',this.course_category_id);
    });
    this.getCourse();
    
  }


  getCourse(){
    this.courseCatergoryService.getCourses(this.course_category_id).subscribe((res) => {
      this.source.load(res);
    });
  }
  onEdit(event){
    console.log(event)
    this.router.navigateByUrl('/pages/courses/add-course/'+event.data.course_details_id);
    }

    onView(event){
      console.log(event)
      this.router.navigateByUrl('/pages/courses/add-course/'+event.data.course_details_id);
      }
    // onDelete(event){
    // this.router.navigateByUrl('/url');
    // }

  onDeleteConfirm(event): void {
    //console.log("hvhjjhvjhvjhvjh");
    if (window.confirm('Are you sure you want to delete?')) {
      event.confirm.resolve();
    } else {
      event.confirm.reject();
    }
  }
}

