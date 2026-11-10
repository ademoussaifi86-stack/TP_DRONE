import { Pipe, PipeTransform } from '@angular/core';
import { Drone } from './model/drone.model';

@Pipe({
  name: 'searchFilter',
  standalone: true
})
export class SearchFilterPipe implements PipeTransform {
  transform(drones: Drone[], texte: string): Drone[] {
    if (!drones) {
      return [];
    }

    const recherche = (texte || '').toLowerCase().trim();

    if (!recherche) {
      return drones;
    }

   return drones.filter(drone =>
  (drone.nomDrone || '').toLowerCase().includes(recherche)
);
  }
}