import { Injectable } from '@angular/core';
import { HttpClient, HttpResponse } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Good } from '../interfaces/good';
import { map } from 'rxjs/operators';

@Injectable({
    providedIn: 'root'
})
export class HttpDataService {

  constructor(
      private http: HttpClient
  ) { }

  public getGoods(url): Observable<Good[]> {
      return this.http.get(url).pipe(map((res: HttpResponse) => {
          return res.json().map((good: Good) => {
              good.selected = false;
              return good;
          });
      }));
  }
}
