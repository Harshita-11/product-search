import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
// import 'rxjs/add/operator/catch';
// import 'rxjs/add/observable/throw';
import { map } from 'rxjs/operators';
import { HttpErrorResponse } from '@angular/common/http';
import { HTTPService } from './http.service';
import { Products } from '../model/product';

@Injectable({
  providedIn: 'root'
})
export class ProductListService {

  constructor(
    private httpService: HTTPService) {
  }
  /**
   * Method to get products from json
   */
  getProductsList(): Observable<Products[]> {
    return this.httpService.getTest('../assets/data/product-list.json')
    .pipe(map( (res: Products[]) => {
      const response: Products[] = res;
      return response;
    }));

    // return this.httpService.getTest('../assets/data/product-list.json');
  }

//   getEnterpriseCorpProfileList(): Observable<any[]> {
//     // const url = 'enterprise/' + chainCode + '/corporate-accounts/search?status=all';
//     return this.httpService.getTest('../../../assets-enterprise-corp-profile/data/corp-profile-list.json')
//     // return this.httpService.get(url, 'getEnterpriseCorpProfileList')
//     .map( (res: any[]) => {
//         const response: any[] = res;
//         return response;
//     })
//     .catch((error: HttpErrorResponse) => {
//         return Observable.throw(error.error);
//     });
// }
}
