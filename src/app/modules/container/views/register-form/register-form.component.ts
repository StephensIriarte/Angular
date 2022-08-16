import { Component } from '@angular/core';
import {FormGroup, FormControl, Validators, FormArray} from '@angular/forms';
import {Observable} from 'rxjs';
import { Subscription } from 'rxjs';
import { UserService } from 'src/app/services/user.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-register-form',
  templateUrl: './register-form.component.html',
  styleUrls: ['./register-form.component.scss']
})
export class RegisterFormComponent {

  forma: FormGroup;

 

  constructor(private userService: UserService, private activatedRoute: ActivatedRoute) {

    

    this.forma = new FormGroup({

      'nombrecompleto': new FormGroup({
          'nombre': new FormControl(
            '',
            [
              Validators.required,
              Validators.minLength(3)
            ]),
          'apellido': new FormControl(
            '',
          )
        }),
      'correo': new FormControl('',
              [
                Validators.required,
                Validators.pattern("[a-z0-9._%+-]+@[a-z0-9.-]+\\.[a-z]{2,3}$")
              ]),
      'username': new FormControl('', Validators.required),
      'password1': new FormControl('', Validators.required),
    });

   


    this.forma.controls['username'].valueChanges
      .subscribe( data => {
        //console.log(data);
      });

    this.forma.controls['username'].statusChanges
      .subscribe( data => {
        //console.log(data);
      });

  }

  guardarCambios(){
    //console.log(this.forma.value);
    //console.log(this.forma);

    this.userService.addUser(this.forma.value)
  
    if (this.forma.valid) { 
      alert("Datos Ingresados Satisfactoriamente")
      ///console.log(this.forma.value)
      this.forma.reset({
        nombrecompleto: {
          nombre: "",
          apellido: ""
        }, correo: ""
      });
    }
    else{
      alert("Por favor agregar los datos faltantes")
    }
    /*
      forma nº1 de reseterar valores
        this.forma.reset(this.usuario);
    */
    /*
      forma nº2 de reseterar valores, individualmente.
    */
        
    }

}
