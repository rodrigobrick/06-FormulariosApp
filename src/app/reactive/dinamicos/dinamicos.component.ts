import { Component} from '@angular/core';
import { FormArray, FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-dinamicos',
  templateUrl: './dinamicos.component.html',
  styles: [
  ]
})
export class DinamicosComponent {

  miForm: FormGroup = this.fb.group({
    nombre: ['', [Validators.required, Validators.minLength(3)]],
    favoritos: this.fb.array([
      ['Juegar'],
      ['Apex']
    ], Validators.required)
  })

  nuevoFavorito: FormControl = this.fb.control('', Validators.required)

  get favoritosARR(){
    return this.miForm.get('favoritos') as FormArray
  }
  constructor( private fb: FormBuilder ) { }

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

  agregarFavorito(){
    if(this.nuevoFavorito.invalid){ return; }

    this.favoritosARR.push( this.fb.control(this.nuevoFavorito.value, Validators.required ) );

    this.nuevoFavorito.reset()
  }

  borrar(index: number){
    this.favoritosARR.removeAt(index)
  }

}
