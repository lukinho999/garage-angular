import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'grg-acceuil',
  templateUrl: './acceuil.component.html',
  styleUrls: ['./acceuil.component.css']
})
export class AcceuilComponent implements OnInit {

  constructor(private router: Router) { }

  ngOnInit() {
  }
  gestionStockMeca(){
    this.router.navigate(['/acceuil','stock']); 
  }
  ficheDeTravail(){
    this.router.navigate(['/acceuil','fiche']);
  }

}
