import { Component } from '@angular/core';
import { Observable } from 'rxjs';
import { Option } from './interfaces/option';
import { DataService } from './services/data.service';
@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss'],
})
export class AppComponent {
  appPages: Observable<Option[]>;
  constructor(private dataService: DataService) {
  }
  ngOnInit(){
    //Called after the constructor, initializing input properties, and the first call to ngOnChanges.
    //Add 'implements OnInit' to the class.
    this.appPages = this.dataService.getOptions();
  }
}
