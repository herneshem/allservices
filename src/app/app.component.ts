import { Component, ElementRef, Input, OnInit, ViewChild } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { FichaComponent } from "./ficha/ficha.component";
import { DatosComponent } from "./datos/datos.component";
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, FichaComponent, DatosComponent, FormsModule, CommonModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.less'
})
export class AppComponent implements OnInit {
  title = 'servicios';
  datonombre= "";
  datoconsulta=0
  mostrarFicha:boolean=false

  @ViewChild('aloneN', { static: true }) aloneN!: ElementRef<HTMLInputElement>;
  ngOnInit() {
    this.aloneN.nativeElement.addEventListener("input", function (e) {
      this.value = this.value.replace(/\D/g, ""); 
    });
  }
    

  

   verFicha = () => {
    this.mostrarFicha=true;
    console.log("Ficha vista");
  };
  
  
  
}
