import { Component, OnInit } from '@angular/core';
import { Filme } from '../shared/filme';
import { FilmeService } from '../shared/filme.service';
import { FilmeDataService } from '../shared/filme-data.service';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})
export class ListComponent implements OnInit {

  filmes: Observable<any>;

  constructor(private filmeService: FilmeService, private filmeDataService: FilmeDataService) { }

  ngOnInit() {
    this.filmes = this.filmeService.getAll();
  }

  delete(key: string){
    this.filmeService.delete(key);
  }

  edit(filme: Filme, key: string){
    this.filmeDataService.changeFilme(filme, key);
  }

}
