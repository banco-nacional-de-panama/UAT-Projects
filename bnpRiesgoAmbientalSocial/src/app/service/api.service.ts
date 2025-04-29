import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  url = environment.apiUrl;
  constructor(private http: HttpClient) {}

  // Get Section

  callGetExecute(opcion: string, dataArray: string) {
    const httpParms = new HttpParams({
      fromObject: {
        get: opcion,
        SQLStr: dataArray,
      },
    });
    return this.http.get<any>(this.url + 'get', {
      params: httpParms,
    });
  }

  // Get Section End

  // Post Section

  callPostExecute(dataArray: any) {
    const httpParms = new HttpParams({
      fromObject: {
        post: dataArray.opcion,
        SQLStr: dataArray.SQLStr,
      },
    });
    return this.http.post<any>(this.url + 'post', httpParms);
  }
}
