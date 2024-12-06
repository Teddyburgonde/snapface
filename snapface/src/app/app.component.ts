import { Component, OnInit } from '@angular/core';
import { FaceSnapComponent } from './face-snap/face-snap.component';
import { FaceSnap } from './models/face-snap';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    FaceSnapComponent
  ],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})

export class AppComponent implements OnInit {
  mySnap!: FaceSnap;
  myOtherSnap!: FaceSnap;
  myLastSnap!: FaceSnap;

  ngOnInit(): void {
    this.mySnap = new FaceSnap(
      'Archibald',
      'Mon meilleur ami depuis toujours !',
      'https://www.akc.org/wp-content/uploads/2017/11/Chow-Chow-On-White-01.jpg',
      new Date(),
      10
    );
    this.myOtherSnap = new FaceSnap(
    'Three Rock Moutain',
    'Un endroit magnifique pour les randonnées.',
    'https://t3.ftcdn.net/jpg/01/86/35/50/360_F_186355025_QIDaOSxmPb3qZvmHsdr3IgGv3pzGANuR.jpg',
    new Date(),
    6
  );
  this.myLastSnap = new FaceSnap(
    'Un bon repas',
    'Mmmm que c\'est bon!',
    'https://odelices.ouest-france.fr/images/articles/2024/06/semaine27-1024x683.jpg',
    new Date(),
    156
  );
}
}
