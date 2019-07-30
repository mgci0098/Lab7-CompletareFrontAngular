import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ComentariiService } from '../../services/comentarii.service';
import {PageEvent} from '@angular/material/paginator';

@Component({
  selector: 'app-comentarii',
  templateUrl: './comentarii.component.html',
  styleUrls: ['./comentarii.component.scss']
})
export class ComentariiComponent implements OnInit {

    public comentarii: any = null;
    public comentariiFiltrare: any = null;
    public displayedColumns: string[] = ['text', 'idFilm', 'important'];

     // MatPaginator Inputs
  public length = 0;
  pageSize = 3;

  // MatPaginator Output
  pageEvent: PageEvent;


  constructor(private comentariiService: ComentariiService, private router: Router) {
      this.getAllComentarii();
      this.getNrOfItems();
    }

  ngOnInit() {

  }

  getAllComentarii(){
      this.comentariiService.getAllComentarii().subscribe(c => {
          this.comentarii = c;
          console.log(c);
      })
  }

  getNrOfItems(){
    this.comentariiService.getAllComentarii().subscribe(c => {
        this.length = c.numberOfPages * this.pageSize;
        console.log(c.numberOfPages);
    })
}

  filterComment(filter: string){
    this.comentariiService.getAllComentariiFiltered(filter).subscribe(c =>{
      this.comentariiFiltrare = c;
      console.log(c);
    })

  }


  goBack(){
    this.router.navigate(['']);
  }


  getNextPaginatedComentarii(index : number){
    this.comentariiService.getNextPageComentarii(index).subscribe(c => {
        this.comentarii = c;
        console.log(c);
    })
}

}
