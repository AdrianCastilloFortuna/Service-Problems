import { Component } from '@angular/core';
import { AppService } from './app.service';
@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: [ './app.component.css' ]
})
export class AppComponent  {
  name = 'Angular';
  url="https://swapi.co/api/";
  constructor(private CallBack: AppService){
this.CallBack.backAcess(this.url).subscribe(data => {console.log('VALUE',data)});

  }
}
