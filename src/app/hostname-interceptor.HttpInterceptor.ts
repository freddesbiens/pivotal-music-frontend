import { Injectable } from '@angular/core';
import { HttpRequest, HttpResponse, HttpHandler, HttpEvent, HttpInterceptor } from '@angular/common/http';
import { Observable, pipe } from 'rxjs';
import { tap } from "rxjs/operators";

import { ServerInfo } from "./domain/server-info";

import { ServerInfoService } from "./server-info.service";


@Injectable()
export class HostnameInterceptor implements HttpInterceptor {
    constructor(private serverInfo: ServerInfoService) { }
    intercept(request: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
        return next.handle(request).pipe(
        tap((ev: HttpEvent<any>) => {
          if (ev instanceof HttpResponse) {
            var info = new ServerInfo(ev.headers.get("Music-Backend-Server"));
            this.serverInfo.refreshServerInfo(info);
          }
        }));
    }
}
