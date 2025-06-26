import { Injectable } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';

@Injectable({
  providedIn: 'root'
})
export class ServiciopticaService {
  public alldatos: any[] = [];
  public consulta: number=0

  constructor(private translate: TranslateService) { 
     this.translate.setDefaultLang('es');
   
    this.translate.use('es');
  }

  obDatos():  any []{
    return this.alldatos;
    
  }

  obConsulta(){
    return this.consulta
    
  }
}
