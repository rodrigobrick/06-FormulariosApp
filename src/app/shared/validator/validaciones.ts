import { FormControl } from "@angular/forms";

export const nombreApellidoPattern: string = '([a-zA-z]+) ([a-zA-z]+)';
export const emailPattern: string = "^[a-z0-9._%+-]+@[a-z0-9.-]+\\.[a-z]{2,4}$";

export const noPuedeSer = (control: FormControl) =>{
    const valor = control.value?.trim().toLowerCase()

    if( valor === 'brick'){
      return {
        noPuede: true
      }
    }
    return null
  }
