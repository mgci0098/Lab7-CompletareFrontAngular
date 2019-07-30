import { Component, OnInit, ViewChild } from '@angular/core';
import { Router } from '@angular/router';
import { FilmService } from '../../services/filme.service';

@Component({
  selector: 'app-filme',
  templateUrl: './filme.component.html',
  styleUrls: ['./filme.component.scss']
})
export class FilmeComponent implements OnInit {

    public filme: any = null;
    public displayedColumns: string[] = ['title', 'description',
                                         'genre', 'dateAdded', 
                                         'duration', 'releaseYear',
                                        'director', 'rating',
                                        'watched', 'numberOfComments'];


  constructor(private filmeService: FilmService, private router: Router) {
      this.getAllFilme();
    }

  ngOnInit() {    
  }


  getAllFilme(){
    this.filmeService.getAllFilme().subscribe(f => {
        this.filme = f;
        
        console.log(f);          
    })
}

  goBack(){
    this.router.navigate(['']);
  }

}
