
import { Component, Input, Output, EventEmitter, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { TypeDrone } from '../model/type.model';

@Component({
  selector: 'app-update-categorie',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './update-categorie.html',
  styles: ``
})
export class UpdateCategorie implements OnInit {

  // Recevoir la catégorie depuis le parent
  @Input() categorie!: TypeDrone;

  // Déterminer le mode : ajout ou modification
  @Input() ajout!: boolean;

  // Envoyer la catégorie au parent
  @Output() categorieUpdated = new EventEmitter<TypeDrone>();

  ngOnInit(): void {
    console.log('ngOnInit du composant UpdateCategorie', this.categorie);
  }

  saveCategorie(): void {
  console.log('ID :', this.categorie.idType);
  console.log('Nouveau nom :', this.categorie.nomType);

  this.categorieUpdated.emit({
    idType: this.categorie.idType,
    nomType: this.categorie.nomType.trim()
  });
}
}
