import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-databinding',
  templateUrl: './databinding.component.html',
  styleUrls: ['./databinding.component.scss']
})
export class DatabindingComponent implements OnInit {
  valorAtual: string = '';
  valorSalvo: string ='';
  
  botaoClicado(){
    alert('Botão clicado');
    console.log('botão clicado')
  }
  onKeyUp(evento: KeyboardEvent){
   console.log((<HTMLInputElement>evento.target).value);
   this.valorAtual = (<HTMLInputElement>evento.target).value;
  }
  salvarValor(valor: string){
    this.valorSalvo = valor;

  }
  constructor() { }

  ngOnInit(): void {
  }

}
