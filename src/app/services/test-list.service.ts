import {Injectable} from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";

import {ITestList} from "../interface";
import {testListUrl} from "../constsnts/urls";

@Injectable({
  providedIn: 'root'
})
export class TestListService {

  constructor(private httpClient: HttpClient) {
  }

  getAllList(): Observable<ITestList[]> {
    return this.httpClient.get<ITestList[]>(testListUrl)
  };

  createTest(listObg: ITestList): Observable<ITestList> {
    return this.httpClient.post<ITestList>(testListUrl, listObg);
  };

  updateTest(id: number, listObg: ITestList): Observable<ITestList> {
    return this.httpClient.put<ITestList>(testListUrl + id, listObg)
  };

  deleteTest(id: number): Observable<ITestList> {
    return this.httpClient.delete<ITestList>(testListUrl + id)
  };
}
