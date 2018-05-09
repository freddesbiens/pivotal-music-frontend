import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgModule } from '@angular/core';

import { HttpClientModule }    from '@angular/common/http';

import {MatButtonModule, MatDialogModule, MatToolbarModule} from '@angular/material';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './/app-routing.module';
import { AlbumsComponent } from './albums/albums.component';
import { CreateAlbumComponent } from './createalbum/createalbum.component';
import { MessageService } from './message.service';
import { MessageListComponent } from './messagelist/messagelist.component';
import { ServerinfoService } from './serverinfo.service';


@NgModule({
  declarations: [
    AppComponent,
    AlbumsComponent,
    CreateAlbumComponent,
    MessageListComponent
  ],
  imports: [
    BrowserModule.withServerTransition({ appId: 'pivotal-music' }),
    BrowserAnimationsModule,
    AppRoutingModule,
    HttpClientModule,
    MatButtonModule,
    MatDialogModule,
    MatToolbarModule
  ],
  providers: [MessageService, ServerinfoService],
  bootstrap: [AppComponent]
})
export class AppModule { }
