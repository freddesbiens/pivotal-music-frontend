import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgModule } from '@angular/core';

import 'hammerjs'

import { HttpClientModule }    from '@angular/common/http';

import {MatButtonModule, MatDialogModule, MatToolbarModule} from '@angular/material';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './/app-routing.module';
import { AlbumsComponent } from './albums/albums.component';
import { CreateAlbumComponent } from './createalbum/createalbum.component';
import { MessageService } from './message.service';
import { MessageListComponent } from './messagelist/messagelist.component';


@NgModule({
  declarations: [
    AppComponent,
    AlbumsComponent,
    CreateAlbumComponent,
    MessageListComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    AppRoutingModule,
    HttpClientModule,
    MatButtonModule,
    MatDialogModule,
    MatToolbarModule
  ],
  providers: [MessageService],
  bootstrap: [AppComponent]
})
export class AppModule { }
