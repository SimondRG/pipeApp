import { Component } from '@angular/core';

@Component({
  selector: 'app-basics-page',
  templateUrl: './basics-page.component.html',
  styleUrl: './basics-page.component.css'
})
export class BasicsPageComponent {

  public nameLower: string = 'simon';
  public nameUpper: string = 'SIMON';
  public fullName:  string = 'sImOn';

  public customDate: Date = new Date();

}
