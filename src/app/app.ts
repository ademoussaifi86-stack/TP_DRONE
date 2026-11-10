
import { Component, OnInit } from '@angular/core';
import { Router, RouterLink, RouterOutlet } from '@angular/router';
import { Auth } from './services/auth';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterLink, RouterOutlet],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App implements OnInit {

  menuDronesOuvert = false;
  menuUtilisateurOuvert = false;

  constructor(
    public authService: Auth,
    private router: Router
  ) {}

  // Vérification de LocalStorage au démarrage
  ngOnInit(): void {

    let isloggedin: string | null;
    let loggedUser: string | null;

    isloggedin = localStorage.getItem('isloggedIn');
    loggedUser = localStorage.getItem('loggedUser');

    if (isloggedin != 'true' || !loggedUser) {
      this.router.navigate(['/login']);
    }
    else {
      this.authService.setLoggedUserFromLocalStorage(loggedUser);
    }
  }

  // Ouvrir ou fermer le menu Drones
  toggleDrones(): void {
    this.menuDronesOuvert = !this.menuDronesOuvert;
    this.menuUtilisateurOuvert = false;
  }

  // Ouvrir ou fermer le menu Utilisateur
  toggleUtilisateur(): void {
    this.menuUtilisateurOuvert = !this.menuUtilisateurOuvert;
    this.menuDronesOuvert = false;
  }

  // Fermer les menus
  fermerMenus(): void {
    this.menuDronesOuvert = false;
    this.menuUtilisateurOuvert = false;
  }

  // Déconnexion
  onLogout(): void {
    this.authService.logout();
    this.fermerMenus();
    this.router.navigate(['/login']);
  }

}
