import { FormGroup, Validators, FormControl } from '@angular/forms';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.css']
})
export class FormComponent implements OnInit {

  public form: FormGroup = new FormGroup({
    nome: new FormControl(null,[Validators.required]),
    cpf: new FormControl(null,[Validators.required, Validators.pattern(/([0-9]{2}[\.]?[0-9]{3}[\.]?[0-9]{3}[\/]?[0-9]{4}[-]?[0-9]{2})|([0-9]{3}[\.]?[0-9]{3}[\.]?[0-9]{3}[-]?[0-9]{2})/)])
  });

  constructor() { }

  ngOnInit() {
  }

  enviar(){
    alert('FORM ENVIADO!');
  }

}
