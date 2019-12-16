import { Component, Input, ChangeDetectionStrategy } from '@angular/core';


@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: [ './app.component.css' ],
  
})
export class AppComponent  {
  name = 'Angular 5';
biblCits=['1','2','2','3','4','5']
  count = 0;
  timerCount = 0;
  timer: any;

  add() {
    this.count ++;
  }

  ngOnInit() {
    this.timer = setInterval(() => {
      this.timerCount ++;
      console.log('Parent timer: ', this.timerCount);
    }, 1000);
  }
  ngOnDestroy() {
    clearInterval(this.timer);
  }

}
