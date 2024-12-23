import { Component, inject } from '@angular/core';
import Student from '../types/student';
import { StudentService } from '../services/student.service';
import { MatButton, MatButtonModule } from '@angular/material/button';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-students',
  imports: [MatButtonModule, RouterLink],
  templateUrl: './students.component.html',
  styleUrl: './students.component.scss'
})
export class StudentsComponent {
  students: Student[] = [];
  studentService = inject(StudentService);
  ngOnInit() {
    this.studentService.getStudents().subscribe(result => {
      this.students = result;
      console.log(this.students);
    })

  }
  delete(id: string) {
    const ok = confirm("Are you sure you want to delete user?");
    if (ok) {
      this.studentService.deleteStudent(id).subscribe((result) => {
        alert("User deleted succesfully");
        this.students = this.students.filter((u) => u._id != id);
      })

    }
  }

}
