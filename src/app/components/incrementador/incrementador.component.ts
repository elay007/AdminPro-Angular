import { Component, ElementRef, EventEmitter, Input, OnInit, Output, ViewChild } from '@angular/core';

@Component({
  selector: 'app-incrementador',
  templateUrl: './incrementador.component.html',
  styles: [
  ]
})
export class IncrementadorComponent implements OnInit {

  @ViewChild('txtProgress') txtProgress!: ElementRef;

  @Input('nombre') leyenda: string = 'Leyenda';
  @Input() progreso: number = 50;

  @Output() cambioValor: EventEmitter<number> = new EventEmitter();

  constructor() {
    //console.log('leyenda', this.leyenda);
    // console.log('progreso', this.progreso);

  }

  ngOnInit(): void {
    //console.log('leyenda', this.leyenda);
    //console.log('progreso', this.progreso);

  }

  onChanges(newValue: number){
    console.log(newValue);

    //let elemHtml: any = <HTMLInputElement>document.getElementsByName('progreso')[0];

    if(newValue > 100)
    {
      this.progreso = 100;
    }
    else if(newValue < 0)
    {
      this.progreso = 0;
    }
    else
    {
      this.progreso = newValue;
    }
    
    //elemHtml.value = String(this.progreso);
    this.txtProgress.nativeElement.value = this.progreso;

    this.cambioValor.emit( this.progreso );
  }

  cambiarValor(valor: number){
    if((this.progreso + valor) > 100)
    {
      this.progreso = 100;
    }
    else
    {
      if((this.progreso + valor) < 0)
      {
          this.progreso = 0;
      }
      else
      {
        this.progreso = this.progreso + valor;
      }
    }

    this.cambioValor.emit( this.progreso );

    this.txtProgress.nativeElement.focus();
  }
}
