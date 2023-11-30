import { Component } from '@angular/core';
import { SignalService } from '../../../core/services/signal.service';
import { FormControl, FormsModule, ReactiveFormsModule } from '@angular/forms';

@Component({
  selector: 'app-child1',
  standalone: true,
  imports: [ReactiveFormsModule],
  templateUrl: './child1.component.html',
  styleUrl: './child1.component.scss'
})
export class Child1Component {
  inputName = new FormControl('');
submit() {
  let userName = this.inputName.value;
  if(userName){
    this.service.updateProfile(userName);
  } 
}

  userProfileSignal = this.service.userProfileSignal();

  constructor(public service : SignalService) {}
}
