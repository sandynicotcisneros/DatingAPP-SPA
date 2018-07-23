import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { AuthService } from '../services/auth.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  model: any = {};

  // Values passed from the parent component
  // @Input() valuesFromHome: any;

  // for passing data to the parent
  @Output() cancelRegister =  new EventEmitter();

  constructor(private authService: AuthService) { }

  ngOnInit() {
  }

  register() {
    this.authService.register(this.model).subscribe(() => {
      console.log('registration ok');
    }, error => {
      console.log('Error registration:', error);
    });
  }

  cancel() {
    this.cancelRegister.emit(false);
    console.log('canceled');
  }

}
