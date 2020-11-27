import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';


import { AppComponent } from './app.component';
import { MainComponent } from './components/main.component';
import { CountryComponent } from './components/country.component';
import { IndexedDatabase } from './indexed.database';
import { NewsListComponent } from './components/news-list.component';

const ROUTES: Routes = [
  { path: '', component: MainComponent },
  { path: 'country', component: CountryComponent },
  { path: 'newsList', component: NewsListComponent },
  
  { path: '**', redirectTo: '/', pathMatch: 'full' }
]

@NgModule({
  declarations: [
    AppComponent,
    MainComponent,
    CountryComponent,
    NewsListComponent,
  ],
  imports: [
    BrowserModule,
    FormsModule, ReactiveFormsModule,
    RouterModule.forRoot(ROUTES), 
    HttpClientModule,
  ],
  providers: [IndexedDatabase],
  bootstrap: [AppComponent]
})
export class AppModule { }
