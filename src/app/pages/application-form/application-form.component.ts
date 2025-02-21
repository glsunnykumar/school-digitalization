import { Component } from '@angular/core';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatSelectModule } from '@angular/material/select';
import { MatButtonModule } from '@angular/material/button';
import { CommonModule, NgIf } from '@angular/common';
import { MatDialogRef } from '@angular/material/dialog';


@Component({
  selector: 'app-application-form',
  imports: [MatCheckboxModule, MatFormFieldModule, MatInputModule, 
    MatSelectModule,
     MatButtonModule, 
     ReactiveFormsModule,
    CommonModule,
    ],
  templateUrl: './application-form.component.html',
  styleUrl: './application-form.component.scss'
})
export class ApplicationFormComponent {

  availableCourses = ['6th To 10th', 'Arts', 'Non Medical', 'Commerce'];
  applicationForm: FormGroup;

  constructor(private dialogRef: MatDialogRef<ApplicationFormComponent> ,
    private fb: FormBuilder
  ) {
    this.applicationForm = this.fb.group({
      fullName: ['', [Validators.required, Validators.minLength(3)]],
      email: ['', [Validators.required, Validators.email]],
      phone: ['', [Validators.required, Validators.pattern('^[0-9]{10}$')]],
      course: ['', Validators.required],
      english: [false],
      hindi: [false],
      other: [false],
      address: ['', [Validators.required, Validators.minLength(10)]]
    });
  }

  onSubmit() {
    if (this.applicationForm.valid) {
      console.log('Form Submitted:', this.applicationForm.value);
      alert('Application Submitted Successfully!');
      this.applicationForm.reset();
    }
  }

  onCancel() {
    this.dialogRef.close();
  }

}
