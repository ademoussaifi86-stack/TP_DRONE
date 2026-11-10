
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';

import { Drone } from '../model/drone.model';
import { DroneService } from '../services/drone';
import { TypeDrone } from '../model/type.model';

@Component({
  selector: 'app-update-drone',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './update-drone.html',
  styleUrl: './update-drone.css'
})
export class UpdateDroneComponent {

  drone!: Drone;

  types!: TypeDrone[];
  updatedNomType!: string;

  constructor(
    private droneService: DroneService,
    private route: ActivatedRoute,
    private router: Router
  ) {

    // Récupérer l'identifiant depuis l'URL
    const id = Number(this.route.snapshot.paramMap.get('id'));

    // Chercher le drone correspondant
    const droneTrouve = this.droneService.chercherDrone(id);

    if (droneTrouve) {
      this.drone = { ...droneTrouve };

      // Récupérer les types disponibles
      this.types = this.droneService.listeTypes();

      // Récupérer le type actuel du drone
      this.updatedNomType = this.drone.type?.nomType ?? 'Quadricoptère';

    } else {
      alert('Drone introuvable !');
      this.router.navigate(['/drones']);
    }
  }

  // Modifier le drone
  updateDrone(): void {

    const typeTrouve = this.droneService.consulterType(this.updatedNomType);

    if (typeTrouve) {

      this.drone.type = typeTrouve;

      this.droneService.modifierDrone(this.drone);

      this.router.navigate(['/drones']);

    } else {
      alert('Type de drone introuvable !');
    }
  }

  // Changer la date
  changerDate(date: string): void {

    if (date !== '') {
      this.drone.dateCreation = new Date(date);
    }

  }

  // Convertir la date au format YYYY-MM-DD
  datePourFormulaire(): string {

    if (!this.drone.dateCreation) {
      return '';
    }

    const date = new Date(this.drone.dateCreation);

    const annee = date.getFullYear();
    const mois = String(date.getMonth() + 1).padStart(2, '0');
    const jour = String(date.getDate()).padStart(2, '0');

    return `${annee}-${mois}-${jour}`;
  }

}
