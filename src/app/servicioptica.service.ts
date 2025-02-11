import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ServiciopticaService {
  public alldatos: any[] = [];
  public consulta: number=0
  constructor() { }

  obDatos():  any []{
    return this.alldatos;
    
  }

  obConsulta(){
    return this.consulta
    
  }
}
