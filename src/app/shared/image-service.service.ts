import { Injectable } from '@angular/core';

@Injectable()
export class ImageService {
  visibleImages= [];

  getImages() {
    return this.visibleImages = IMAGES.slice(0);
  }

  getImage(id: number) {
    return IMAGES.slice(0).find(image => image.id === id);
  }
}

const IMAGES = [
  {'id': 1, 'category': 'boats', 'caption': 'view from a boat', 'url': 'assets/img/boat_1.jpeg'},
  {'id': 2, 'category': 'boats', 'caption': 'view from a boat', 'url': 'assets/img/boat_2.jpeg'},
  {'id': 3, 'category': 'camping', 'caption': 'view from a camp', 'url': 'assets/img/camp_1.jpeg'},
  {'id': 4, 'category': 'camping', 'caption': 'view from a camp', 'url': 'assets/img/camp_2.jpeg'},
  {'id': 5, 'category': 'books', 'caption': 'view from a book', 'url': 'assets/img/book_1.jpeg'},
  {'id': 6, 'category': 'books', 'caption': 'view from a book', 'url': 'assets/img/book_2.jpeg'}
];
