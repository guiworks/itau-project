
import { Injectable } from "@angular/core";
import {
  HttpInterceptor,
  HttpRequest,
  HttpHandler,
  HttpEvent
} from "@angular/common/http";
import {Observable} from "rxjs";

@Injectable()
export class CustomHttpService implements HttpInterceptor {
  intercept(
    request: HttpRequest<any>,
    next: HttpHandler
  ): Observable<HttpEvent<any>> {

    const request_url = 'http://localhost:3000' + request.url;
    const intercepted = request.clone({ url: request_url });

    return next.handle(intercepted);
  }
}
