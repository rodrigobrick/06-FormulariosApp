import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-basicos',
  templateUrl: './basicos.component.html',
  styles: [
  ]
})
export class BasicosComponent implements OnInit{

  miForm: FormGroup = this.fb.group({
    nombre: [ '', [Validators.required, Validators.minLength(3)] ],
    precio: [  , [Validators.min(0), Validators.required]],
    existencias: [ , [Validators.min(0), Validators.required]]
  })

  constructor( private fb: FormBuilder) { }

  ngOnInit(): void {
      this.miForm.reset()
  }

  campoValido(campo: string){
    return this.miForm.controls?.[campo]?.errors &&
           this.miForm.controls?.[campo]?.touched
  }

  guardar(){
    
    if(this.miForm.invalid){
      this.miForm.markAllAsTouched();
      return
    }
    console.log(this.miForm.value)

    this.miForm.reset()
  }
}
