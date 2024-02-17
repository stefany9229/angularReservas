import { Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { User } from 'src/app/models/user.model';

@Component({
  selector: 'app-banner',
  templateUrl: './banner.component.html',
  styleUrls: ['./banner.component.css']
})
export class BannerComponent implements OnInit{

  constructor(private router: Router) {}

  ngOnInit(): void {
    this.imprimirusuario()
  }
  @Input()usuario?:User;


  
  imprimirusuario(){
    console.log(this.usuario);
  }

  
  logout() {
    localStorage.removeItem('user');
    localStorage.removeItem('token') // Elimina el usuario del localStorage
    this.router.navigate(['./']); // Redirige al usuario a la ruta raíz
  }

}
