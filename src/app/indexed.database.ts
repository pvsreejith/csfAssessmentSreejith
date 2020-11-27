import { Injectable } from "@angular/core";
import Dexie from 'dexie';
import { API_Key } from './models';
import { HttpClient } from '@angular/common/http';


@Injectable()
export class IndexedDatabase extends Dexie {

  private apiKey: Dexie.Table<API_Key, string>;

  constructor() {
    super('apiKey')
    //create schema
    this.version(1).stores({
      apiKey: 'apiKey'
    })

    this.apiKey = this.table('apiKey')
  }

  async addApi(a: any): Promise<any> {


    a.apiKey = a.apiKey.trim().toLowerCase()
    this.apiKey = a.apiKey
    console.info(this.apiKey)
      return await this.apiKey.add(a)

  }

  async getApi():Promise<any> {
      
    
    return this.apiKey.orderBy('apiKey').toArray()


  }

  

  

  
}
