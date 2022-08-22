
import { Component, OnInit } from '@angular/core';
import { debounceTime, map, Observable, Subscription, tap } from 'rxjs';
import { MatTableDataSource } from '@angular/material/table';
import { ClasesService } from 'src/app/services/clases.service';
import { Clases } from './../../../../models/clases.model';
import { ActivatedRoute, Router } from '@angular/router';
import { FormControl, FormGroup, Validators} from '@angular/forms';

@Component({
  selector: 'app-clases',
  templateUrl: './clases.component.html',
  styleUrls: ['./clases.component.scss']
})


export class ClasesComponent implements OnInit {
  inputBusqueda = new FormControl();
  element = false;
  textFromOtherComponent: string | null = null
 
  
  myForm = new FormGroup({
    id: new FormControl ([{disabled: true }, [Validators.required]]),
    nombreClase: new FormControl(null, Validators.required),
  })

  displayedColumnsTable = ['id', 'nombreClase',  'action']
  tableDataSource$: Observable<MatTableDataSource<Clases>>;


  clasesSelect$: Observable<Clases> | null = null

  susbcriptions: Subscription = new Subscription();

  constructor(private ClasesService: ClasesService, private activatedRoute: ActivatedRoute, private router:Router) {
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

  showData() {
    return (this.element = true);
  }
  hideData() {
    return (this.element = false);
  }



  selectClase(id: number){
   
    this.clasesSelect$ = this.ClasesService.selectClaseById(id)

    var idClase = id
    let idClaseTrans = Number(idClase) 

    this.ClasesService.selectClaseById(idClaseTrans)
    

  this.susbcriptions.add(
    this.activatedRoute.params.subscribe((param) => {
      this.ClasesService.selectClaseById(idClaseTrans).subscribe({
        next: (clases) => this.myForm.patchValue(clases),
        error: () => this.myForm.reset()
      })
    })
  )

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
   

  }

  updateData(value: any){
    let body = {
      id: value.id,
      nombreClase: value.nombreClase
    }
    
    if(value.id!){
      this.ClasesService.updateData(body, value.id) .subscribe(response => {
        console.log(response);
      })

      this.myForm.reset({
        id: "",
        nombreClase:""
      });

      this.getClases();
      alert("Clase Actualizada")
    }else{
      this.ClasesService.addClase(body, value.id).
      subscribe(response => {
        console.log(response);
      })
      this.getClases();
      alert("Clase Agregada")
    }

    
  }

  

}
