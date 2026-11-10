import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Drone } from '../model/drone.model';
import { DroneService } from '../services/drone';

@Component({
  selector: 'app-recherche-par-nom',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './recherche-par-nom.html',
  
})
export class RechercheParNomComponent implements OnInit {
  drones: Drone[] = [];
  tousLesDrones: Drone[] = [];

  constructor(private droneService: DroneService) {}

  ngOnInit(): void {
    this.tousLesDrones = this.droneService.listeDrones();
    this.drones = [...this.tousLesDrones];
  }

  onKeyUp(texte: string): void {
    const recherche = texte.trim().toLowerCase();

    this.drones = this.tousLesDrones.filter(drone =>
      (drone.nomDrone ?? '')
        .toLowerCase()
        .includes(recherche)
    );
  }
}