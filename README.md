# Ma premiere application Angular ! 

![angular_logo](https://github.com/user-attachments/assets/a98e6b4a-40f6-4259-aa81-8b63af604805)

**Notions vues :**

- Creer une application Angular ✅
```c
ng new nameofapplication --style=scss --skip-tests=true
```

- Lancer un server ✅
```c
ng serve
```
- Creer un component ✅
```c
ng generate component nameofcomponent
```

- Utiliser une interface pour initialiser des valeurs ✅
```c
export class FaceSnapComponent implements OnInit {
  title!: string;
  description!: string;
  createdAt!: Date;
  snaps!: number;
  imageUrl!: string;
ngOnInit() {
  this.title = 'Archibald';
  this.description = 'Mon meilleur ami depuis toujours !';
  this.createdAt = new Date();
  this.snaps = 5;
}
```
- Utiliser une string interpolation ✅

<h2>{{ title }}</h2>

- Inserer une image ✅

this.imageUrl = 'https://www.akc.org/wp-content/uploads/2017/11/Chow-Chow-On-White-01.jpg';

face-snap.component.html
<img [src]="imageUrl" [alt]="title">


- Créer une methode ❌

```ts
onAddSnap(): void {
    console.log("Méthode appelée !");
  }
```

```c
console.log 
imprime un message dans la console (faite inspecter sur votre page web et cliquer sur le bouton console)
c'est equivalent de printf 
```

- Event-binding (Liaison par événements) ❌
  - Bouton qui s'incrémente ✅

  dans face-snap.component.ts
  
  ```ts
  onAddSnap(): void {
    this.snaps++; // Incrémentation de la variable
  }
  ```
  Le nom de méthode qui commence par on signale que cette méthode répond à un événement.

  dans face-snap.component.html
  ```html
  <p>
		<button (click)="onAddSnap()">snaps</button>
		🤌 {{ snaps }}
	</p>
  ```

- Créer une class et initialiser les valeurs avec un constructor ✅	 


```ts
export class FaceSnap  {
	constructor(public title: string,
				public description:string,
				public createdAt: Date,
				public snaps: number,
				public imageUrl: string)
	{}
}
```

- Comprendre import ✅

import { Component, OnInit } from '@angular/core';

@angular/core c'est une librairie qui contient que des outils d'angular.
Donc la on import la librairie comme cela on peut utiliser Component et OnInit. 
















❌