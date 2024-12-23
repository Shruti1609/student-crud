import { Component, inject } from '@angular/core';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { MatInputModule } from '@angular/material/input';
import Student from '../../types/student';
import { StudentService } from '../../services/student.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-student-form',
  imports: [MatInputModule, MatButtonModule, ReactiveFormsModule],
  templateUrl: './student-form.component.html',
  styleUrl: './student-form.component.scss'
})
export class StudentFormComponent {
  formBuilder = inject(FormBuilder);
  studentForm: FormGroup = this.formBuilder.group({
    name: ['', [Validators.required]],
    email: ['', [Validators.required, Validators.email]],
    roll: ['', [Validators.required]],
    mobile: ['', [Validators.required]],
  });

  studentService = inject(StudentService)
  router = inject(Router);
  route = inject(ActivatedRoute);
  editStudentId!: string;
  ngOnInit() {
    this.editStudentId = this.route.snapshot.params["id"];
    if (this.editStudentId) {
      this.studentService.getStudent(this.editStudentId).subscribe(result => {
        this.studentForm.patchValue(result);
      })
    }
  }

  addStudent() {
    if (this.studentForm.invalid) {
      alert('Please provide all the fields with valid data');
      return;
    }
    const model: Student = this.studentForm.value;
    this.studentService.addStudent(model).subscribe(result => {
      alert("User added successfully");
      this.router.navigateByUrl("/");
    })
  }
  updateStudent() {
    if (this.studentForm.invalid) {
      alert('Please provide all the fields with valid data');
      return;
    }
    const model: Student = this.studentForm.value;
    this.studentService.updateStudent(this.editStudentId, model).subscribe(result => {
      alert("User added successfully");
      this.router.navigateByUrl("/");

    })
  }
}
