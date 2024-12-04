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