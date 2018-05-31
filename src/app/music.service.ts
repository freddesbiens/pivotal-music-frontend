import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

import { Observable, of } from 'rxjs';
import { catchError, map, tap } from 'rxjs/operators';

import { BaseService } from "./common/base-service";
import { MessageService } from "./common/message.service";

import { Album } from "./domain/album";


const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' })
};

@Injectable()
export class MusicService extends BaseService {

  private baseURL = 'http://pivmusic-svr.cfapps.io';  
  
  constructor(private http: HttpClient, messageService: MessageService) { 
    super(messageService);
  }

  /** GET albums from the server */
  getAlbums (): Observable<Album[]> {
    return this.http.get<Album[]>(this.baseURL)
      .pipe(
        tap(albums => this.log(`Fetched albums`)),
        catchError(this.handleError('getAlbums', []))
      );
  }
}
