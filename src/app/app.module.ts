import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AlertModule } from 'ngx-bootstrap';

import { ImageFilterPipe } from './shared/filter.pipe';
import { AppComponent } from './app.component';
import { NavbarComponent } from './navbar/navbar.component';
import { GalleryComponent } from './gallery/gallery.component';
import { ImageDetailComponent } from './image-detail/image-detail.component';
import { ImageService } from './shared/image-service.service';
import { appRoutes } from '../routes';
import { RouterModule } from '@angular/router';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    GalleryComponent,
    ImageDetailComponent,
    ImageFilterPipe
  ],
  imports: [
    BrowserModule,
    AlertModule.forRoot(),
    RouterModule.forRoot(appRoutes)
  ],
  providers: [ImageService, ImageFilterPipe],
  bootstrap: [AppComponent]
})
export class AppModule { }
