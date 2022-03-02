import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { EmailValidatorService } from 'src/app/shared/validator/email-validator.service';
import { noPuedeSer } from 'src/app/shared/validator/validaciones';
import { ValidatorService } from 'src/app/shared/validator/validator.service';

@Component({
  selector: 'app-registro',
  templateUrl: './registro.component.html',
  styles: [
  ]
})
export class RegistroComponent implements OnInit {

  miForm: FormGroup = this.fb.group({
    nombre: ['', [Validators.required, Validators.pattern(this.validatorService.nombreApellidoPattern)] ],
    email: ['' , [Validators.required, Validators.pattern(this.validatorService.emailPattern)], [this.emailValidator]],
    username: ['', [Validators.required, noPuedeSer] ],
    password: ['', [Validators.required, Validators.minLength(6)] ],
    password2:  ['', [Validators.required] ],
  },{
    validators: [ this.validatorService.camposIguales('password','password2') ]
  })

  get emailErrorMsg():string{

    const errors = this.miForm.get('email')?.errors;

    if( errors?.['required'] ){
      return 'Email Obligatorio'
    }
    else if ( errors?.['pattern'] ){
      return 'El texto no tiene formato de correo electronico'
    }
    else if ( errors?.['emailTomado']){
      return 'El correo ya esta en uso'
    }

    return ''
  }

  constructor( private fb: FormBuilder,
               private validatorService: ValidatorService,
               private emailValidator: EmailValidatorService) { }

  ngOnInit(): void {
    this.miForm.reset({
      nombre: 'rodrigo ibanez',
      email: 'test1@test.com',
      username: 'rodrigo_jejeje',
      password: '123456',
      password2: '123456'
    })
  }

  campoValido( campo: string){
    return this.miForm.get(campo)?.invalid &&
           this.miForm.get(campo)?.touched
  }


  submitForm(){
    console.log(this.miForm.value)

    this.miForm.markAllAsTouched()
  }

}
