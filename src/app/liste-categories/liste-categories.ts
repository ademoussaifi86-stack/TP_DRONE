
import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DroneService } from '../services/drone';
import { TypeDrone } from '../model/type.model';
import { UpdateCategorie } from '../update-categorie/update-categorie';

@Component({
  selector: 'app-liste-categories',
  standalone: true,
  imports: [CommonModule, UpdateCategorie],
  templateUrl: './liste-categories.html'
})
export class ListeCategoriesComponent implements OnInit {

  categories!: TypeDrone[];

  updatedCat: TypeDrone = {
    idType: 0,
    nomType: ''
  };

  ancienId: number = 0;

  ajout: boolean = true;

  constructor(private droneService: DroneService) {}

  ngOnInit(): void {
    this.chargerCategories();
  }

  // Récupérer les catégories
  chargerCategories(): void {
    this.categories = this.droneService.listeTypes();
  }

  // Préparer l'ajout
  preparerAjout(): void {
  this.updatedCat = {
    idType: 0,
    nomType: ''
  };

  this.ancienId = 0;
  this.ajout = true;
}

  // Ajouter une catégorie
  ajouterCategorie(cat: TypeDrone): void {
    const resultat = this.droneService.ajouterType(cat);

    if (resultat) {
      this.chargerCategories();
      this.preparerAjout();
      alert('Catégorie ajoutée avec succès !');
    } else {
      alert('Catégorie invalide ou déjà existante !');
    }
  }

  // Sélectionner une catégorie à modifier
  updateCat(cat: TypeDrone): void {
  this.ancienId = cat.idType;

  this.updatedCat = {
    idType: cat.idType,
    nomType: cat.nomType
  };

  this.ajout = false;
}

modifierCategorie(cat: TypeDrone): void {
  console.log('ID à modifier :', this.ancienId);
  console.log('Catégorie reçue :', cat);

  const resultat = this.droneService.modifierType(this.ancienId, cat);

  if (resultat) {
    this.chargerCategories();
    this.preparerAjout();
    alert('Catégorie modifiée avec succès !');
  } else {
    alert('Modification impossible !');
  }
}

  // Supprimer une catégorie
  supprimerCategorie(cat: TypeDrone): void {
    const resultat = this.droneService.supprimerType(cat.idType);

    if (resultat) {
      this.chargerCategories();
      alert('Catégorie supprimée avec succès !');
    } else {
      alert('Impossible de supprimer cette catégorie : elle est utilisée par un drone.');
    }
  }

  // Ajouter ou modifier selon le mode
  ajouterOuModifierCategorie(cat: TypeDrone): void {
    if (this.ajout) {
      this.ajouterCategorie(cat);
    } else {
      this.modifierCategorie(cat);
    }
  }
}
