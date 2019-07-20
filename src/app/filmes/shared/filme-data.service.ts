import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { Filme } from './filme';

@Injectable({
  providedIn: 'root'
})
export class FilmeDataService {
  private filmeSource = new BehaviorSubject({ filme: null, key: '' });
  currentFilme = this.filmeSource.asObservable();

  constructor() { }

  changeFilme(filme: Filme, key: string){
    this.filmeSource.next({ filme: filme, key: key });
  }
}
