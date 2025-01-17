import { Component, Input } from '@angular/core';
import { FormsModule } from '@angular/forms';  

@Component({
  selector: 'app-datos',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './datos.component.html',
  styleUrls: ['./datos.component.less']  
})
export class DatosComponent {
  @Input() nombre:string="";
  @Input() consulta:string="";
  @Input() fecha:string="";
}

