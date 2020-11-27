import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { HttpClient, HttpParams } from '@angular/common/http';
import { API_Key, NewsArticle } from '../models';

@Component({
  selector: 'app-news-list',
  templateUrl: './news-list.component.html',
  styleUrls: ['./news-list.component.css']
})
export class NewsListComponent implements OnInit {

  alpha2Code: string;
  apiKey: any;
  newsArticles : NewsArticle[] = []

  constructor(private activatedroute: ActivatedRoute, private http: HttpClient) { }

  async ngOnInit(): Promise<void> {

    this.alpha2Code = this.activatedroute.snapshot.params['alpha2Code']  


    const url = `https://newsapi.org/v2/top-headlines`
    let params = (new HttpParams())
      .set('country', this.alpha2Code)
      .set('apiKey', this.apiKey)

    this.http
      .get<any>(url, { params: params })
      .toPromise()
      .then(res => {
        const results = res['articles'] as any[]
        this.newsArticles = results.map(r => {
          return {
            source: r['source'].name,
            author: r['author'],
            title: r['title'],
            description: r['description'],
            url: r['url'],
            image: r['urlToImage'],
            published: r['publishedAt'],
            content: r['content'],
          } as NewsArticle
        })
        console.log(this.newsArticles)
      })
  }

  }

  