import { Component } from '@angular/core';

@Component({
  selector: 'app-basics-page',
  templateUrl: './basics-page.component.html',
})
export class BasicsPageComponent {
  public nameLower: string = 'braian';
  public nameUpper: string = 'FERNANDO';
  public fullName: string = 'BrAIan LOpEz';

  public customDate: Date = new Date();
}
