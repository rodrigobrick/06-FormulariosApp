import { Component, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';

interface Persona {
  nombre: string,
  favoritos: Favorito[]
}

interface Favorito {
  id: number;
  nombre: string
}

@Component({
  selector: 'app-dinamicos',
  templateUrl: './dinamicos.component.html',
  styles: [
  ]
})
export class DinamicosComponent {

  @ViewChild('miForm') miForm!: NgForm;

  nuevoJuego: string = '';

  persona: Persona = {
    nombre: 'rodrigo',
    favoritos: [
      {id:1 , nombre: 'jugar'},
      {id:2 , nombre: 'apex'}
    ]
  }

  guardar(){
    console.log("formulario posteado")
  }

  eliminar(index: number){
    //this.persona.favoritos.splice(index,1)
    this.persona.favoritos.pop()
  }

  agregarJuego() {
    const nuevoFavorito: Favorito = {
      id: this.persona.favoritos.length + 1,
      nombre: this.nuevoJuego
    }
    this.persona.favoritos.push({...nuevoFavorito})
    this.nuevoJuego = ''
  }

  nombreValido():boolean {
    return this.miForm?.controls['nombre']?.invalid &&
           this.miForm?.controls['nombre']?.touched
  }

}
