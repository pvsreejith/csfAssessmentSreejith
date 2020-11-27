import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { API_Key, CountryList} from '../models';
import { HttpClient, HttpParams } from '@angular/common/http';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.css']
})
export class MainComponent implements OnInit {

  form: FormGroup
  apiKey: string;
  http: any;
  url: any

  constructor(private fb: FormBuilder,
    private router: Router, http: HttpClient) { }

  ngOnInit(): void {
    this.form = this.fb.group({
      apiKey: this.fb.control('', [ Validators.required ])
    })
  }

  saveAPI() {
    const apiKey = this.form.get('apiKey').value
    this.apiKey = apiKey;
    this.router.navigate(['/country'])
    console.info('>>>>APIKEY' , apiKey)

  }
  

  delete() {
    
  }
  
}
