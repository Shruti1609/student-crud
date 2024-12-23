import { HttpClient } from '@angular/common/http';
import { Injectable, inject } from '@angular/core';
import Student from '../types/student';

@Injectable({
  providedIn: 'root'
})
export class StudentService {
  apiUrl = "http://localhost:3000";
  httpClient = inject(HttpClient);
  constructor() { }

  getStudents(){
    return this.httpClient.get<Student[]>(this.apiUrl+'/students');
  }
  addStudent(model:Student){
    return this.httpClient.post(this.apiUrl+'/students', model);
  }
  getStudent(id:string){
    return this.httpClient.get<Student>(this.apiUrl+'/students/' + id);
  }
  updateStudent(id:string, model:Student){
    return this.httpClient.put(this.apiUrl+'/students/' + id, model)
  }
  deleteStudent(id:string){
    return this.httpClient.delete(this.apiUrl+'/students/' + id);
  }
}
