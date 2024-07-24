import { Injectable } from '@angular/core';
import {
  HttpRequest,
  HttpHandler,
  HttpEvent,
  HttpInterceptor
} from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable()
export class AuthInterceptor implements HttpInterceptor {

  constructor() {}

  intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    // Get the auth token from the service.
    const authToken = 'YOUR_AUTH_TOKEN';

    // Clone the request and set the new header in one step.
    const authReq = req.clone({
      setHeaders: { Authorization: `Bearer ${authToken}` }
    });

    // Pass on the cloned request instead of the original request.
    return next.handle(authReq);
  }
}
