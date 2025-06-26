import { Component } from '@angular/core';
import { ServiciopticaService } from '../servicioptica.service';
import { TranslateModule } from '@ngx-translate/core';

@Component({
  selector: 'app-resultados',
  standalone: true,
  imports: [TranslateModule],
  templateUrl: './resultados.component.html',
  styleUrl: './resultados.component.less'
})
export class ResultadosComponent {

  constructor(public datosoptica:ServiciopticaService){
  
    }
}
