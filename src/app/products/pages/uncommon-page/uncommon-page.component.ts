import { Component } from '@angular/core';
import { Observable, interval, tap } from 'rxjs';

@Component({
  selector: 'app-uncommon-page',
  templateUrl: './uncommon-page.component.html',
  styleUrl: './uncommon-page.component.css'
})
export class UncommonPageComponent {

  // i18n Select Pipe
  public name: string = 'Simón';
  public gender: 'male' | 'female' = 'male';
  public invitationMap = {
    male: 'invitarlo',
    female: 'initarla'
  }

  changeCliente(): void {
    if (this.name === 'Simón') {
      this.name = 'Lizeth';
      this.gender = 'female'
    } 
    else{
      this.name = 'Simón';
      this.gender = 'male'
    }
  }

  // i18nPlural Pipe
  public clientes: string[] = ['Blanca', 'Simon', 'Lizeth', 'David', 'Leonardo', 'Laura', 'Valentina'];
  public clientsMap = {
    '=0': 'no tenemos ningún cliente esperando.',
    '=1': 'tenemos un cliente esperando.',
    '=2': 'tenemos 2 esperando.',
    'other': 'tenemos # clientes esperando.',
  }

  deleteClient(): void{
    this.clientes.shift();
  }

  // KeyValues Pipe
  public person = {
    name: 'Simón',
    age: '30',
    address: 'Bogotá, Colombia'
  }

  // Async Pipe

  public myObservableTimer: Observable<number> = interval(2000)
    .pipe(
      tap( value => console.log(value))
    );

    public promiseValue: Promise<string> = new Promise( (resolve, reject) =>{
      setTimeout(() => {
        resolve( 'Tenemos data en la promesa.' );
        console.log( 'Tenemos data en la promesa' );
      }, 3500);
    })

}
