import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'n-esimo';

  valorSerie = '';
  valorArraySerie: string[] = [];
  nEsimoValor: number = 0;
  nEvalorFinal: string = '';
  multiplosTresFinal: string[] = [];
  numerosPrimosFinal: string[] = [];
  bandera: boolean = true;
  

  //Método que obtiene el n-ésimo de cada serie
  nEsimo(){
    this.valorArraySerie = this.valorSerie.split(' ');
    //this.nEvalorFinal = this.valorArraySerie[1];
    if(this.valorArraySerie[0] > this.valorArraySerie[1]){
      //el nesimo será negativo
      this.nEsimoValor = parseInt(this.valorArraySerie[0]) - parseInt(this.valorArraySerie[1]);
      this.nEvalorFinal = this.nEsimoValor.toString();
      //this.nEvalorFinal = this.valorArraySerie[1];
      this.multiplosTres();
      this.numerosPrimos();
    }else{
      this.nEsimoValor = parseInt(this.valorArraySerie[1]) - parseInt(this.valorArraySerie[0]);
      this.nEvalorFinal = this.nEsimoValor.toString();
      this.multiplosTres();
      this.numerosPrimos();
    }
  }

  numerosPrimos(){
    this.valorArraySerie = this.valorSerie.split(' ');
    let result: string[] = [];
    bandera: true
    for(let i =0; i < this.valorArraySerie.length; i++){
      for(let j=2; j < parseInt(this.valorArraySerie[i])/2; j++){
       
        if(parseInt(this.valorArraySerie[i]) % j === 0){
          this.bandera = false;
          //No es número primo
        }else{
        } 
      }
      if(this.bandera){
        result.push(this.valorArraySerie[i]);
      }
    }
    this.numerosPrimosFinal = result;
  }

  // Método que devuelve true si sus parametros son multiplos.
  esMultiplo(valor: number, multiplo: number){ 
    const resto = valor % multiplo;
    if(resto==0)  return true;
    else  return false;
  }

  multiplosTres(){
    this.valorArraySerie = this.valorSerie.split(' ');
    let result: string[] = [];

    for (let i=0; i<this.valorArraySerie.length; i++){
      if(this.esMultiplo(parseInt(this.valorArraySerie[i]), 3)){
        result.push(this.valorArraySerie[i]);
      } 
    }
  this.multiplosTresFinal = result;
  }
}
