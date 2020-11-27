import { HttpClient, HttpParams } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { IndexedDatabase } from '../indexed.database';
import { CountryList } from '../models';




@Component({
  selector: 'app-country',
  templateUrl: './country.component.html',
  styleUrls: ['./country.component.css']
})
export class CountryComponent implements OnInit {

  c;

  form: FormGroup
  countryLists: CountryList[] = []

 

  constructor( private router: Router, countryList : IndexedDatabase,  private http: HttpClient) { 

  }

  ngOnInit(): void {

    const url = "https://restcountries.eu/rest/v2/alpha?codes=ae;ar;at;au;be;bg;br;ca;ch;cn;co;cu;cz;de;eg;fr;gb;gr;hk;hu;id;ie;il;in;it;jp;kr;lt;lv;ma;mx;my;ng;nl;no;nz;ph;pl;pt;ro;rs;ru;sa;se;sg;si;sk;th;tr;tw;ua;us;ve;za"
    
    this.http.get<any>(url)
      .toPromise()
      .then(resp => {
        const results = resp as any[]
        this.countryLists = results.map(r => {
          return {
            name: r['name'],
            alpha2Code: r['alpha2Code'],
            flag: r['flag']
          } as CountryList
        })
        console.info('>>> countryLists: ', this.countryLists)
      })

    

  }

  news(){
    
    this.router.navigate(['/news'])
    

  }

}
