import { Injectable } from '@angular/core';
import { HttpRequest, HttpResponse, HttpHandler, HttpEvent, HttpInterceptor, HTTP_INTERCEPTORS } from '@angular/common/http';
import { Observable, of, throwError } from 'rxjs';
import { delay, mergeMap, materialize, dematerialize } from 'rxjs/operators';

import { cardMockData } from './card-data';

let creditCards = cardMockData || [];

@Injectable()
export class FakeBackendInterceptor implements HttpInterceptor {
    intercept(request: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
        const { url, method, headers, body } = request;

        return of(null)
            .pipe(mergeMap(handleRoute))
            .pipe(materialize())
            .pipe(delay(500))
            .pipe(dematerialize());

        function handleRoute() {
            switch (true) {
                case url.endsWith('/create') && method === 'POST':
                    return createCreditCard();
                default:
                    return next.handle(request);
            }
        }

        function createCreditCard() {
            const randomNumber = Math.round(Math.random() * 100);

            if (randomNumber % 2) return error(body);
            return ok(body)
        }

        function ok(body?) {
            return of(new HttpResponse({ status: 200, body }))
        }

        function error(body) {
            return throwError({ body });
        }
    }
}

export const fakeBackendProvider = {
    provide: HTTP_INTERCEPTORS,
    useClass: FakeBackendInterceptor,
    multi: true
};