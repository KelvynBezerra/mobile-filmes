import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, RouterModule } from '@angular/router';
import { Router } from '@angular/router';
import { FilmesService } from '../service/filmes.service';



@Component({
  selector: 'app-detalhes',
  templateUrl: './detalhes.page.html',
  styleUrls: ['./detalhes.page.scss'],
})
export class DetalhesPage implements OnInit {
  filmes: any = [];
  destaque: any =[];

  constructor(private route: ActivatedRoute, 
    private rota: Router,
    private router: Router,
    private filmesService: FilmesService) { }

  ngOnInit() {
    this.route.params.subscribe(params => {
      this.nameRecebido = params['name'];
    })
  }
  nameRecebido:string = '';

  async carregarFilmes(){
    this.filmes  = await this.filmesService.getProductions();
    console.log("filmes carregados", this.filmes)

    const [firstKey] = Object.keys(this.filmes);
    this.destaque = this.filmes[firstKey];

    this.filmes.splice(firstKey, 1)
    console.log('firstKey',firstKey)
    console.log('destaque',this.destaque)
    console.log('filmes',this.filmes)

  }
  

pageDetalhes(){
  this.router.navigate(['/detalhes', {name:'Lucas'}])
}

}
