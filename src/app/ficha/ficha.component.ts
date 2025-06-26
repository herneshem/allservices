import { Component, Input } from '@angular/core';
import { ServiciopticaService } from '../servicioptica.service';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { ResultadosComponent } from '../resultados/resultados.component';


@Component({
  selector: 'app-ficha',
  standalone: true,
  imports: [CommonModule, FormsModule, ResultadosComponent],
  templateUrl: './ficha.component.html',
  styleUrl: './ficha.component.less'
})
export class FichaComponent {
   @Input() nombre:string="";
    @Input() consulta:number=0;
    @Input() fecha:string="";
  datos:string="";
  datonombre:any []=[];
  datoconsulta:number=0;

  constructor(public datosoptica:ServiciopticaService){

  }


    verFicha= ()=> {

      this.datonombre = this.datosoptica.obDatos();
      console.log("es" , this.datonombre)

      this.datoconsulta = this.datosoptica.obConsulta();
      console.log("es" , this.datoconsulta)
  
      
    }
   
  
}
