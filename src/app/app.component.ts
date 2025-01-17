import { Component, Input } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { FichaComponent } from "./ficha/ficha.component";
import { DatosComponent } from "./datos/datos.component";
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, FichaComponent, DatosComponent, FormsModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.less'
})
export class AppComponent {
  title = 'servicios';
  datonombre= "";
  datoconsulta=""
}
