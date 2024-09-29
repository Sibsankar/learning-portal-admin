import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from '../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class CourseCategoriesService {

  baseUrl = environment.baseUrl;

  httpOptions = {
    headers: new HttpHeaders({
      Authorization: '',
      'Access-Control-Allow-Origin': '*',
      'Content-Type': 'application/json'
    })
  };

  constructor(private http: HttpClient) { }

  // public getCategories(): Observable<any> {
  //   return this.http.get<any>(this.baseUrl+'coursecategories?level_type=1&parent_id=0', this.httpOptions);
  // }

  // public addCategory(model: any): Observable<any> {
  //   return this.http.post<any>(this.baseUrl+'coursecategories',model,  this.httpOptions);
  // }


  public getCourses(data: any): Observable<any> {
    return this.http.get<any>(this.baseUrl+'course?course_category_id='+data, this.httpOptions);
  }

  public saveCourses(data: any): Observable<any> {
    return this.http.post<any>(this.baseUrl+'course', data, this.httpOptions);
  }
  
  public getCategories(parent_id?: any): Observable<any> {
    const parentId = ((parent_id) ? '&parent_id='+parent_id : '')
    return this.http.get<any>(this.baseUrl+'coursecategories?level_type=1'+parentId);
  }

  public addCategory(model: any): Observable<any> {
    return this.http.post<any>(this.baseUrl+'coursecategories', model);
  }

  public getSections(course_code: String): Observable<any> {
    return this.http.get<any>(this.baseUrl+'section?course_code='+course_code);
  }

  public addSection(model: any): Observable<any> {
    return this.http.post<any>(this.baseUrl+'section', model);
  }

  public getTopics(course_code: String, section_id: String, topic_id: String): Observable<any> {
    return this.http.get<any>(this.baseUrl+'topic?course_code='+course_code+'/'+section_id+'/'+topic_id);
  }

  public addTopic(model: any): Observable<any> {
    return this.http.post<any>(this.baseUrl+'topic', model);
  }

}