import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class OperatorService {

  operator: string = '*';

  constructor() { }
}
