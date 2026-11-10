
import { Component, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Router } from '@angular/router';

import { Drone } from '../model/drone.model';
import { DroneService } from '../services/drone';
import { TypeDrone } from '../model/type.model';

@Component({
  selector: 'app-add-drone',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './add-drone.html',
  styleUrl: './add-drone.css'
})
export class AddDroneComponent implements OnInit {

  drone: Drone = new Drone();

  types!: TypeDrone[];
  newNomType!: string;

  constructor(
    private droneService: DroneService,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.types = this.droneService.listeTypes();
    this.newNomType = 'Quadricoptère';
  }

  ajouterDrone(): void {

    const typeTrouve = this.droneService.consulterType(this.newNomType);

    if (typeTrouve) {

      this.drone.type = typeTrouve;

      this.droneService.ajouterDrone(this.drone);

      this.router.navigate(['/drones']);

    } else {
      alert('Type de drone introuvable !');
    }

  }

}
