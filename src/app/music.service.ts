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

  private baseURL = 'https://pivmusic-svr.cfapps.io/albums';  
  
  constructor(private http: HttpClient, messageService: MessageService) { 
    super(messageService);
  }

  /** GET albums from the server */
  getAlbums (): Observable<Album[]> {
    return this.http.get<Album[]>(this.baseURL)
      .pipe(
        catchError(this.handleError('getAlbums', []))
      );
  }
}
