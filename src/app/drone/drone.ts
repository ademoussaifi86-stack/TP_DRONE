
import { Component } from '@angular/core';
import { DatePipe } from '@angular/common';
import { Drone } from '../model/drone.model';
import { DroneService } from '../services/drone';
import { RouterLink } from '@angular/router';
import { Auth } from '../services/auth';

@Component({
  selector: 'app-drone',
  standalone: true,
  imports: [DatePipe, RouterLink],
  templateUrl: './drone.html',
  styleUrl: './drone.css'
})
export class DroneComponent {

  drones: Drone[];

  constructor(
    private droneService: DroneService,
    public authService: Auth
  ) {
    this.drones = this.droneService.listeDrones();
  }

  supprimerDrone(id: number) {

    if (confirm('Voulez-vous vraiment supprimer ce drone ?')) {

      this.droneService.supprimerDrone(id);

      this.drones = this.droneService.listeDrones();
    }
  }
}
