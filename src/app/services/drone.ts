
import { Injectable } from '@angular/core';
import { Drone } from '../model/drone.model';
import { TypeDrone } from '../model/type.model';

@Injectable({
  providedIn: 'root'
})
export class DroneService {

  // Liste des catégories
  types: TypeDrone[] = [
    { idType: 1, nomType: 'Quadricoptère' },
    { idType: 2, nomType: 'Hexacoptère' },
    { idType: 3, nomType: 'Octocoptère' },
    { idType: 4, nomType: 'Aile fixe' },
    { idType: 5, nomType: 'FPV Racing' },
    { idType: 6, nomType: 'Agricole' },
    { idType: 7, nomType: 'Photographie' },
    { idType: 8, nomType: 'Industriel' }
  ];

  drones: Drone[];

  constructor() {
    this.drones = [
      {
        idDrone: 1,
        nomDrone: 'DJI Mavic 3',
        marqueDrone: 'DJI',
        prixDrone: 9000,
        dateCreation: new Date('2020-01-14'),
        type: this.types[6]
      },
      {
        idDrone: 2,
        nomDrone: 'Parrot Anafi',
        marqueDrone: 'Parrot',
        prixDrone: 3500,
        dateCreation: new Date('2021-02-20'),
        type: this.types[0]
      },
      {
        idDrone: 3,
        nomDrone: 'DJI Agras T40',
        marqueDrone: 'DJI',
        prixDrone: 45000,
        dateCreation: new Date('2022-03-10'),
        type: this.types[5]
      }
    ];
  }

  // CRUD des drones

  listeDrones(): Drone[] {
    return this.drones;
  }

  ajouterDrone(drone: Drone): void {
    this.drones.push(drone);
  }

  supprimerDrone(id: number): void {
    this.drones = this.drones.filter(
      drone => drone.idDrone !== id
    );
  }

  chercherDrone(id: number): Drone | undefined {
    return this.drones.find(
      drone => drone.idDrone === id
    );
  }

  modifierDrone(droneModifie: Drone): void {
    const index = this.drones.findIndex(
      drone => drone.idDrone === droneModifie.idDrone
    );

    if (index !== -1) {
      this.drones[index] = droneModifie;
    }
  }

  // CRUD des catégories

  listeTypes(): TypeDrone[] {
    return this.types;
  }

  consulterType(idOuNom: number | string): TypeDrone | undefined {

  if (typeof idOuNom === 'number') {
    return this.types.find(
      type => type.idType === idOuNom
    );
  }

  return this.types.find(
    type => type.nomType === idOuNom
  );
}

  ajouterType(type: TypeDrone): boolean {

  const nom = type.nomType.trim();

  if (nom === '') {
    return false;
  }

  const existe = this.types.some(
    t => t.nomType.toLowerCase() === nom.toLowerCase()
  );

  if (existe) {
    return false;
  }

  // Générer automatiquement le nouvel ID
  const nouvelId = this.types.length > 0
    ? Math.max(...this.types.map(t => t.idType)) + 1
    : 1;

  // Ajouter la catégorie avec son nouvel ID
  this.types.push({
    idType: nouvelId,
    nomType: nom
  });

  return true;
}

  modifierType(id: number, typeModifie: TypeDrone): boolean {

  console.log('ID reçu :', id);
  console.log('Objet reçu :', typeModifie);
  console.log('Nom reçu :', typeModifie.nomType);

  const nouveauNom = typeModifie.nomType?.trim();

  if (!nouveauNom) {
    console.log('PROBLEME : nom vide');
    return false;
  }

  const type = this.types.find(t => t.idType === Number(id));

  if (!type) {
    console.log('PROBLEME : ID introuvable');
    return false;
  }
  type.nomType = nouveauNom;

  console.log('SUCCES : catégorie modifiée', type);

  return true;
}
  supprimerType(id: number): boolean {
    const utilise = this.drones.some(
      drone => drone.type?.idType === id
    );

    if (utilise) {
      return false;
    }

    const index = this.types.findIndex(
      type => type.idType === id
    );

    if (index === -1) {
      return false;
    }

    this.types.splice(index, 1);
    return true;
  }

  // Recherche des drones par catégorie

  listeCategorie(): TypeDrone[] {
    return this.types;
  }

 rechercherParType(idOuNom: number | string): Drone[] {

  return this.listeDrones().filter(drone => {

    if (typeof idOuNom === 'number') {
      return drone.type?.idType === idOuNom;
    }

    return drone.type?.nomType === idOuNom;

  });

}
prochainIdType(): number {
  return this.types.length > 0
    ? Math.max(...this.types.map(t => t.idType)) + 1
    : 1;
}
}
