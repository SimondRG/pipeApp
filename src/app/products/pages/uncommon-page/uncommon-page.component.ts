import { Component } from '@angular/core';

@Component({
  selector: 'app-uncommon-page',
  templateUrl: './uncommon-page.component.html',
  styleUrl: './uncommon-page.component.css'
})
export class UncommonPageComponent {

  // i18n Select
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

  // i18nPlural
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


}
