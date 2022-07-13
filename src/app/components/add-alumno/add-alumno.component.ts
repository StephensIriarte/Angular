import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
import { FormBuilder } from '@angular/forms'
import { FormGroup, FormControl, Validators } from '@angular/forms'


@Component({
  selector: 'app-add-alumno',
  templateUrl: './add-alumno.component.html',
  styleUrls: ['./add-alumno.component.css']
})
export class AddAlumnoComponent implements OnInit {
  form;
  constructor(private formBuilder: FormBuilder){
    this.form = formBuilder.group({
      firstname: ['', Validators.required],
      lastname: ['', Validators.required],
      edad: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]],

      message: ['', Validators.required],
  
    });
  }

  ngOnInit(): void {
  }

  submit() {
    if (this.form.valid) {
      console.log(this.form.value)
    }
    else{
      alert("Por favor agregar los datos faltantes")
    }
  }

}
