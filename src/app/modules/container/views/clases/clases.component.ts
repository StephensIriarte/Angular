
import { Component, OnInit } from '@angular/core';
import { debounceTime, map, Observable, Subscription, tap } from 'rxjs';
import { MatTableDataSource } from '@angular/material/table';
import { ClasesService } from 'src/app/services/clases.service';
import { Clases } from './../../../../models/clases.model';
import { ActivatedRoute, Router } from '@angular/router';
import { FormControl } from '@angular/forms';

@Component({
  selector: 'app-clases',
  templateUrl: './clases.component.html',
  styleUrls: ['./clases.component.scss']
})


export class ClasesComponent implements OnInit {
  inputBusqueda = new FormControl();

  textFromOtherComponent: string | null = null



  displayedColumnsTable = ['id', 'nombreClase',  'action']
  tableDataSource$: Observable<MatTableDataSource<Clases>>;


  clasesSelect$: Observable<Clases> | null = null

  susbcriptions: Subscription = new Subscription();

  constructor(private ClasesService: ClasesService, private router:Router) {
    this.tableDataSource$ = this.ClasesService.getClases().pipe(map((clases) => new MatTableDataSource<Clases>(clases)));
  }


  ngOnInit(): void {
    this.susbcriptions.add(
      this.ClasesService.getClasesSelect().subscribe({
          next: (clases) => {
            
          }, error : (error) => {
            console.error(error)
          }
        })
    )

  }


  selectClase(id: number){
    this.clasesSelect$ = this.ClasesService.selectClaseById(id)
    //this.router.navigate(['/datos', id]);
    //console.log('aquii', id)
  }

  deleteClase(id: number){
    this.ClasesService.deleteClasesById(id).subscribe((resp) => {
     // console.log(resp);
    })
    this.getClases();
    alert("Registro Eliminado")
  }

  getClases(){
    this.tableDataSource$ = this.ClasesService.getClases().pipe(tap((Clases) => console.log(Clases)),
                                                            map((Clases) => new MatTableDataSource<Clases>(Clases)));
    console.log("aquiiii ")

  }

}