import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { UserServiceService } from '../service/user-service.service';
import { User } from '../model/user';

@Component({
  selector: 'grg-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  ngOnInit(){
  }
  user: User;

  constructor(private router: Router, private route: ActivatedRoute, private userService: UserServiceService) { }

  onSubmit() {
    this.router.navigate(['/acceuil']);
  }


}
