import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";

import {ITestList} from "../interface";
import {passTestUrl, testListUrl} from "../constsnts/urls";
import {IPassTest} from "../interface/pass-test.interface";

@Injectable({
  providedIn: 'root'
})
export class PassTestService {

  constructor(private httpClient: HttpClient) {
  };

  getTestById(id:number): Observable<IPassTest> {
    return this.httpClient.get<IPassTest>(passTestUrl + id)
  };
}
