import { Component, OnInit } from '@angular/core';
import { Filme } from '../shared/filme';
import { FilmeService } from '../shared/filme.service';
import { FilmeDataService } from '../shared/filme-data.service';

@Component({
  selector: 'app-edit',
  templateUrl: './edit.component.html',
  styleUrls: ['./edit.component.css']
})
export class EditComponent implements OnInit {

  filme: Filme;
  key: string = '';

  constructor(private filmeService: FilmeService, private filmeDataService: FilmeDataService) { }

  ngOnInit() {
    this.filme = new Filme();
    this.filmeDataService.currentFilme.subscribe(data => {
      if(data.filme && data.key){
        this.filme = new Filme();
        this.filme.titulo = data.filme.titulo;
        this.filme.ano = data.filme.ano;
        this.key = data.key;
      }
    });
  }

  onSubmit(){
    if(this.key){
      this.filmeService.update(this.filme, this.key);
    }else{
      this.filmeService.insert(this.filme);
    }

    this.filme = new Filme();
  }

}
