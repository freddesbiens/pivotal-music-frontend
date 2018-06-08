import { BrowserModule, BrowserTransferStateModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgModule } from '@angular/core';

import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';

import { MatButtonModule, MatCardModule, MatDialogModule, MatFormFieldModule,
         MatGridListModule, MatIconModule, MatInputModule, MatMenuModule, 
         MatSelectModule, MatToolbarModule } from '@angular/material';

import { FlexLayoutModule } from '@angular/flex-layout';

import { HostnameInterceptor } from "./hostname-interceptor.HttpInterceptor";

import { AppComponent } from './app.component';
import { AppRoutingModule } from './/app-routing.module';
import { AlbumsComponent } from './albums/albums.component';
import { CreateAlbumComponent } from './createalbum/createalbum.component';
import { MessageService } from './common/message.service';
import { MessageListComponent } from './messagelist/messagelist.component';
import { ServerInfoService } from './server-info.service';
import { MusicService } from './music.service';
import { EnumValuesPipe } from './enum-values.pipe';


@NgModule({
  declarations: [
    AppComponent,
    AlbumsComponent,
    CreateAlbumComponent,
    MessageListComponent,
    EnumValuesPipe
  ],
  entryComponents: [MessageListComponent],
  imports: [
    BrowserModule.withServerTransition({ appId: 'pivotal-music' }),
    BrowserTransferStateModule,
    BrowserAnimationsModule,
    AppRoutingModule,
    HttpClientModule,
    MatButtonModule,
    MatCardModule,
    MatDialogModule,
    MatFormFieldModule,
    MatGridListModule,
    MatIconModule,
    MatInputModule,
    MatMenuModule,
    MatSelectModule,
    MatToolbarModule,
    FlexLayoutModule
  ],
  providers: [
    MessageService,
    MusicService,
    ServerInfoService,
    {
      provide: HTTP_INTERCEPTORS,
      useClass: HostnameInterceptor,
      multi: true
    }],
  bootstrap: [AppComponent]
})
export class AppModule { }
