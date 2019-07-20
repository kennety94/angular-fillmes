import { Injectable } from '@angular/core';

import { Filme } from './filme';
import { AngularFireDatabase } from '@angular/fire/database';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class FilmeService {

  constructor(private db: AngularFireDatabase) { }

  insert(filme: Filme){
    this.db.list('filme').push(filme)
      .then((result: any) => {
        console.log(result.key);
      });
  }

  update(filme: Filme, key: string){
    this.db.list('filme').update(key, filme)
      .catch((error: any) => {
        console.error(error);
      });
  }

  getAll(){
    return this.db.list('filme')
      .snapshotChanges()
      .pipe(
        map(changes =>{
          return changes.map(c => ({ key: c.payload.key, ...c.payload.val() }));
        })
      );
  }

  delete(key: string){
    this.db.object(`filme/${key}`).remove();
  }
}
