import { AfterViewInit, Component, ElementRef, Input, OnInit, ViewChild  } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { FichaComponent } from "./ficha/ficha.component";
import { DatosComponent } from "./datos/datos.component";
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { TranslateService, TranslateModule } from '@ngx-translate/core';
@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, FichaComponent, DatosComponent, FormsModule, CommonModule, TranslateModule ],
  templateUrl: './app.component.html',
  styleUrl: '../styles.less'
})
export class AppComponent implements OnInit, AfterViewInit {
  title = 'servicios';
  datonombre= "";
  datoconsulta=0
  mostrarFicha:boolean=false

  @ViewChild('aloneN', { static: true }) aloneN!: ElementRef<HTMLInputElement>;
   @ViewChild('horaActual') horaActualRef!: ElementRef<HTMLSpanElement>;
  ngOnInit() {
    this.aloneN.nativeElement.addEventListener("input", function (e) {
      this.value = this.value.replace(/\D/g, ""); 
    });
  }
    

  

   verFicha = () => {
    this.mostrarFicha=true;
    console.log("Ficha vista");
  };
  
  

  //Hora

    ngAfterViewInit(): void {
    this.actualizarHora();
    setInterval(() => this.actualizarHora(), 1000);
  }
   actualizarHora(): void {
    const now = new Date();
    const actual = now.toLocaleTimeString([], { hour12: false }); // 24h formato
    this.horaActualRef.nativeElement.textContent = actual;
  }
  


  constructor(private translate: TranslateService) {
    this.translate.addLangs(['en', 'es']);
    this.translate.setDefaultLang('en');

    const browserLang = this.translate.getBrowserLang();
    this.translate.use(browserLang?.match(/en|es/) ? browserLang : 'en');
  }

  cambiarIdioma(idioma: string) {
    this.translate.use(idioma);
  }
}
