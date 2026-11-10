import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Drone } from '../model/drone.model';
import { DroneService } from '../services/drone';
import { SearchFilterPipe } from '../search-filter-pipe';
@Component({
  selector: 'app-recherche-par-nom-pipe',
  standalone: true,
  imports: [CommonModule, FormsModule, SearchFilterPipe],
  templateUrl: './recherche-par-nom-pipe.html',
  
})
export class RechercheParNomPipeComponent implements OnInit {
  drones: Drone[] = [];
  searchTerm = '';

  constructor(private droneService: DroneService) {}

  ngOnInit(): void {
    this.drones = this.droneService.listeDrones();
  }
}