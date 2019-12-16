import { Component, Input, ChangeDetectionStrategy } from '@angular/core';

@Component({
  selector: 'child-component',
  templateUrl: './child.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class ChildComponent  {
  @Input() parentCount: number;
  @Input() parentTimerCount: number;

  timer;
  timerCount = 0;

  ngOnInit() {
    this.timer = setInterval(() => {
      this.timerCount ++;
      console.log('Child timer: ', this.timerCount);
    }, 1000);
  }
  ngOnDestroy() {
    clearInterval(this.timer);
  }

  add() {
    
  }
}
