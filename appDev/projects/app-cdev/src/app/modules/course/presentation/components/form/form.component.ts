import { Component, Inject, signal, ViewEncapsulation } from '@angular/core';
import {
  FormControl,
  FormGroup,
  ReactiveFormsModule,
  Validators,
} from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import {
  MAT_DIALOG_DATA,
  MatDialogModule,
  MatDialogRef,
} from '@angular/material/dialog';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatIconModule } from '@angular/material/icon';
import { MatInputModule } from '@angular/material/input';
import { MatSelectModule } from '@angular/material/select';
import { MatToolbarModule } from '@angular/material/toolbar';

@Component({
  selector: 'cdev-form',
  standalone: true,
  imports: [
    MatToolbarModule,
    MatDialogModule,
    MatFormFieldModule,
    MatInputModule,
    MatIconModule,
    MatButtonModule,
    ReactiveFormsModule,
    MatSelectModule,
  ],
  templateUrl: './form.component.html',
  styleUrl: './form.component.css',
  encapsulation: ViewEncapsulation.None,
})
export class FormComponent {
  title = signal<string>('');
  fg!: FormGroup;

  constructor(
    @Inject(MAT_DIALOG_DATA) private readonly data: any,
    private readonly reference: MatDialogRef<FormComponent>
  ) {
    this.title.set(data ? 'EDITAR' : 'CREAR');
    this.createForm();
  }

  createForm() {
    this.fg = new FormGroup({
      courseId: new FormControl(this.data?.courseId),
      title: new FormControl(this.data?.title, Validators.required),
      status: new FormControl(this.data?.status),
    });

    if (!this.data) {
      this.fg.get('status')?.disable();
    }
  }

  save() {
    const values = this.fg.value;
    this.reference.close(values);
  }
}
