import { Component, OnInit, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-basicos',
  templateUrl: './basicos.component.html',
  styles: [
  ]
})
export class BasicosComponent implements OnInit {

  @ViewChild('miForm') miForm!: NgForm;

  initialForm = {
    producto: '',
    precio: 0,
    existencias: 0
  }
  
  constructor() { }

  ngOnInit(): void {
  }

  guardar(){
    console.log("Posteo correcto")
      
    this.miForm.resetForm({
      precio: 0,
      existencias: 0
    });
  }

  nombreValido():boolean {
    return this.miForm?.controls['producto']?.invalid &&
           this.miForm?.controls['producto']?.touched
  }

  precioValido():boolean {
    if(this.miForm?.controls['precio']?.value < 0 &&
       this.miForm?.controls['precio']?.touched){
      return true
    }
    else
      return false
  }
}
