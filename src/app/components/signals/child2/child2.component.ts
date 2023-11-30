import { Component, computed, signal } from '@angular/core';
import { SignalService } from '../../../core/services/signal.service';
import { signalMutateFn } from '@angular/core/primitives/signals';

@Component({
  selector: 'app-child2',
  standalone: true,
  imports: [],
  templateUrl: './child2.component.html',
  styleUrl: './child2.component.scss'
})
export class Child2Component {

  userProfileSignal = this.service.userProfileSignal();
  constructor(public service : SignalService) {}

}
