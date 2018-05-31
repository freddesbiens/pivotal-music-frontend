import { Injectable } from '@angular/core';
import { Observable, of, Subject } from 'rxjs';

import { HttpClient, HttpHeaders } from '@angular/common/http';

import { catchError, map, tap } from 'rxjs/operators';

import { BaseService } from './common/base-service';
import { MessageService } from "./common/message.service";

import { ServerInfo } from "./domain/server-info";

const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' })
};

@Injectable()
export class ServerInfoService extends BaseService{

  private baseURL = 'https://pivmusic-svr.cfapps.io/serverinfo';

  private info: Subject<ServerInfo> = new Subject();

  constructor(private http: HttpClient, private msg: MessageService) {
    super(msg);
  }

  getServerInfo(): Observable<ServerInfo> {
    return this.info.asObservable();
  }

  refreshServerInfo(svrInfo: ServerInfo) {
    this.info.next(svrInfo);
  }

  refreshServerInfoFromService(): Observable<any> {
    return this.http.get<ServerInfo>(this.baseURL)
      .pipe(
        tap(newInfo => this.info.next(newInfo)),
        catchError(this.handleError('refreshServerInfoFromService', []))
      );
  }
}
