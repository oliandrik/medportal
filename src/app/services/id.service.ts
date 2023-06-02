import { Injectable } from '@angular/core';
import {BehaviorSubject, Observable} from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class IdService {

  private _testListId = new BehaviorSubject<number | null>(null)

  setId(id:number): void {
    this._testListId.next(id)
  }

  removeId(): void {
    this._testListId.next(null)
  }

  getId(): Observable<number | null> {
    return this._testListId.asObservable()
  }
}
