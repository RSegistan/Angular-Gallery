import { Component, Input } from '@angular/core';
import { ImageService } from '../shared/image-service.service';
import { OnChanges } from '@angular/core/src/metadata/lifecycle_hooks';


@Component({
  selector: 'app-gallery',
  templateUrl: './gallery.component.html',
  styleUrls: ['./gallery.component.css']
})
export class GalleryComponent implements OnChanges {
  title = 'Recent Photos';
  @Input() filterBy = 'all';
  visibleImages: any[] = [];

  constructor(private imageService: ImageService) {
    this.visibleImages = this.imageService.getImages();
  }

 ngOnChanges() {
    this.visibleImages = this.imageService.getImages();
  }
}
