import { Component } from '@angular/core';
import { Subscription, interval } from 'rxjs';

@Component({
  selector: 'app-timer',
  standalone: true,
  imports: [],
  templateUrl: './timer.component.html',
  styleUrl: './timer.component.scss',
})
export class TimerComponent {
  remainingTime: number;
  private timerSubscription!: Subscription;
  constructor() {
    this.remainingTime = 10; // Initial remaining time in seconds
  }
  ngOnInit(): void {
    // this.timerSubscription = interval(1000).subscribe(() => {
    //   if (this.remainingTime > 0) {
    //     this.remainingTime--;
    //   } else {
    //     // Timer has finished, you can add additional logic here
    //     this.timerSubscription.unsubscribe();
    //     alert("STOP")
    //   }
    // });
  }

  ngOnDestroy(): void {
    if (this.timerSubscription) {
      this.timerSubscription.unsubscribe();
    }
  }
}
