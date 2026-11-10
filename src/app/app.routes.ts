
import { Routes } from '@angular/router';

import { DroneComponent } from './drone/drone';
import { AddDroneComponent } from './add-drone/add-drone';
import { UpdateDroneComponent } from './update-drone/update-drone';

import { RechercheParCategorieComponent } from './recherche-par-categorie/recherche-par-categorie';
import { RechercheParNomComponent } from './recherche-par-nom/recherche-par-nom';
import { RechercheParNomPipeComponent } from './recherche-par-nom-pipe/recherche-par-nom-pipe';

import { Login } from './login/login';
import { ForbiddenComponent } from './forbidden/forbidden';
import { ListeCategoriesComponent } from './liste-categories/liste-categories';

import { droneGuard } from './drone-guard';

export const routes: Routes = [
  { path: 'drones', component: DroneComponent },

  {
    path: 'add-drone',
    component: AddDroneComponent,
    canActivate: [droneGuard]
  },

  { path: 'update-drone/:id', component: UpdateDroneComponent },

  { path: 'recherche-par-categorie', component: RechercheParCategorieComponent },

  { path: 'rechercheParNom', component: RechercheParNomComponent },

  { path: 'rechercheParNomPipe', component: RechercheParNomPipeComponent },

  { path: 'listeCategories', component: ListeCategoriesComponent },

  { path: 'login', component: Login },

  { path: 'app-forbidden', component: ForbiddenComponent },

  { path: '', redirectTo: 'drones', pathMatch: 'full' },

  { path: '**', redirectTo: 'drones' }
];
