import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-switches',
  templateUrl: './switches.component.html',
  styles: [
  ]
})
export class SwitchesComponent implements OnInit {

  miForm: FormGroup = this.fb.group({
    genero: [ 'M', Validators.required ],
    notificaciones: [ true, Validators.required],
    condiciones: [ false, Validators.requiredTrue]
  })

  persona = {
    genero: 'F',
    notificaciones: true
  }

  constructor(private fb: FormBuilder) { }

  ngOnInit(): void {
    this.miForm.reset( {
      ...this.persona,
      condiciones: false
    });
    
    this.miForm.valueChanges.subscribe( form => {
      delete form.condiciones
      this.persona = form
    })

  }

  guardar(){
    const formValue = {...this.miForm.value}
    delete formValue.condiciones

    this.persona = formValue
  }
}

