import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Drone } from '../model/drone.model';
import { TypeDrone } from '../model/type.model';
import { DroneService } from '../services/drone';

@Component({
  selector: 'app-recherche-par-categorie',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './recherche-par-categorie.html',

})
export class RechercheParCategorieComponent implements OnInit {
  drones: Drone[] = [];
  categories: TypeDrone[] = [];
  nomCategorieSelectionnee = '';

  constructor(private droneService: DroneService) {}

  ngOnInit(): void {
    this.categories = this.droneService.listeTypes();
  }

  onChange(): void {
    this.drones = this.droneService.rechercherParType(
      this.nomCategorieSelectionnee
    );
  }
}