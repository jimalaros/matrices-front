import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { MatricesService } from './matrices.service';
@Component({
  selector: 'app-component',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  numero=0;
  matrices: any ={};

  constructor(private matricesService:MatricesService){};

  form= new FormGroup({
    numero: new FormControl('', Validators.required),
  });

  mostrar()
  {
    this.matricesService.matrices(this.numero)
    .subscribe({
      next: data => {
        console.log("DATA:" + JSON.stringify(data));
        localStorage.setItem('resultado', JSON.stringify(data));
        this.matrices = data
      },
      error: e => {
        console.error(e)
      }
    });
  }
}
