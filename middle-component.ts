// import { Component } from '@angular/core';

// @Component({
//   selector: 'app-middle-component',
//   imports: [],
//   templateUrl: './middle-component.html',
//   styleUrl: './middle-component.css',
// })
// export class MiddleComponent {

// }
// src/app/components/pages/middle/middle.component.ts
import { Component, signal } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Router } from '@angular/router'; // Nécessaire pour la redirection Réserver

@Component({
  selector: 'app-middle',
  standalone: true,
  imports: [CommonModule, FormsModule], // Importe FormsModule pour [(ngModel)]
  templateUrl: './middle-component.html',
  styleUrl: './middle-component.css'
})
export class MiddleComponent {
  // Données de simulation
  sites = [
    { id: 1, name: 'Plage de Kribi', category: 'Plages', location: 'Kribi', description: 'Le sable blanc et la mer bleu...' },
    { id: 2, name: 'Mont Cameroun', category: 'Montagnes', location: 'Buea', description: 'Le plus haut sommet d\'Afrique de l\'Ouest.' },
    // ... autres sites ...
  ];
  categories = ['Toutes', 'Plages', 'Montagnes', 'Cultures', 'Parcs'];
  
  selectedCategory = signal('Toutes');
  searchTerm = signal('');
  
  // Filtrage des sites basé sur la catégorie et le terme de recherche
  filteredSites = signal(this.sites); 

  constructor(private router: Router) {}

  filterSites(category: string) {
    this.selectedCategory.set(category);
    this.applyFilter();
  }
  
  applyFilter() {
    let filtered = this.sites;
    const currentCategory = this.selectedCategory();
    const term = this.searchTerm().toLowerCase();

    if (currentCategory !== 'Toutes') {
      filtered = filtered.filter(s => s.category === currentCategory);
    }
    
    if (term) {
      filtered = filtered.filter(s => 
        s.name.toLowerCase().includes(term) || 
        s.location.toLowerCase().includes(term)
      );
    }
    
    this.filteredSites.set(filtered);
  }

  // Redirige vers la page de réservation avec l'ID du site
  goToReservation(siteId: number) {
    this.router.navigate(['/reservations'], { queryParams: { siteId: siteId } });
  }
}