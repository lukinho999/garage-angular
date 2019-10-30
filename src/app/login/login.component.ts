import { Component} from '@angular/core';
import { Router} from '@angular/router';


@Component({
  selector: 'grg-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent{

  constructor(private router: Router) { }

  onSubmit() {
    this.router.navigate(['/acceuil']);
  }


}
