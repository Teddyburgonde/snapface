import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-face-snap',
  imports: [],
  templateUrl: './face-snap.component.html',
  styleUrl: './face-snap.component.scss'
})
export class FaceSnapComponent implements OnInit{
  title!: string;
  description!: string;
  createdAt!: Date;
  snaps!: number;
  imageUrl!: string;
  snapButtonText!: string;
  userHasSnapped!: boolean;
  
  ngOnInit(): void {
    this.title = 'Archibald';
    this.description = 'Mon meilleur ami depuis toujours !'
    this.createdAt = new Date();
    this.snaps = 5;
    this.imageUrl = 'https://www.akc.org/wp-content/uploads/2017/11/Chow-Chow-On-White-01.jpg';
	this.snapButtonText = 'Oh Snap!';
	this.userHasSnapped = false;
  }

  onSnap(): void {
	if (this.userHasSnapped)
		this.unSnap();
	else
		this.snap();
  }

 	unSnap()
	{
		this.snaps--;
		this.snapButtonText = 'Oh Snap!';
		this.userHasSnapped = false;
	}

	snap()
	{
		this.snaps++;
		this.snapButtonText = 'Oops, Un Snap!';
		this.userHasSnapped = true;
	}

}